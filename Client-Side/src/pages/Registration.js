import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Registration() {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/auth', data).then(() => {
      console.log(data);
    });
  };

  return (
    <span className='span1'>
    <div className='formRegistration'>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          <Form className='formContainer'>
            <div className="div1">
              <label>First Name: </label>
              <br />
              <ErrorMessage name='first_name' component='span' />
              <Field
                id='inputCreatePost'
                name='first_name'
                className='py-2 my-2 border border rounded w-full'
                placeholder='(Ex. John...)'
              />
            </div>
            <div className="div2">
              <label>Last Name: </label>
              <br />
              <ErrorMessage name='last_name' component='span' />
              <Field
                id='inputCreatePost'
                name='last_name'
                className='py-2 my-2 border border rounded w-full'
                placeholder='(Ex. Doe...)'
              />
            </div>
            <div className="div3">
              <label>Email: </label>
              <br />
              <ErrorMessage name='email' component='span' />
              <Field
                id='inputCreatePost'
                name='email'
                className='py-2 my-2 border border rounded w-full'
                placeholder='(Ex. John123@gmail.com...)'
              />
            </div>
            <div className="div4">
              <label>Username: </label> <br />
              <ErrorMessage name='username' component='span' />
              <Field
                id='inputCreatePost'
                name='username'
                className='py-2 my-2 border border rounded w-full'
                placeholder='(Ex. John123...)'
              />
            </div>
            <div className="div5">
              <label>Password: </label>
              <ErrorMessage name='password' component='span' />
              <Field
                type='password'
                id='inputCreatePost'
                className='py-2 px-2 my-2 border border rounded w-full'
                name='password'
                placeholder='Your Password...'
              />
            </div>
            {/* <Link to="/login" className="btn btn-primary">Register</Link> */}
            <button
              type='submit'
              className='submitButton'>
              {' '}
              Register
            </button>
          </Form>
        </Formik>
      </div>
      </span>
  );
}

export default Registration;