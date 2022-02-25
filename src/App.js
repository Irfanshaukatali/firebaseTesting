import React from 'react';
import './style.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBzszGEprnyymQpHaFTrPHkMppUfy8B5S4',
  authDomain: 'resume-builder-aacda.firebaseapp.com',
  projectId: 'resume-builder-aacda',
  storageBucket: 'resume-builder-aacda.appspot.com',
  messagingSenderId: '226155711205',
  appId: '1:226155711205:web:98741edb3f25d6ab6ca20c',
  measurementId: 'G-47E5KCPX7Y',
};
const app = initializeApp(firebaseConfig);

export default function App() {
  const emailRef = React.createRef(null);
  const passRef = React.createRef(null);
  const email = React.createRef(null);
  const pass = React.createRef(null);

  const auth = getAuth();
  function handleSignUp() {
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        alert('sign succesfull');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('sign Unsuccesfull');
      });
  }
  function handleSignIn() {
    createUserWithEmailAndPassword(
      auth,
      email,
      pass
    )
      .then((userCredential) => {
        const user = userCredential.user;
        alert('signIN succesfull');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('signIn Unsuccesfull');
      });
  }

  return (
    <div>
      <h2>SignUp</h2>
      <input type="text" placeholder="email" ref={emailRef} />
      <input type="text" placeholder="password" ref={passRef} />
      <br />
      <button onClick={handleSignUp}>signUp</button>
      <br/>
      <h2>SignIn</h2>
      <input type="text" placeholder="email1223" ref={email} />
      <input type="text" placeholder="password123" ref={pass} />
      <br />
      <button onClick={handleSignIn}>signUp</button>
    </div>
  );
}
