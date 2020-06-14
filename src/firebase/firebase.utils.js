// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// const config = {
//   apiKey: "AIzaSyCH2UjDtsu6prQpmSeGKAus8GxmSuLlVi8",
//   authDomain: "diamond-clothing-6e591.firebaseapp.com",
//   databaseURL: "https://diamond-clothing-6e591.firebaseio.com",
//   projectId: "diamond-clothing-6e591",
//   storageBucket: "diamond-clothing-6e591.appspot.com",
//   messagingSenderId: "1087794633907",
//   appId: "1:1087794633907:web:68a0f228d69ebb8efb64c6",
//   measurementId: "G-4X09Z5CE3X",
// };

// export const createUserProfileDocument = async (userAuth, OtherData) => {
//   if (!userAuth) return;
//   const userRef = firestore.doc(`users/${userAuth.uid}`);
//   const snapshot = await userRef.get();

//   if (!snapshot.exists) {
//     const { displayName, email } = userAuth;
//     const createAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createAt,
//         ...OtherData,
//       });
//     } catch (error) {
//       console.log("error create user", error.message);
//     }
//   }
//   return userRef;
// };

// export const auth = firebase.auth();

// const provider = new firebase.auth.GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: "select_account",
// });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
