import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_1ywNtOxhvGlYofFbo-DZqu055siMGUI",
    authDomain: "juanucamp1.firebaseapp.com",
    projectId: "juanucamp1",
    storageBucket: "juanucamp1.appspot.com",
    messagingSenderId: "642183517602",
    appId: "1:642183517602:web:cd2b4691b0986af3788efb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db