// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function StartFirebase() {
// Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCk9m0DdvQ4IFB6kWtS9dMIgTZkc9J0-Vw",
        authDomain: "kpn-mobility-ryan-van-lil.firebaseapp.com",
        databaseURL: "https://kpn-mobility-ryan-van-lil-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "kpn-mobility-ryan-van-lil",
        storageBucket: "kpn-mobility-ryan-van-lil.appspot.com",
        messagingSenderId: "970585657860",
        appId: "1:970585657860:web:db2a317a7baf25b43d1b51"
    };

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}

export default StartFirebase;
