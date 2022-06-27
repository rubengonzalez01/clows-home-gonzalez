import styles from './CartForm.module.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppSpinner from '../AppSpinner/AppSpinner';
import toast, { Toaster } from 'react-hot-toast';

const schema = Yup.object().shape({
    name: Yup.string()
                .required('Este campo es obligatorio')
                .min(3, 'El nombre es demasiado corto')
                .max(30, 'Máximo 30 caracteres'),
    lastname: Yup.string()
                .required('Este campo es obligatorio')
                .min(3, 'El apellido es demasiado corto')
                .max(30, 'Máximo 30 caracteres'),
    dni: Yup.string()
                .required('Este campo es obligatorio')
                .min(7, 'El DNI es demasiado corto')
                .max(8, 'Máximo 8 caracteres'),
    email: Yup.string()
                .required('Este campo es obligatorio')
                .email('Formato de email inválido'),
    address: Yup.string()
                .required('Este campo es obligatorio')
                .min(4, 'La dirección es demasiado corta')
                .max(30, 'Máximo 30 caracteres'),
})

export default function CartForm() {
  const { itemList, totalPrice, clear } = useCartContext();
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createOrder = async (values) => {
    const newOrder = {
      buyer: values,
      items: itemList.map(({ id, name, quantity, price }) => ({ id, name, quantity, price })),
      total: totalPrice(),
      date: new Date(),
    };

    setLoading(true);
    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const productsRef = collection(db, "products");
    const q = query(productsRef, where(documentId(), 'in', itemList.map(item => item.id)));

    const outOfStock = [];
    const products = await getDocs(q);

    products.docs.forEach((doc) => {
        const itemToUpdate = itemList.find(prod => prod.id === doc.id);

        if ((doc.data().stock - itemToUpdate.quantity) >= 0) {
            batch.update(doc.ref, {
                stock: doc.data().stock - itemToUpdate.quantity
            });
        } else {
            outOfStock.push(itemToUpdate);
        }
    })

    if (outOfStock.length === 0) {
      addDoc(ordersRef, newOrder)
        .then((doc) => {
            batch.commit();
            setOrderId(doc.id);
            setLoading(false);
            clear();
        })
    } else {
        setLoading(false);
        toast.error("Hay items sin stock");
    }
    
  }

  if (orderId) {
    navigate(`/checkout/status/${ orderId }`);
  }

  return (
    <div className={ styles.cartForm }>
      <h5 className={ styles.cartForm__title }>Datos personales</h5>
      <p>Solicitamos únicamente la información escencial para poder finalizar su compra.</p>
      <Toaster position='top-center' />
      <div>
        <Formik
          initialValues={{ name: '', lastname: '', dni: '', email: '', address: '' }}
          validationSchema={ schema }
          onSubmit={ createOrder }
          >
          {
            ( formik ) => (
              <form onSubmit={ (formik.handleSubmit) }>
                <div className={ styles.cartForm__data }>
                  <div className={ styles.cartForm__group }>
                    <div className='mb-3'>
                      <label
                        className='form-label' 
                        htmlFor='name'>Nombre*</label>
                      <input
                        className={`form-control ${ formik.errors.name && formik.touched.name && styles.cartForm__alert }`}
                        id='name'
                        type="text"
                        name="name"
                        onChange={ formik.handleChange }
                        onBlur={ formik.handleBlur }
                        value={ formik.values.name }
                        disabled={ loading }
                      />
                      { formik.errors.name && formik.touched.name && <small className={ styles.cartForm__alert }>{ formik.errors.name }</small> }
                    </div>
                    <div className='mb-3'>
                      <label
                        className='form-label' 
                        htmlFor='lastname'>Apellido*</label>
                      <input
                        className={`form-control ${ formik.errors.lastname && formik.touched.lastname && styles.cartForm__alert }`}
                        id='lastname'
                        type="text"
                        name="lastname"
                        onChange={ formik.handleChange }
                        onBlur={ formik.handleBlur }
                        value={ formik.values.lastname }
                        disabled={ loading }
                      />
                      { formik.errors.lastname && formik.touched.lastname && <small className={ styles.cartForm__alert }>{ formik.errors.lastname }</small> }
                    </div>
                  </div>
                  <div className={ styles.cartForm__group }>
                    <div className='mb-3'>
                      <label
                        className='form-label' 
                        htmlFor='dni'>DNI*</label>
                      <input
                        className={`form-control ${ formik.errors.dni && formik.touched.dni && styles.cartForm__alert }`}
                        id='dni'
                        type="number"
                        name="dni"
                        onChange={ formik.handleChange }
                        onBlur={ formik.handleBlur }
                        value={ formik.values.dni }
                        disabled={ loading }
                      />
                      { formik.errors.dni && formik.touched.dni && <small className={ styles.cartForm__alert }>{ formik.errors.dni }</small> }
                    </div>
                    <div className='mb-3'>
                      <label
                        className='form-label' 
                        htmlFor='email'>Correo electrónico*</label>
                      <input
                        className={`form-control ${ formik.errors.email && formik.touched.email && styles.cartForm__alert }`}
                        id='email'
                        type="email"
                        name="email"
                        onChange={ formik.handleChange }
                        onBlur={ formik.handleBlur }
                        value={ formik.values.email }
                        disabled={ loading }
                      />
                      { formik.errors.email && formik.touched.email && <small className={ styles.cartForm__alert }>{ formik.errors.email }</small> }
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label
                      className='form-label' 
                      htmlFor='address'>Dirección*</label>
                    <input
                      className={`form-control ${ formik.errors.address && formik.touched.address && styles.cartForm__alert }`}
                      id='address'
                      type="text"
                      name="address"
                      onChange={ formik.handleChange }
                      onBlur={ formik.handleBlur }
                      value={ formik.values.address }
                      disabled={ loading }
                    />
                    { formik.errors.address && formik.touched.address && <small className={ styles.cartForm__alert }>{ formik.errors.address }</small> }

                  </div>
                </div>

                <button 
                  className={`btn btn-lg btn-block ${ styles.cartForm__button_primary }`} 
                  type="submit" 
                  disabled={ loading }
                  >
                    {
                      loading ? <AppSpinner variant='light' withClass={false} size='sm' />
                              : 'Confirmar compra'
                    }
                </button>
              </form>
            )
          }
        </Formik>
      </div>
    </div>
  );
}