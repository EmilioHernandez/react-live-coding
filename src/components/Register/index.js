import React from 'react'
import { Formik } from 'formik'

import register from 'services/register'

export default function Register () {
  return (
    <>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Required username'
          }
        
          if (!values.password) {
            errors.password = 'Required'
          }
        
          return errors
        }}
        onSubmit={(values, { setFieldError,setSubmitting }) => {
          return register(values)
            .catch(() => setFieldError('username', 'This is not working'))
        }}
      >
        {({errors, touched, values, handleChange, handleSubmit, isSubmitting}) => (
          <form className='form' onSubmit={handleSubmit}>
            <span style={{color: 'red'}}>
            {errors.username && touched.username && errors.username}
            {errors.password && touched.password && errors.password}
            </span>
          <input
            name="username"
            onChange={handleChange}
            value={values.username}
          />
          <input
            name="password"
            onChange={handleChange}
            value={values.password}
            type='password'
          />
          <button className='btn' disabled={isSubmitting}>Register</button>
          </form>
        )}
      </Formik>
    </>
  )
}