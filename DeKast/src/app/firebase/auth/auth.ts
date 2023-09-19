import { auth } from '../firebase';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  reauthenticateWithCredential,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';


  export async function createUser(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password)
  }

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// const user = auth.currentUser;
// const newPassword = getASecureRandomPassword();

// updatePassword(user, newPassword)
//   .then(() => {
//     // Update successful.
//   })
//   .catch((error) => {
//     // An error ocurred
//     // ...
//   });

// const user = auth.currentUser;

// // TODO(you): prompt the user to re-provide their sign-in credentials
// const credential = promptForCredentials();

// reauthenticateWithCredential(user, credential)
//   .then(() => {
//     // User re-authenticated.
//   })
//   .catch((error) => {
//     // An error ocurred
//     // ...
//   });

// signOut(auth)
//   .then(() => {
//     // Sign-out successful.
//   })
//   .catch((error) => {
//     // An error happened.
//   });

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
