import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import styles from './AuthRegisterForm.module.scss';
import AppSpinner from '../AppSpinner/AppSpinner';
import { useAuthContext } from '../../context/AuthContext';

const schema = Yup.object().shape({
  email: Yup.string()
              .required('Este campo es obligatorio')
              .email('Formato de email inválido'),
  password: Yup.string()
              .required('Este campo es obligatorio')
              .min(6, 'El password es muy corto')
              .max(15, 'Máximo 15 caracteres'),
  confirmPassword: Yup.string()
              .required('Este campo es obligatorio')
              .oneOf([Yup.ref('password'), null], "Los password no coinciden"),
})


export default function AuthRegisterForm({ close, setOption }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuthContext();

  const userRegister = (values) => {
    setLoading(true);
    register(values)
      .then(() => { close() })
      .catch(err => { setError(err) })
      .finally(() => { setLoading(false) });
  }

  return (
    <>
      <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validationSchema={ schema }
          onSubmit={ userRegister }
          >
          {
            ( formik ) => (
              <form onSubmit={ (formik.handleSubmit) }>
                <div className={ styles.authRegisterForm__data }>
                  <div className='mb-3'>
                    <label
                      className='form-label' 
                      htmlFor='email'>Correo Electronico*</label>
                    <input
                      className={`form-control ${ formik.errors.email && formik.touched.email && styles.authRegisterForm__alert }`}
                      id='email'
                      type="email"
                      name="email"
                      onChange={ formik.handleChange }
                      onBlur={ formik.handleBlur }
                      value={ formik.values.email }
                      disabled={ loading }
                    />
                    { formik.errors.email && formik.touched.email && <small className={ styles.authRegisterForm__alert }>{ formik.errors.email }</small> }
                  </div>      
                  <div className='mb-3'>
                    <label
                      className='form-label' 
                      htmlFor='password'>Contraseña*</label>
                    <input
                      className={`form-control ${ formik.errors.password && formik.touched.password && styles.authRegisterForm__alert }`}
                      id='password'
                      type="password"
                      name="password"
                      onChange={ formik.handleChange }
                      onBlur={ formik.handleBlur }
                      value={ formik.values.password }
                      disabled={ loading }
                    />
                    { formik.errors.password && formik.touched.password && <small className={ styles.authRegisterForm__alert }>{ formik.errors.password }</small> }
                  </div>
                  <div className='mb-3'>
                    <label
                      className='form-label' 
                      htmlFor='confirmPassword'>Repetir contraseña*</label>
                    <input
                      className={`form-control ${ formik.errors.confirmPassword && formik.touched.confirmPassword && styles.authRegisterForm__alert }`}
                      id='confirmPassword'
                      type="password"
                      name="confirmPassword"
                      onChange={ formik.handleChange }
                      onBlur={ formik.handleBlur }
                      value={ formik.values.confirmPassword }
                      disabled={ loading }
                    />
                    { formik.errors.confirmPassword && formik.touched.confirmPassword && <small className={ styles.authRegisterForm__alert }>{ formik.errors.confirmPassword }</small> }
                  </div>
                  { 
                    error && 
                    <div className='mb-3'>
                      <small className={ styles.authRegisterForm__alert }>{ error }</small> 
                    </div> 
                  }
                </div>
                <div className={ styles.authRegisterForm__actions }>
                  <button 
                    className={`btn btn-lg btn-block ${ styles.authRegisterForm__button_secondary }`} 
                    onClick={ () => setOption(true) }
                    type="button" 
                    disabled={ loading }>
                    <MdKeyboardArrowLeft />
                    Volver
                  </button>
                  <button 
                    className={`btn btn-lg btn-block ${ styles.authRegisterForm__button_primary }`} 
                    type="submit" 
                    disabled={ loading }
                    >
                      {
                        loading ? <AppSpinner variant='light' withClass={false} size='sm' />
                                : 'Registrar'
                      }
                  </button>
                </div>
              </form>
            )
          }
        </Formik>
    </>
  );
}