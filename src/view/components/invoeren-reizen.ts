import {css, html, LitElement} from 'lit';
import {customElement, property, query, eventOptions, queryAll} from 'lit/decorators.js';
import {Thermometer} from "./global/thermometer";
import { PreventAndRedirectCommands, Router, RouterLocation, RedirectResult, PreventResult} from "@vaadin/router";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('invoeren-reizen-element')
export class InvoerenReizen extends LitElement {
    @property() _currentPageTitle = 'Wijzigen Reis';
    @property() eindTijdMin = '';
    @property() beginTijdMax = '';
    // @property() span_message = '';
    @property() _vertrekTijd = '';
    @property() _aankomstTijd = '';
    @property() _demoKM = null;
    @property() _demoKosten = null;
    @property() _demoVertrekLocatie = null;
    @property() _demoAankomstLocatie = null;
    @property() inputfield = 'inputfield';
    @property() _vervoerMiddelDummyData = [];
    @property() _gekozenC02: string | undefined;
    @property() _gekozenVoertuig: string = "null";

    @query('.formDeelTweeZakelijkvsPrive') _formDeelTweeZakelijkvsPrive!: HTMLDivElement;
    @query('.reisKlasseKeuzeMenu') _formDeelReisKlasseKeuzeMenu!: HTMLDivElement;
    @query('.formDeelDrie') _formDeelDrieElement!: HTMLDivElement;
    @query('.alleenZakelijk') _formZakelijkDiv!: HTMLDivElement;
    @queryAll('._alleenZakelijkClass') _alleenZakelijkClassElementList!: NodeListOf<HTMLElement>;

    @query('form') _entireForm!: HTMLFormElement;
    @property() _userName!: string;
    @property() _unsavedData = false;
    @property() _reizenDummyData = [];

    constructor() {
        super();
        sessionStorage.setItem('currentpagetitle', this._currentPageTitle);

        // TODO insert ajax rsjx json file observer
        //
        fetch('/database/vervoermiddel-CO2.json')
            .then((response) => response.json())
            .then((json) => {
                let res = json.map(({naam, uitstoot} : {naam:any, uitstoot:any}) => ({naam: naam, uitstoot: uitstoot}));
                console.log(res)

                this._vervoerMiddelDummyData = res;
            });
        fetch('/database/MOCK-REIZEN.json')
            .then((response) => response.json())
            .then((json) => {
                this._reizenDummyData = Array.from(json);
                console.log(this._reizenDummyData);
            });
        // TODO replace with json from localStorage
        // localStorage.getItem('reizenData');


        this._userName = sessionStorage.getItem('userID')!;
        let now = new Date()!;
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        now.setMilliseconds(0);
        now.setSeconds(0);
        this._vertrekTijd = now.toISOString().slice(0, -1);
        let now1 = new Date();
        now1.setMinutes(now.getMinutes() - now.getTimezoneOffset() + 60);
        now1.setMilliseconds(0);
        now1.setSeconds(0);
        this._aankomstTijd = now1.toISOString().slice(0, -1);
        this.eindTijdMin = this._vertrekTijd;
        this.beginTijdMax = this._aankomstTijd + 60;


    }

    static get styles() {
        return css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none;
            border-radius: 4px;

          }

          .full {
            width: 100%;
            height: 100%;
            overflow: auto;
          }

          label {
            visibility: hidden;
          }

          H1 {
            padding-top: 1em;
            font-size: 2em;
            padding-bottom: 0.5em;
          }

          header p {
            font-size: 1em;
          }

          table {
            padding: 1em;
            background: var(--kpn-blauw);
          }

          form {
            margin-top: 1em;
            padding-left: 1em;
            padding-right: 1em;
          }

          li {
            list-style-type: none;
            list-style: -webkit-gradient();
            margin: 0;
            padding: 0.5em;
            overflow: hidden;
          }
          
          #vervoerstype {
            background-color: var(--kpn-groen);
          }

          .inputfield, ._alleenZakelijkClass {
            width: 100%;
            padding: 0.8em 0.4px;
            /*margin: 0.1em;*/
            border: none;
            background-color: var(--kpn-blauw);
            vertical-align: middle;
            text-indent: 0.7em;
          }

          /*Buttons: */

          .bottomButtons {
            display:inline-block;
            width: 33%;
            background-color: var(--kpn-groen);
            border: none;
            color: var(--kpn-wit);
            padding: 0.5em;
            text-decoration: none;
            margin: 4px 2px;
            cursor: pointer;
            float: left; /* Float the buttons side by side */

          }
          .bottomButtonsBox {
            
            width: 1vw;
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
            padding: 0.5em;

            margin: 4px 2px;
          }
        `;
    }

    render() {
        return html`
            <header>
                <h1 class="header">${this._currentPageTitle}</h1>
            </header>
            <body>

            <main>
                <form class="formulierReizen" id="formulierReizen" @onChange="${this.onChange()}">
                    <hr>
                    <br>
                    <h2>Voertuig keuze</h2>
                    <ul id="formDeelEen">
                        <li>
                            <label for="vervoerstype">typeVervoer:</label>
                            <select name="type" id="vervoerstype" class="${this.inputfield}" required
                                    >
                                ${this._vervoerMiddelDummyData.map(({naam, uitstoot}) => html`
                                    <option
                                            disabled
                                            hidden
                                            value=null
                                            selected
                                    >
                                    <option
                                            id="${uitstoot}"
                                            value="${naam}"
                                            @click="${this.formDeelTweeShowEnThermometerUpdate}"
                                    >
                                        ${naam}
                                    </option>
                                `)}
                                "kies hier uw vervoerstype!"
                                </option>
                            </select>
                        </li>
                    </ul>
                    <ul class="formDeelTweeZakelijkvsPrive" hidden>
                        <h2>Zakelijk of prive keuze</h2>
                        <li>
                            <label for="zakelijkOfPrive">zakelijk of prive:</label>
                            <select name="Zakelijk" id="Zakelijk" class="${this.inputfield}" required>
                                <option disabled
                                        value="Zakelijke reis:"
                                        hidden>
                                    
                                </option>
                                
                                <label for="prive" style="float:left" hidden>Prive</label>
                                <option id="prive"
                                        value=false
                                        @click="${this._optionClickedZakelijkOfPrive}">
                                    Prive
                                </option>

                                <label for="zakelijk" style="float:left" hidden>Zakelijk</label>
                                <option id="zakelijk"
                                        value=true
                                        @click="${this._optionClickedZakelijkOfPrive}">
                                    Zakelijk
                                </option>
                                
                            </select>
                        </li>
                    </ul>
                    <ul class="reisKlasseKeuzeMenu" hidden>
                        <h2>Reis klasse keuze</h2>
                        <li>
                            <label for="reisKlasseKeuzeMenu">zakelijk of prive:</label>
                            <select name="klasse" id="reisKlasseKeuzeMenu" class="${this.inputfield}" required>
                                <option disabled
                                        aria-hidden="true"
                                        value=null
                                        selected
                                        hidden
                                >
                                    "Reisklasse keuze:"
                                </option>
                                <label for="eersteKlas" style="float:left">Eerste klas</label>
                                <option id="eersteKlas">Eerste klas</option>
                                <label for="tweedeKlas" style="float:left">Tweede klas</label>
                                <option id="tweedeKlas">Tweede klas</option>
                                <label for="highSpeed" style="float:left">Tweede klas</label>
                                <option id="highSpeed"> Tweede klas</option>
                            </select>
                        </li>
                    </ul>
                    <ul class="alleenZakelijk" hidden>
                        <h2>formdeeldrie</h2>
                        <li>
                            <label for="vertrekLocatie">Vertrek locatie:</label>
                            <input class="_alleenZakelijkClass" id="vertrekLocatie"
                                   name="vertrekLocatie"
                                   value=${this._demoVertrekLocatie}
                                   placeholder="Vertrek locatie"/>
                        </li>
                        <li>
                            <label for="aankomstLocatie">Aankomst locatie:</label>
                            <input class="_alleenZakelijkClass" id="aankomstLocatie"
                                   name="aankomstLocatie"
                                   value=${this._demoAankomstLocatie}
                                   placeholder="Aankomst locatie"/>
                        </li>
                        <li>
                            <label for="beginTijd">Begin tijd:</label>
                            <input class="_alleenZakelijkClass" id="beginTijd"
                                   name="beginTijd"
                                   value="${this._vertrekTijd}"
                                   max="${this.beginTijdMax}"
                                   type="datetime-local"
                            />
                        </li>
                        <li>
                            <label for="eindTijd">Eind tijd:</label>
                            <input class="_alleenZakelijkClass" id="eindTijd"
                                   name="eindTijd"
                                   value="${this._aankomstTijd}"
                                   min="${this.eindTijdMin}"
                                   type="datetime-local"/>
                        </li>
                        <li id="kmDiv">
                            <label for="km">Km:</label>
                            <input class="_alleenZakelijkClass"
                                   name="km"
                                   value=${this._demoKM}
                                   placeholder="Gereisde km"/>
                        </li>
                    </ul>
                    <div id="bottomButtonsBox">
<!--                        <label for="verzendReis" hidden">Verzend</label>-->
<!--                        <input class="bottomButtons" id="verzendReis" type="submit" value="verzendReis">-->

                        <label for="zenden" hidden">Zenden(custom)</label>
                        <input class="bottomButtons" id="zenden" form="formulierReizen" type="button"
                               @click=${this.customFormSend} value="Verzenden">

                        <label for="resetButton" hidden>Herlaad en leeg het formulier.</label>
                        <input class="bottomButtons" id="resetButton" type="reset" value="Reset velden"
                        style="background-color: var(--kpn-warning-red)">
                    </div>

                </form>
                <br>

                <div id="feedbackSpan">
                    U heeft gekozen voor voertuig:
                    ${this._gekozenVoertuig}
                    <br>
                    met gemiddelde uitstoot:
                    ${this._gekozenC02}
                    C02/km
                </div>
                <thermometer-element></thermometer-element>
            </main>
            </body>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
    }
    _optionClickedZakelijkOfPrive(option: {
        originalTarget: {
            value: string; id: string;
        };
    }) {
        console.log('_optionClickedZakelijkOfPrive');

        let zakelijkOrPrive = option.originalTarget.id;
        console.log(zakelijkOrPrive)

        console.log(zakelijkOrPrive.toLowerCase());

        switch (zakelijkOrPrive.toLowerCase()) {
            case 'zakelijk':
                console.log('zakelijk chosen');
                this._formZakelijkDiv.removeAttribute("hidden");
                this._alleenZakelijkClassElementList.forEach(elem => elem.setAttribute('required', 'true'))
                break;
            case 'prive':
                console.log('prive chosen')
                this._formZakelijkDiv.setAttribute("hidden", "hidden");
                this._alleenZakelijkClassElementList.forEach(elem => elem.setAttribute('required', 'false'))

                break;
            default:
                console.log('choose zakelijk or prive again, something went wrong.')
                break;
        }

    }

    formDeelTweeShowEnThermometerUpdate(option: {
        originalTarget: {
            value: string; id: string;
        };    }) {
        console.log('formDeelTweeShow');

        this._gekozenVoertuig = option.originalTarget.value;
        this._gekozenC02 = option.originalTarget.id;
        console.log('keuze: ' + this._gekozenVoertuig)
        console.log('uitstoot: ' + this._gekozenC02)


        this._dispatchEventUitstoot()

        switch (this._gekozenVoertuig) {
            case 'Trein/Metro/Tram':
                console.log('Trein gekozen')
                this._formDeelTweeZakelijkvsPrive?.removeAttribute("hidden");
                this._formDeelReisKlasseKeuzeMenu?.removeAttribute("hidden");
                break;
            case 'Scooter':
            case 'Elektr Scooter (incl deel scooter)':
            case 'Elektr Deelauto':
            case 'Hybride eigen auto':
            case 'Electr eigen auto':
            case 'Diesel eigen auto':
            case 'Benzine eigen auto':
            case 'eigenAuto':
            case 'deelAuto':
                console.log('auto gekozen');
                this._formDeelTweeZakelijkvsPrive?.removeAttribute("hidden");
                this._formDeelReisKlasseKeuzeMenu?.setAttribute("hidden", "hidden");
                break;
            case 'Lopen':
            case 'Fiets':
            case 'OV Fiets':
            case 'Bus':
                this._formDeelTweeZakelijkvsPrive?.removeAttribute("hidden");
                break;
            default: {
                console.log('Kan de reis type vervoer niet herkennen');
            }
                break;
        }
    }

    // get
    customFormSend() {
        console.log('customFormSend reached')

        const form = this._entireForm;
        const formData = new FormData(form);

        console.log(formData)
        formData.append('userID', this._userName)


        for (const [key, value] of formData) {
            console.log(`${key}: ${value}\n`)
            // output.textContent += `${key}: ${value}\n`;
        }
        const nuTijd = Date.now().toLocaleString();

        formData.append('tijdvanopslaan', nuTijd)

        const object = {};
        // @ts-ignore
        formData.forEach((value, key) => object[key] = value);
        const jsonFormData = JSON.stringify(object);


        console.log(jsonFormData)
        let jsonString = JSON.stringify(this._vervoerMiddelDummyData);


        // @ts-ignore
        this._reizenDummyData.push(JSON.parse(jsonFormData));
        console.log(this._reizenDummyData);

        localStorage.setItem('reizenData',JSON.stringify(this._reizenDummyData));

        //TODO save formdata to:
        // sessionStorage.setItem(travelID, formData)
        // this._vervoerMiddelDummyData.push(travelID, formData)


    };

    private _dispatchEventUitstoot() {
        // TODO fix
        console.log('_vehicleChosen reached')

        const myEvent = new CustomEvent('mercury', {
            detail: {uitstoot: this._gekozenC02, voertuigkeuze: this._gekozenVoertuig}, bubbles: true, composed: true
        });
        console.log('mercury customevent dispatching')
        this.dispatchEvent(myEvent);
    }

    public onChange() {
        this._unsavedData = true;
    }

    public onBeforeEnter(location: RouterLocation, commands: PreventAndRedirectCommands, router: Router): Promise<unknown> | RedirectResult | undefined {
        console.log('onBeforeEnter');
        if (!this.isAuthorized()) {
            // sync operation
            // return commands.redirect('/');

            // async operation
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('Not authorized, redirect to home page');
                    resolve(commands.redirect('/login'));
                }, 2000);
            });
        }

        console.log('You can see this page');
    }

    public onBeforeLeave(location: RouterLocation, commands: PreventAndRedirectCommands, router: Router): PreventResult | undefined {
        if (this._unsavedData) {

            console.log('onBeforeLeave');

            const leave = window.confirm('Weet je zeker dat je deze pagina wil verlaten? \nUw ingevoerde gegevens zijn nog niet verzonden!');
            if (!leave) {
                console.log('onBeforeLeave commands.prevent()');
                return commands.prevent();
            }
        }
    }


    private isAuthorized() {
        return !!sessionStorage.getItem('userID');
    }
}

