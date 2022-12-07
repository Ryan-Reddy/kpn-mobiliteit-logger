console.log('loading overzichtReisTypen.js');


// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { app } from 'firebase/app';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'firebase');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}



let dropdown = document.getElementById('vervoerstype');
// dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Kies uw vervoersmiddel';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'http://localhost:63342/oefenrepo-Ryan-Reddy/vervoermiddel-CO2.json\n';

fetch(url)
  .then(
    function (response) {
      if (response.status !== 200) {
        console.warn('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        let option;

        for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
          option.text = data[i].name;
          option.value = data[i].abbreviation;
          dropdown.add(option);
        }
      });
    }
  )
  .catch(function (err) {
    console.error('Fetch Error -', err);
  });