import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
	apiKey: "AIzaSyCe4dEKOko1d8fHo7dUhavssdkA9utwVKU",
    authDomain: "fashion-point-fda00.firebaseapp.com",
    databaseURL: "https://fashion-point-fda00.firebaseio.com",
    projectId: "fashion-point-fda00",
    storageBucket: "",
    messagingSenderId: "595466618431",
    appId: "1:595466618431:web:21946dea7a9590e8e99a8a"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;