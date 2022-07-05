import 'firebase/auth';
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import styles from './AuthLoginForm.module.scss';
import AppSpinner from '../AppSpinner/AppSpinner';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useAuthContext } from '../../context/AuthContext';

const schema = Yup.object().shape({
  email: Yup.string()
              .required('Este campo es obligatorio')
              .email('Formato de email inválido'),
  password: Yup.string()
              .required('Este campo es obligatorio')
              .min(6, 'El password es muy corto')
              .max(15, 'Máximo 15 caracteres'),
})


export default function AuthLoginForm({ close, setOption }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuthContext();

  const userLogin = (values) => {
    setLoading(true);
    login(values)
      .then(() => { close() })
      .catch(err => { setError(err) })
      .finally(() => { setLoading(false) });
  }

  return (
    <>
      <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={ schema }
          onSubmit={ userLogin }
          >
          {
            ( formik ) => (
              <form onSubmit={ (formik.handleSubmit) }>
                <div className={ styles.authLoginForm__data }>
                  <div className='mb-3'>
                    <label
                      className='form-label' 
                      htmlFor='email'>Correo Electronico*</label>
                    <input
                      className={`form-control ${ formik.errors.email && formik.touched.email && styles.authLoginForm__alert }`}
                      id='email'
                      type="email"
                      name="email"
                      onChange={ formik.handleChange }
                      onBlur={ formik.handleBlur }
                      value={ formik.values.email }
                      disabled={ loading }
                    />
                    { formik.errors.email && formik.touched.email && <small className={ styles.authLoginForm__alert }>{ formik.errors.email }</small> }
                  </div>      
                  <div className='mb-3'>
                    <label
                      className='form-label' 
                      htmlFor='password'>Contraseña*</label>
                    <input
                      className={`form-control ${ formik.errors.password && formik.touched.password && styles.authLoginForm__alert }`}
                      id='password'
                      type="password"
                      name="password"
                      onChange={ formik.handleChange }
                      onBlur={ formik.handleBlur }
                      value={ formik.values.password }
                      disabled={ loading }
                    />
                    { formik.errors.password && formik.touched.password && <small className={ styles.authLoginForm__alert }>{ formik.errors.password }</small> }
                  </div>
                  { 
                    error && 
                    <div className='mb-3'>
                      <small className={ styles.authLoginForm__alert }>{ error }</small> 
                    </div> 
                  }
                </div>
                <div className={ styles.authLoginForm__actions }>
                  <button 
                    className={`btn btn-lg btn-block ${ styles.authLoginForm__button_secondary }`} 
                    onClick={ () => setOption(true) }
                    type="button" 
                    disabled={ loading }>
                    <MdKeyboardArrowLeft />
                    Volver
                  </button>
                  <button 
                    className={`btn btn-lg btn-block ${ styles.authLoginForm__button_primary }`} 
                    type="submit" 
                    disabled={ loading }
                    >
                      {
                        loading ? <AppSpinner variant='light' withClass={false} size='sm' />
                                : 'Ingresar'
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