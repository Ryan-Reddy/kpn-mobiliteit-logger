import {css, html, LitElement} from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class InvoerenReizen extends LitElement {
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
    this.span_message = '';

    this.visibility_hidden_reisklasse = "visibility-hidden";
    this.visibility_hidden_zakelijkprive = "visibility-hidden";

    this.demovalue = "111 - Demowaarde";
    this.demolocatie = "Amsterdam - Demowaarde";



  }

  static get properties() {
    return {
      /** ingelogde gebruiker */
      naamGebruiker: {type: String},

      /** logo */
      kpnLogo: {type: String},

      _reizenContent: {type: String},

      _reizenRegels: {type: String},

      nuTijd: {type: Date},
      nuTijdPlus1: {type: Date},

      eindTijdMin: {type: Date},
      eindTijdMax: {type: Date},

      hidden: {type: String},

      span_message: {type: String},
      visibility_hidden_reisklasse: {type: String},
      visibility_hidden_zakelijkprive: {type: String},
      demovalue: {type: String},
      demolocatie: {type: String},
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
            display: none;
            pointer-events: none;
            color: lightgrey;
            foreground-color: grey;
            background-color: grey;
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
            <form class="formulierReizen" id="formulierReizen">
                <hr/>
                <ol>
                    <div id="typeVervoerDiv">
                        <li>
                            <label for="vervoerstype">typeVervoer:</label>
                            <select class="inputfield" id="vervoerstype" name="vervoerstype" required focus
                                    @change="${this.optionClicked}">
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
                    </div>
                    <div id="vertrekLocatieDiv">
                        <li class="alleenzakelijk" required>
                            <label for="vertrekLocatie">Vertrek locatie:</label>
                            <input class="inputfield" id="vertrekLocatie" name="vertrekLocatie"
                                   placeholder="Vertrek locatie" value=${this.demolocatie}/>
                        </li>
                    </div>
                    <div id="aankomstLocatieDiv">
                        <li class="alleenzakelijk" required>
                            <label for="aankomstLocatie">Aankomst locatie:</label>
                            <input class="inputfield" id="aankomstLocatie" name="aankomstLocatie"
                                   placeholder="Aankomst locatie" value=${this.demolocatie}/>
                        </li>
                    </div>
                    <div id="beginTijdDiv">
                        <li>
                            <label for="beginTijd">Begin tijd:</label>
                            <input @input=inputCallback class="inputfield" id="beginTijd" name="beginTijd" required
                                   value="${this.nuTijd}"
                                   max="${this.beginTijdMax}"
                                   type="datetime-local"
                            />
                        </li>
                    </div>
                    <div id="eindTijdDiv">
                        <li>
                            <label for="eindTijd">Eind tijd:</label>
                            <input class="inputfield" id="eindTijd" required value="${this.nuTijdPlus1}"
                                   min="${this.eindTijdMin}"
                                   type="datetime-local"/>
                        </li>
                    </div>
                    <div id="kmDiv">
                        <li required>
                            <label for="km" value="10">km:</label>
                            <input class="inputfield" id="km" name="km" placeholder="Gereisde km" required type="text"
                                   value="${this.demovalue}"/>
                        </li>
                    </div>
                    <div id="kostenDiv">
                        <li class="alleenzakelijk" required>
                            <label for="kosten">kosten:</label>
                            <input class="inputfield" id="kosten" name="kosten" placeholder="Kosten in euro's"
                                   value="${this.demovalue}"/>
                        </li>
                    </div>
                    <div id="projectDiv">
                        <li class="alleenzakelijk" required>
                            <label for="project">Project:</label>
                            <select class="inputfield" id="project" name="project">
                                <option disabled hidden="${this.hidden}" selected value="0">Kies hier het project
                                    waar u
                                    voor hebt gereisd.
                                </option>
                                <option value="KPN-glasvezel-aanleg">KPN-glasvezel-aanleg</option>
                                <option value="KPN-modem-installatie">KPN-modem-installatie</option>
                                <option value="KPN-modem-reparatie">KPN-modem-reparatie</option>
                                <option value="Prive">Prive</option>
                            </select>
                        </li>
                    </div>
                </ol>
                <div id="reisKlasseKeuzeMenu" class="${this.visibility_hidden_reisklasse}">
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
                <div id="priveZakelijkKeuzeMenu" class="${this.visibility_hidden_zakelijkprive}">
                    <fieldset>
                        <ul>
                            <legend>Prive of zakelijke reis:</legend>
                            <li>
                                <label for="zakelijk" style="float:left" hidden>Zakelijk</label>
                                <input id="zakelijk" name="zakelijk-prive"
                                       type="radio" value="true"
                                       @click=""
                                /> Zakelijk
                            </li>
                            <li>
                                <label for="prive" style="float:left" hidden></label>
                                <input id="prive" name="zakelijk-prive"
                                       type="radio" value="true"/> Prive
                            </li>
                        </ul>
                    </fieldset>
                </div>
                <div id="buttonsUnderFormDiv">
                <label for="verzendReis" hidden">Verzend</label>
                <input class="verzendReis" id="verzendReis" type="submit" value="verzendReis">
                    
                <label for="zenden" hidden">Zenden(custom)</label>
                    <button id="zenden" @click=${this.getFormElements}>Zenden(custom)</button>
                    
                <label for="resetButton">Herlaad en leeg het formulier.</label>
                <input id="resetButton" type="reset" value="Reset velden">

                <label for="herhalendeReisButton">Sla op als herhalende reis.</label>
                <input id="herhalendeReisButton" type="checkbox" value="Reset velden" disabled> Herhalende
                reis. [under-construction]
                </div>
            </form>
            <span id="feedbackSpan">
                  ${this.span_message}
            </span>
        </main>
        </body>
        </html>
    `
  }

  optionClicked(option) {
    console.log('optionClicked')
    const data = option.originalTarget.value;
    console.log(data);
    this.span_message = data;


    switch (data) {
      case "Trein/Metro/Tram":
        this.visibility_hidden_zakelijkprive = "visibility-hidden";
        this.visibility_hidden_reisklasse = "";
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
        this.visibility_hidden_zakelijkprive = "";
        this.visibility_hidden_reisklasse = "visibility-hidden";
        break;
      case "Lopen":
      case "Fiets":
      case "OV Fiets":
      case "bus":
        this.visibility_hidden_zakelijkprive = "visibility-hidden";
        this.visibility_hidden_reisklasse = "visibility-hidden";
        break;
      default: {
        reisklasseKeuze.setAttribute("hidden", "false")
        console.log(switchvalue)
        console.log("Kan de reis type vervoer niet herkennen")
      }
        break;
    }
  };

  init() {
    const el = this.shadowRoot.querySelector('.inputfield');
    console.log('I hope el is not null:', el)
  }

  // get
  getFormElements() {
    console.log("_divs")
    // console.log(this.shadowRoot.querySelector('.inputfield') ?? null);
    return this.InvoerenReizen.querySelector('.inputfield') ?? null;
  }

}

window.customElements.define('invoeren-reizen', InvoerenReizen)
