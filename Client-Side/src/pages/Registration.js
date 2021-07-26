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
    <div className='formRegistrationn max-w-md mx-auto mt-20 border py-4 px-8'>
      <div className=' flex flex-col justify-center align-center'>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          <Form className='formContainer'>
            <div>
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
            <div>
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
            <div>
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
            <div>
              <label>Username: </label> <br />
              <ErrorMessage name='username' component='span' />
              <Field
                id='inputCreatePost'
                name='username'
                className='py-2 my-2 border border rounded w-full'
                placeholder='(Ex. John123...)'
              />
            </div>
            <div>
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
              className='bg-blue-900 hover:bg-blue-800 py-2 rounded text-blue-50 mt-3 w-full'>
              {' '}
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Registration;
