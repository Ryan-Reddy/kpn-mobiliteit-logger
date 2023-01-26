// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getDatabase, get, ref, set, child, update, remove } from "firebase/database";
import {reisDTO} from "../domain/reisDTO";




const firebaseConfig = {
    apiKey: "AIzaSyCk9m0DdvQ4IFB6kWtS9dMIgTZkc9J0-Vw",
    authDomain: "kpn-mobility-ryan-van-lil.firebaseapp.com",
    databaseURL: "https://kpn-mobility-ryan-van-lil-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kpn-mobility-ryan-van-lil",
    storageBucket: "kpn-mobility-ryan-van-lil.appspot.com",
    messagingSenderId: "970585657860",
    appId: "1:970585657860:web:34bfcae1f13222ec3d1b51"
};

const _app = initializeApp(firebaseConfig);

const _db = getDatabase();

export class DataService {
    static writeReisData(reisOmOpTeSlaan: reisDTO) {
        const db = getDatabase();
        set(ref(_db, ("Test/" + reisOmOpTeSlaan.username)), {
            reisOmOpTeSlaan
        })
            .then(() => {
                alert('data stored succesfully');
            }).catch((error) => {
            alert('datastore unsuccesfull, error: ' + error)
        })
    }
}
