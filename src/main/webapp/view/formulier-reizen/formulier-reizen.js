console.log('loading formulier-reizen.js');

/** Deze functie verzend de data
 */
// function verzend() {
//   console.log('advancedSearchButtonClicked()');
//
//   const jsonRequestBody = {};
//   const formData = new FormData(document.querySelector('#reisInvoerFormulier'));
//   formData.forEach((value, key) => (jsonRequestBody[key] = value));
//
//   console.log(jsonRequestBody);
//
//   // const fetchOptions = {
//   //   method: 'POST', body: JSON.stringify(jsonRequestBody), headers: {
//   //     Authorization: `Bearer ${window.sessionStorage.getItem('JWT')}`,
//   //     Accept: 'application/json',
//   //     'Content-Type': 'application/json',
//   //   },
// }

window.onload = function () {
  let dropdownvervoerstype = document.getElementById('vervoerstype');

  const reisklasseKeuze = document.getElementById("reisKlasseKeuzeMenu")
  const priveGebruikKeuze = document.getElementById("priveZakelijkKeuzeMenu")

  // verstop de extra menus:
  console.log("hiding extra menu's")
  priveGebruikKeuze.classList.add("visibility-hidden");
  reisklasseKeuze.classList.add("visibility-hidden");


  // reactief formulier
  dropdownvervoerstype.addEventListener("change", () => {
    const switchvalue = dropdownvervoerstype.value;
    console.log('value: ' + dropdownvervoerstype.value)

    switch (switchvalue) {
      case "Trein/Metro/Tram":
        reisklasseKeuze.classList.remove("visibility-hidden"); // toont reisklasse
        priveGebruikKeuze.classList.add("visibility-hidden"); // verstopt prive/zakelijk
        break;
      case "Scooter":
      case "Elektr Scooter (incl deel scooter)":
      case "Elektr Deelauto":
      case "Hybride eigen auto":
      case "Electr eigen auto":
      case "Diesel eigen auto":
      case "Benzine eigen auto":
      case "eigenAuto":
      case "deelAuto":
        console.log("auto gekozen")
        reisklasseKeuze.classList.add("visibility-hidden"); // verstopt reisklasseKeuze
        priveGebruikKeuze.classList.remove("visibility-hidden"); // toont prive/zakelijk
        break;
      case "Lopen":
      case "Fiets":
      case "OV Fiets":
      case "bus":
        reisklasseKeuze.classList.add("visibility-hidden"); // verstopt reisklasseKeuze
        priveGebruikKeuze.classList.add("visibility-hidden"); // verstopt prive/zakelijk
        break;

      default: {
        reisklasseKeuze.setAttribute("hidden", "false")
        console.log(switchvalue)
        console.log("Kan de reis type vervoer niet herkennen")
      }
        break;
    }
  });
  // check of waarde beginTijd veranderd
  beginTijd.addEventListener("change", () => {
    let beginTijd = document.getElementById("beginTijd");
    let eindTijd = document.getElementById("eindTijd");
    // set beginTijd.max op eindTijd
    beginTijd.setAttribute("max", eindTijd.value);
  });
  // check of waarde eindTijd veranderd
  eindTijd.addEventListener("change", () => {
    let beginTijd = document.getElementById("beginTijd");
    let eindTijd = document.getElementById("eindTijd");
    // set eindTijd.min op beginTijd
    eindTijd.setAttribute("min", beginTijd.value);
  });

  const priveRadio = document.forms["reisInvoerFormulier"].elements["zakelijk-prive"];

  for(radio in priveRadio) {
    priveRadio[radio].onclick = function() {
      let alleenZakelijk = document.getElementsByClassName("alleenzakelijk")
      let projectElement = document.getElementById("project")

      switch (this.id) {
        case "zakelijk":
          for(var i = 0; i < alleenZakelijk.length; i++)
          {
            alleenZakelijk[i].classList.remove("visibility-hidden");
            console.log(alleenZakelijk[i].className);
          }

          break;
        case "prive":
          for(var i = 0; i < alleenZakelijk.length; i++)
          {
            alleenZakelijk[i].classList.add("visibility-hidden");
            // projectElement.setAttribute("value", "Prive")
            // projectElement.setAttribute("text", "Prive")
            projectElement.value = 'prive';
            console.log(alleenZakelijk[i].className);
          }
          break;
        default:
          alert("cannot recognize prive/zakelijk choice")
      }
    }
  }


  // console.log('loading overzichtReisTypen.js');
  // dropdownvervoerstype.length = 0;
  //
  // let defaultOption = document.createElement('option');
  // defaultOption.text = 'Kies uw vervoersmiddel';
  //
  // dropdownvervoerstype.add(defaultOption);
  // dropdownvervoerstype.selectedIndex = 0;
  //
  // const url = 'http://localhost:63342/oefenrepo-Ryan-Reddy/vervoermiddel-CO2.json\n';
  //
  // fetch(url)
  //   .then(
  //     function (response) {
  //       if (response.status !== 200) {
  //         console.warn('Looks like there was a problem. Status Code: ' +
  //           response.status);
  //         return;
  //       }
  //
  //       // Examine the text in the response
  //       response.json().then(function (data) {
  //         let option;
  //
  //         for (let i = 0; i < data.length; i++) {
  //           option = document.createElement('option');
  //           option.text = data[i].naam;
  //           // option.value = data[i].abbreviation;
  //           option.value = data[i].naam;
  //           dropdownvervoerstype.add(option);
  //         }
  //       });
  //     }
  //   )
  //   .catch(function (err) {
  //     console.error('Fetch Error -', err);
  //   });

  function optionClicked() {
    let vervoerskeus = document.getElementById("vervoerstype").value;
    console.log(vervoerskeus)

    var div = document.getElementById("div");
    switch (vervoerskeus) {
      default:
        console.log('oheyaaah')
    }
  }

  function toggleVisibility(id) {
    var gottenElement = document.getElementById(id); // get a reference to p and cache it
    gottenElement.classList.toggle('hideP'); // toggle the hideP class
  }

}
