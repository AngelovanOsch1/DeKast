<<<<<<< HEAD
import { auth } from '../firebase';
=======
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updatePassword,
//   reauthenticateWithCredential,
// } from 'firebase/auth';
>>>>>>> parent of 8389ffb (added some more firebase auth functions, added images and fonts, added global font properties)

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

//   const user = auth.currentUser;

// // TODO(you): prompt the user to re-provide their sign-in credentials
// const credential = promptForCredentials();

// reauthenticateWithCredential(user, credential).then(() => {
//   // User re-authenticated.
// }).catch((error) => {
//   // An error ocurred
//   // ...
// });
