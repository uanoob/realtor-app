import React from 'react';

const LoginPage = () => (
  <div className='container'>
    <h1 className='display-6 mt-auto text-center'>Login with:</h1>
    <div className='col mb-2 text-center'>
      <div className='col m-2'>
        <input
          type='button'
          name='login-with-google'
          value='Google'
          className='btn btn-outline-primary'
          onClick={() => {}}
        />
      </div>
      <div className='col m-2'>
        <input
          type='button'
          name='login-with-google'
          value='Github'
          className='btn btn-outline-dark'
          onClick={() => {}}
        />
      </div>
    </div>
  </div>
);

export default LoginPage;
