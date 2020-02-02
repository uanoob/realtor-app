import React from 'react';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN } from '../../config';

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
};

firebase.initializeApp(config);

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
};

const SignInScreen = () => (
  <div className='container text-center'>
    <h1>Realtor App</h1>
    <p className='lead'>Please sign-in:</p>
    <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  </div>
);

export default SignInScreen;
