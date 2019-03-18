import Firebase from '@firebase/app';
import '@firebase/storage';
import { FIREBASE_API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    MESSAGE_ID
    } from 'react-native-dotenv';

let config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: MESSAGE_ID
};

let app = Firebase.initializeApp(config);

export const storage = app.storage();

