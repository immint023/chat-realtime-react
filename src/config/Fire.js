const config = {
  apiKey: 'AIzaSyBFnlx-v40Nl_rbW0W-qIk6eZ2k0QY1BwU',
  authDomain: 'react-practice-8e925.firebaseapp.com',
  databaseURL: 'https://react-practice-8e925.firebaseio.com/',
  storageBucket: 'bucket.appspot.com',
};
firebase.initializeApp(config);

const database = firebase.database();

export default database;
