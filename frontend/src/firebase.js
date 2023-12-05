import firebase from "firebase/compat/app"; // Note the 'compat' in the import
import "firebase/compat/storage"; // Import the specific service you need

const firebaseConfig = {
  apiKey: "AIzaSyBC6QlHaD65GS1FyYGGwA0e8-og8CO7NHI",
  authDomain: "quantumai-52a89.firebaseapp.com",
  projectId: "quantumai-52a89",
  storageBucket: "quantumai-52a89.appspot.com",
  messagingSenderId: "152630727670",
  appId: "1:152630727670:web:11b088d6f17f766612edd7",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase };
