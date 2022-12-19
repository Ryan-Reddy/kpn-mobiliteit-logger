import {css, html, LitElement} from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  constructor() {
    super()
    this.naamGebruiker = "Hans Fumphried";
    this.kpnLogo = "./resources/branding/kpn-logo2-jpeg.jpg"
    this._currentPage = 'no page chosen yet';
    this._reizenRegels = '7';

    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    now.setMilliseconds(null)
    now.setSeconds(null)
    this.nuTijd = now.toISOString().slice(0, -1);

    let now1 = new Date();
    now1.setMinutes(now.getMinutes() - now.getTimezoneOffset() + 60);
    now1.setMilliseconds(null)
    now1.setSeconds(null)
    this.nuTijdPlus1 = now1.toISOString().slice(0, -1);
    this.eindTijdMin = this.nuTijd;
    this.beginTijdMax = this.nuTijd;

    this.hidden = 'true';
  }

  static get properties() {
    return {
      /** ingelogde gebruiker */
      naamGebruiker: {type: String},

      /** logo */
      kpnLogo: {type: String},

      _reizenContent: {type: String},

      _reizenRegels: {type: String},

      nuTijd: {type: Date}, nuTijdPlus1: {type: Date},

      eindTijdMin: {type: Date}, eindTijdMax: {type: Date},

      hidden: {type: String}

    }
  }

  static get styles() {
    return css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        }
        .full { 
        width: 100%; 
        }

        header {
        padding-top: 1em;
        font-size: 2em;
        padding-bottom: 0.5em;
        }
        header p{
          font-size: 0.5em;
        }
      
        table {
            padding: 1em;
            background: slateblue;
        }
        label {
            /*font-size: 2em;*/
            /*visibility: hidden;*/
            display: none;
        }
        
        form {
            margin-top: 1em;
            padding-left: 1em;
            padding-right: 1em;
            font-size: 1em;
        }
        
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        
        ol {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        
        li {
            padding: 0.1em;
        }
        
        fieldset {
            padding-left: 1em;
            padding-right: 1em;
            font-size: 0.5em;
            font-color: black
        }
        
        #vervoerstype {
            background-color: #00C300;
        }
        
        .inputfield {
            width: 100%;
            padding: 0.8em 0.4px;
            /*margin: 0.1em;*/
            border: none;
            border-radius: 4px;
            background-color: slateblue;
            vertical-align: middle;
            text-indent: 0.7em;
        }
        
        /*Buttons: */
        input[type=button], input[type=submit], input[type=reset] {
            width: 33%;
            background-color: #00C300;
            border: none;
            color: white;
            padding: 1em 0px;
            text-decoration: none;
            margin: 4px 2px;
            cursor: pointer;
        }
        
        .visibility-hidden {
            /*visibility: hidden;*/
            pointer-events: none;
            color: lightgrey;
            foreground-color: grey;
            required: invalid;
        }
    `
  }

  render() {
    return html`
        <html>
        <header>

        <H1>Welkom,</H1>
            <br>
        <p>vul hieronder zo nauwkeurig mogelijk uw reis in:</p>
        </header>
        <body>

        <main>
            <form class="reisInvoerFormulier" id="reisInvoerFormulier">
                <hr/>
                <ol>
                    <li>
                        <label for="vervoerstype">typeVervoer:</label>
                        <select class="inputfield" id="vervoerstype" name="vervoerstype" required focus
                                @click="${this.optionClicked}">
                            <option disabled hidden="${this.hidden}" selected value="0">Start: kies hier uw
                                vervoerstype!
                            </option>
                            <option value="Trein/Metro/Tram">"Trein/Metro/Tram"</option>
                            <option value="Fiets">"Fiets"</option>
                            <option value="OV Fiets">"OV Fiets"</option>
                            <option value="Scooter">"Scooter"</option>
                            <option value="bus">"bus"</option>
                            <option value="Elektr Scooter (incl deel scooter)">"Elektr Scooter (incl deel scooter)"
                            </option>
                            <option value="Elektr Deelauto">"Elektr Deelauto"</option>
                            <option value="Hybride eigen auto">"Hybride eigen auto"</option>
                            <option value="Electr eigen auto">"Electr eigen auto"</option>
                            <option value="Diesel eigen auto">"Diesel eigen auto"</option>
                            <option value="Benzine eigen auto">"Benzine eigen auto"</option>
                            <option value="Lopen">"Lopen"</option>
                            <option value="eigenAuto">"eigenAuto"</option>
                            <option value="deelAuto">"deelAuto"</option>
                        </select>
                    </li>
                    <li class="alleenzakelijk" required>
                        <label for="vertrekLocatie">Vertrek locatie:</label>
                        <input class="inputfield" id="vertrekLocatie" name="vertrekLocatie"
                               placeholder="Vertrek locatie"/>
                    </li>
                    <li class="alleenzakelijk" required>
                        <label for="aankomstLocatie">Aankomst locatie:</label>
                        <input class="inputfield" id="aankomstLocatie" name="aankomstLocatie"
                               placeholder="Aankomst locatie"/>
                    </li>
                    <li>
                        <label for="beginTijd">Begin tijd:</label>
                        <input @input=inputCallback class="inputfield" id="beginTijd" name="beginTijd" required
                               value="${this.nuTijd}"
                               max="${this.beginTijdMax}"
                               type="datetime-local"
                        />
                    </li>
                    <li>
                        <label for="eindTijd">Eind tijd:</label>
                        <input class="inputfield" id="eindTijd" required value="${this.nuTijdPlus1}"
                               min="${this.eindTijdMin}"
                               type="datetime-local"/>
                    </li>
                    <li required>
                        <label for="km">km:</label>
                        <input class="inputfield" id="km" name="km" placeholder="Gereisde km" required type="text"/>
                    </li>
                    <li class="alleenzakelijk" required>
                        <label for="kosten">kosten:</label>
                        <input class="inputfield" id="kosten" name="kosten" placeholder="Kosten in euro's" type="text"/>
                    </li>
                    <li class="alleenzakelijk" required>
                        <label for="project">Project:</label>
                        <select class="inputfield" id="project" name="project">
                            <option disabled hidden="${this.hidden}" selected value="0">Kies hier het project waar u
                                voor hebt gereisd.
                            </option>
                            <option value="KPN-glasvezel-aanleg">KPN-glasvezel-aanleg</option>
                            <option value="KPN-modem-installatie">KPN-modem-installatie</option>
                            <option value="KPN-modem-reparatie">KPN-modem-reparatie</option>
                            <option value="Prive">Prive</option>
                        </select>
                    </li>
                </ol>
                <div id="reisKlasseKeuzeMenu">
                    <fieldset>
                        <ol>
                            <legend>Reisklasse keuze:</legend>
                            <li>
                                <label for="eersteKlas" style="float:left" hidden>Eerste klas</label>
                                <input id="eersteKlas" name="klasse"
                                       type="radio" value="true"/> Eerste klas
                            </li>
                            <li>
                                <label for="tweedeKlas" style="float:left" hidden>Tweede klas</label>
                                <input id="tweedeKlas" name="klasse"
                                       type="radio" value="true"/> Tweede klas
                            </li>
                            <li>
                                <label for="highspeed" style="float:left" hidden>NS-Highspeed</label>
                                <input id="highspeed" name="klasse"
                                       type="radio" value="true"/> NS-Highspeed
                            </li>
                        </ol>
                    </fieldset>
                </div>
                <div id="priveZakelijkKeuzeMenu">
                    <fieldset>
                        <ul>
                            <legend>Prive of zakelijke reis:</legend>
                            <li>
                                <label for="zakelijk" style="float:left" hidden>Zakelijk</label>
                                <input id="zakelijk" name="zakelijk-prive"
                                       type="radio" value="true"/> Zakelijk
                            </li>
                            <li>
                                <label for="prive" style="float:left" hidden></label>
                                <input id="prive" name="zakelijk-prive"
                                       type="radio" value="true"/> Prive
                            </li>
                        </ul>
                    </fieldset>
                </div>
                <hr/>
                <label for="verzendReis" hidden="${this.hidden}">Verzend</label>
                <input class="verzendReis" id="verzendReis" type="submit" value="verzendReis"
                       onselect="${this.consoleLogFormData}">

                <label for="resetButton" hidden="${this.hidden}">Herlaad en leeg het formulier.</label>
                <input id="resetButton" type="reset" value="Reset velden">

                <label for="herhalendeReisButton" hidden="${this.hidden}">Sla op als herhalende reis.</label>
                <input id="herhalendeReisButton" type="checkbox" value="Reset velden" disabled> Sla op als herhalende
                reis. [under-construction]
            </form>
            <span id="feedbackSpan">
                  ${this.span_message}
            </span>
        </main>
        </body>
        </html>
    `
  }

  consoleLogFormData(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const object = {};
    formData.forEach((value, key) => object[key] = value);
    const json = JSON.stringify(object);
    const obj = JSON.parse(json);
    console.log(obj);
    console.log(obj.vervoerstype + ' over ' + obj.km + 'km');
  };

  toggleVisibility(id) {
    var gottenElement = document.getElementById(id); // get a reference to p and cache it
    gottenElement.classList.toggle('hideP'); // toggle the hideP class
  };

  optionClicked(value) {
    console.log('optionClicked')
    console.log(value.originalTarget.value);
    console.log(value.originalTarget.naam);
  };
}

window.customElements.define('invoeren-reizen', MyElement)
