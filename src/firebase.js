import Firebase from '@firebase/app';
import '@firebase/storage'

let config = {
    apiKey: "AIzaSyCmNs9mcokB0uRZaFy1Vet6qXZEC4eKS3Y",
    authDomain: "ielts-master-5d1d7.firebaseapp.com",
    databaseURL: "https://ielts-master-5d1d7.firebaseio.com",
    projectId: "ielts-master-5d1d7",
    storageBucket: "ielts-master-5d1d7.appspot.com",
    messagingSenderId: "49154493490"
};

let app = Firebase.initializeApp(config);

export const storage = app.storage();

