console.log('loading formulier-reizen.js');



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

  // set de datumtijdpickers naar nu
  var now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  now.setMilliseconds(null)
  now.setSeconds(null)
  document.getElementById('beginTijd').value = now.toISOString().slice(0, -1);
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); // voegt auto 1 uur toe
  document.getElementById('eindTijd').value = now.toISOString().slice(0, -1);


  const priveRadio = document.forms["reisInvoerFormulier"].elements["zakelijk-prive"];

  for (radio in priveRadio) {
    priveRadio[radio].onclick = function () {
      let alleenZakelijk = document.getElementsByClassName("alleenzakelijk")
      let projectElement = document.getElementById("project")

      switch (this.id) {
        case "zakelijk":
          for (var i = 0; i < alleenZakelijk.length; i++) {
            alleenZakelijk[i].classList.remove("visibility-hidden");
            console.log(alleenZakelijk[i].className);
          }

          break;
        case "prive":
          for (var i = 0; i < alleenZakelijk.length; i++) {
            alleenZakelijk[i].classList.add("visibility-hidden");
            alleenZakelijk[i].removeAttribute("required")

            projectElement.value = 'prive';
            console.log(alleenZakelijk[i].className);
          }
          break;
        default:
          alert("cannot recognize prive/zakelijk choice")
      }
    }
  }


  ///////////////////////
  ///////////////////////
  /////////////////////// alles hierna is al geimplementeerd in Lit:
  ///////////////////////
  ///////////////////////

  document.querySelector('form.reisInvoerFormulier').addEventListener('submit', function (e) {
    consoleLogFormData.call(this, e);
  });


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

/** Deze functie verzend de data
 */

function consoleLogFormData(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const object = {};
  formData.forEach((value, key) => object[key] = value);
  const json = JSON.stringify(object);
  const obj = JSON.parse(json);
  console.log(obj);
  console.log(obj.vervoerstype + ' over ' + obj.km + 'km');
}
