import {css, html, LitElement} from 'lit'
import {property} from "lit-element";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class InvoerenReizen extends LitElement {
    @property() currentPage = 'invoeren-reizen';
    @property() nuTijd = '';
    @property() nuTijdPlus1 = '';
    @property() eindTijdMin = '';
    @property() beginTijdMax = '';
    @property() _hidden = 'true';
    @property() span_message = '';
    @property() visibility_hidden_reisklasse = "visibility-hidden";
    @property() visibility_hidden_zakelijkprive = "visibility-hidden";
    @property() demovalue = "111 - Demowaarde";
    @property() demolocatie = "Amsterdam - Demowaarde";

    @property() inputfield = "inputfield";
    @property() _vervoerMiddelDummyData = [];
    @property() _gekozenC02: string;
    @property() _gekozenVoertuig: string;

    constructor() {
        super()

        let now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        now.setMilliseconds(0)
        now.setSeconds(0)
        this.nuTijd = now.toISOString().slice(0, -1);
        let now1 = new Date();
        now1.setMinutes(now.getMinutes() - now.getTimezoneOffset() + 60);
        now1.setMilliseconds(0)
        now1.setSeconds(0)
        this.nuTijdPlus1 = now1.toISOString().slice(0, -1);
        this.eindTijdMin = this.nuTijd;
        this.beginTijdMax = this.nuTijd;
    }

    connectedCallback() {
        super.connectedCallback();
        // TODO insert ajax rsjx json file observer
        //
        fetch('/vervoermiddel-CO2.json')
            .then((response) => response.json())
            .then((json) => {
                this._vervoerMiddelDummyData = Array.from(json);
                console.log(this._vervoerMiddelDummyData);
            });
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
        height: 100%; 
        overflow: auto
        }
        
        H1 {
        padding-top: 1em;
        font-size: 2em;
        padding-bottom: 0.5em;
        }
        header p{
          font-size: 1em;
        }
        
        table {
            padding: 1em;
            background: var(--kpn-blauw);
        }
        label {
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
            font-color: var(--kpn-zwart);
        }
        
        #vervoerstype {
            background-color: var(--kpn-groen);
        }
        
        .inputfield {
            width: 100%;
            padding: 0.8em 0.4px;
            /*margin: 0.1em;*/
            border: none;
            border-radius: 4px;
            background-color: var(--kpn-blauw);
            vertical-align: middle;
            text-indent: 0.7em;
        }
                  
        /*Buttons: */
        input[type=button], input[type=submit], input[type=reset] {
            width: 33%;
            background-color: var(--kpn-zwart);
            border: none;
            color: var(--kpn-wit);
            padding: 1em 0px;
            text-decoration: none;
            margin: 4px 2px;
            cursor: pointer;
        }

        
        .visibility-hidden {
            display: none;
            pointer-events: none;
            color: lightgrey;
            foreground-color: var(--kpn-grijs);
            background-color: var(--kpn-grijs);
            required: invalid;
        }
        #feedbackSpan {
          background-color: var(--kpn-blauw);
          place-items: center;
            text-align: center;
        }
    `
    }

    render() {
        return html`
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
                        <div id="typeVervoerDiv2">
                            <li>
                                <label for="vervoerstype">typeVervoer:</label>
                                <select id="vervoerstype" class="${this.inputfield}" required focus>
                                    ${this._vervoerMiddelDummyData.map(({naam, uitstoot}) => html`
                                        <option disabled hidden="${this._hidden}" selected value="0">"kies hier uw
                                            vervoerstype!"
                                        </option>
                                        <option @click="${this.optionClicked}" id=${naam} value=${uitstoot}>${naam}
                                        </option>
                                    `)}
                                </select>
                                <div id="vertrekLocatieDiv">
                            <li class="alleenzakelijk" required>
                                <label for="vertrekLocatie">Vertrek locatie:</label>
                                <input class="${this.inputfield}" id="vertrekLocatie" name="vertrekLocatie"
                                       placeholder="Vertrek locatie" value=${this.demolocatie}/>
                            </li>
                        </div>
                        <div id="aankomstLocatieDiv">
                            <li class="alleenzakelijk" required>
                                <label for="aankomstLocatie">Aankomst locatie:</label>
                                <input class="${this.inputfield}" id="aankomstLocatie" name="aankomstLocatie"
                                       placeholder="Aankomst locatie" value=${this.demolocatie}/>
                            </li>
                        </div>
                        <div id="beginTijdDiv">
                            <li>
                                <label for="beginTijd">Begin tijd:</label>
                                <input @input=inputCallback class="${this.inputfield}" id="beginTijd" name="beginTijd"
                                       required
                                       value="${this.nuTijd}"
                                       max="${this.beginTijdMax}"
                                       type="datetime-local"
                                />
                            </li>
                        </div>
                        <div id="eindTijdDiv">
                            <li>
                                <label for="eindTijd">Eind tijd:</label>
                                <input class="${this.inputfield}" id="eindTijd" required value="${this.nuTijdPlus1}"
                                       min="${this.eindTijdMin}"
                                       type="datetime-local"/>
                            </li>
                        </div>
                        <div id="kmDiv">
                            <li required>
                                <label for="km" value="10">km:</label>
                                <input class="${this.inputfield}" id="km" name="km" placeholder="Gereisde km" required
                                       type="text"
                                       value="${this.demovalue}"/>
                            </li>
                        </div>
                        <div id="kostenDiv">
                            <li class="alleenzakelijk" required>
                                <label for="kosten">kosten:</label>
                                <input class="${this.inputfield}" id="kosten" name="kosten"
                                       placeholder="Kosten in euro's"
                                       value="${this.demovalue}"/>
                            </li>
                        </div>
                        <div id="projectDiv">
                            <li class="alleenzakelijk" required>
                                <label for="project">Project:</label>
                                <select class="${this.inputfield}" id="project" name="project">
                                    <option disabled hidden selected value="0">Kies hier het project
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
                        <button id="zenden" @click=${this.formElements}>Zenden(custom)</button>

                        <label for="resetButton">Herlaad en leeg het formulier.</label>
                        <input id="resetButton" type="reset" value="Reset velden">
                        <br>
                        <label for="herhalendeReisButton">Sla op als herhalende reis.</label>
                        <input id="herhalendeReisButton" type="checkbox" value="Reset velden" disabled> Herhalende
                        reis. [under-construction]
                    </div>
                </form>
                <div id="feedbackSpan">
                    ${this.span_message}
                    <br>
                    U heeft gekozen voor voertuig:
                    ${this._gekozenVoertuig}
                    <br>
                    met gemiddelde uitstoot:
                    ${this._gekozenC02}
                    C02/km
                </div>
            </main>
            </body>
        `
    }

    optionClicked(option: {
        originalTarget: {
            value: string; id: string;
        };
    }) {
        console.log('optionClicked')
        const data = option.originalTarget.id;
        const uitstoot = option.originalTarget.value;

        this._gekozenVoertuig = data;
        this._gekozenC02 = uitstoot;

        console.log(data);
        console.log(uitstoot);

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
                console.log("Kan de reis type vervoer niet herkennen")
            }
                break;
        }
    };


    // get
    formElements() {
        console.log("_divs")
        console.log(document.getElementsByClassName('inputfield') ?? null);
        return this.querySelector('.inputfield') ?? null;
    }

}

window.customElements.define('invoeren-reizen', InvoerenReizen)
