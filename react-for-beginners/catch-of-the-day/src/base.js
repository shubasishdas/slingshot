import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

  
  apiKey: 'AIzaSyAkCnukdAcTFUEoBUEKElBXJ-4aZlTZOSw',
  authDomain: 'catch-of-the-day---shubasish.firebaseapp.com',
  databaseURL:
    'https://catch-of-the-day---shubasish-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database()); // creating Rebase bindings and database will return actual database we have

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
