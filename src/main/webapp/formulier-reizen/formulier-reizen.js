console.log('loading formulier-reizen.js');


/** Deze functie verzend de data
 */
function verzend() {
  console.log('advancedSearchButtonClicked()');

  const jsonRequestBody = {};
  const formData = new FormData(document.querySelector('#reisInvoerFormulier'));
  formData.forEach((value, key) => (jsonRequestBody[key] = value));

  console.log(jsonRequestBody);

  // const fetchOptions = {
  //   method: 'POST', body: JSON.stringify(jsonRequestBody), headers: {
  //     Authorization: `Bearer ${window.sessionStorage.getItem('JWT')}`,
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
}

window.onload = function () {
  let dropdown = document.getElementById('vervoerstype');

  const beginTijd = document.getElementById("beginTijd");
  const eindTijd = document.getElementById("eindTijd");

  // check of waarde veranderd
  dropdown.addEventListener("change", () => {
    // do stuff
    let reisklasseKeuze = document.getElementById("reisKlasseKeuzeMenu")
    reisklasseKeuze.setAttribute("hidden", "true");

    console.log('value: ' + dropdown.value)

    const switchvalue = dropdown.value;
    switch (switchvalue) {
      case "Trein/Metro/Tram":
        reisklasseKeuze.removeAttribute("hidden");
        break;

      case "Fiets":
      case "OV Fiets":
      case "Scooter":
      case "bus":
      case "Elektr Scooter (incl deel scooter)":
      case "Elektr Deelauto":
      case "Hybride eigen auto":
      case "Electr eigen auto":
      case "Diesel eigen auto":
      case "Benzine eigen auto":
      case "Lopen":
      case "eigenAuto":
      case "deelAuto":
        reisklasseKeuze.setAttribute("hidden", "true");
        break;

      default: {
        reisklasseKeuze.setAttribute("hidden", "false")
        console.log(switchvalue)
        console.log("Kan de reis type vervoer niet herkennen")
      }
        break;
    }
  });
  // check of waarde veranderd
  beginTijd.addEventListener("change", () => {
    // do stuff
    document.getElementById("eindTijd").setAttribute("min", beginTijd.value);
  });

  // check of waarde veranderd
  eindTijd.addEventListener("change", () => {
    // do stuff
    document.getElementById("eindTijd").setAttribute("min", beginTijd.value);
  });


  console.log('loading overzichtReisTypen.js');

  dropdown.length = 0;

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
            option.text = data[i].naam;
            // option.value = data[i].abbreviation;
            option.value = data[i].naam;
            dropdown.add(option);
          }
        });
      }
    )
    .catch(function (err) {
      console.error('Fetch Error -', err);
    });

  function optionClicked() {
    let vervoerskeus = document.getElementById("vervoerstype").value;
    console.log(vervoerskeus)

    var div = document.getElementById("div");
    switch (vervoerskeus) {
      default:
        console.log('oheyaaah')
    }
  }


}
