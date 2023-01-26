// Your web app's Firebase configuration
import {DataSnapshot, get, ref, set} from "@firebase/database";
import {reisDTO} from "../domain/reisDTO";
import StartFirebase from "./firebaseConfig/firebase-config";

const _db = StartFirebase();

export class DataService {
    static writeReisData(reisOmOpTeSlaan: reisDTO) {
        set(ref(_db,
            ("Test/" + reisOmOpTeSlaan.username + "/" + reisOmOpTeSlaan.reisId)), {
            reisOmOpTeSlaan
        })
            .then(() => {
                alert('data stored succesfully');
            }).catch((error) => {
            alert('datastore unsuccesfull, error: ' + error)
        })
    }
    static readReisData(userName: string) {
        console.log('readReisData reached username: ' + userName)
        get(ref(_db,
            "Test/" +
            "ryan")).then(() => {    //TODO fix username properly
                alert('data retrieved succesfully');
                console.log(DataSnapshot.toString())
            }).catch((error) => {
            alert('datastore unsuccesfull, error: ' + error)
        })
    }
}
