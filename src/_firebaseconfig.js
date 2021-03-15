import firebase from 'firebase';
import 'firebase/auth';

// NAS CONFIGURAÇÕES DO FIREBASE, AO CRIAR UMA APP, É POSSÍVEL OBTER TODAS ESSAS VARIÁVEIS
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "APP_NAME.firebaseapp.com",
  projectId: "APP_NAME",
  storageBucket: "APP_NAME.appspot.com",
  messagingSenderId: "APP_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
  measurementId: "APP_MEASUREMENT_ID"
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();

export {auth}