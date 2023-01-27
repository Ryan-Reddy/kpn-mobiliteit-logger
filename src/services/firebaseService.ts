// Your web app's Firebase configuration
import {child, DataSnapshot, get, ref, set} from "@firebase/database";
import {reisDTO} from "../domain/reisDTO";
import StartFirebase from "./firebaseConfig/firebase-config";
import {toArray} from "rxjs";
import {isArray} from "chart.js/helpers";

const _db = StartFirebase();

export class firebaseService {
    static writeReisData(reisOmOpTeSlaan: reisDTO) {
        set(ref(_db,
            ("reizen/" +
                "ryan/" + reisOmOpTeSlaan.reisId)
        ), {
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

        get(child(_db_ref,'reizen/ryan')).then((snapshot)=>{
            if (snapshot.exists()) {
                if (snapshot.hasChildren()) {
                    console.log('data retrieved succesfully');
                    console.log(snapshot.val())
                    console.log(snapshot.val()[0])
                    console.log(snapshot.val()["1,674,799,022,126"])
                    const obj = snapshot.val();

                    const organization = new Map<string, reisDTO>()
                    for (let prop in obj) {
                        organization.set(prop, obj[prop])
                    }
                    console.log(organization)
                    let organization2 = Array.from(organization)
                    return organization2;
                    // console.log(snapshot.val())
                    // console.log(snapshot.val().keys)
                    // const foo= snapshot.val()
                    // // const foo= "[\n" + snapshot.val() + "\n]";
                    // console.log(foo)
                    // console.log(foo['1,674,786,245,312'])

                }
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
            if(snapshot.exists()) {

                console.log('data retrieved succesfully');
                let data = snapshot.val();
                console.log(snapshot.val())
                return data;
            }

            // let newData = data.stream.foreach((line: { constructor: reisDTO; }) => line.constructor)
            }).catch((error) => {
            alert('datastore unsuccesfull, error: ' + error)
        })
    }

}
