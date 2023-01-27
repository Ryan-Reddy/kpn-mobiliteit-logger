// Your web app's Firebase configuration
import {child, DataSnapshot, get, ref, set} from "@firebase/database";
import {reisDTO} from "../domain/reisDTO";
import StartFirebase from "./firebaseConfig/firebase-config";

const _db = StartFirebase();

export class firebaseService {
    static writeReisData(reisOmOpTeSlaan: reisDTO) {
        set(ref(_db,
            ("reizen/" +  reisOmOpTeSlaan.username + "/" + reisOmOpTeSlaan.reisId)), {
            reisId: reisOmOpTeSlaan.reisId,
            zakelijkOfPrive: reisOmOpTeSlaan.zakelijk,
            vertrekLocatie: reisOmOpTeSlaan.beginLocatie,
            aankomstLocatie: reisOmOpTeSlaan.eindLocatie,
            beginTijd: reisOmOpTeSlaan.beginTijd,
            eindTijd: reisOmOpTeSlaan.eindTijd,
            kosten: reisOmOpTeSlaan.kosten,
            km: reisOmOpTeSlaan.km,
            klasse: reisOmOpTeSlaan.klasse,
            project: reisOmOpTeSlaan.project
        })
            .then(() => {
                alert('data stored succesfully');
            }).catch((error) => {
            alert('datastore unsuccesfull, error: ' + error)
        })
    }
    static readReisDataAll() {
        console.log('readReisDataAll reached ')

        const _db_ref = ref(_db);

        get(child(_db_ref,'reizen/')).then((snapshot)=>{
            if(snapshot.exists()){
                console.log('data retrieved succesfully');
                console.log(snapshot.val())
                return snapshot.val()
            }
            }).catch((error) => {
            alert('datastore unsuccesfull, error: ' + error)
        })
    }
    static readReisDataUser(userName: string) {
        console.log('readReisData reached username: ' + userName)
        get(ref(_db,
            "reizen/" +
            userName)).then((snapshot) => {    //TODO fix username properly
                console.log('data retrieved succesfully');
                let data = snapshot.val();
                console.log(snapshot.val())
                // let newData = data.stream.foreach((line: { constructor: reisDTO; }) => line.constructor)
                return data;
            }).catch((error) => {
            alert('datastore unsuccesfull, error: ' + error)
        })
    }
}
