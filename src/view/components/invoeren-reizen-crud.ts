import {css, html, LitElement} from 'lit';
import {customElement, property, query, eventOptions, queryAll} from 'lit/decorators.js';
import {Thermometer} from "./global/thermometer";
import {DataService} from "../../services/firebaseDBwriterService";
import {reisDTO} from "../../domain/reisDTO";

// import { reisDTO } from '../../domain/reisDTO';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('invoeren-reizen-crud')
class InvoerenReizen extends LitElement {
    @property() _currentPageTitle = 'Wijzigen Reis';
    @property() eindTijdMin = null;
    @property() beginTijdMax = null;
    @property() _vertrekTijd;
    @property() _aankomstTijd;
    @property() _demoKM = null;
    @property() _demoKosten = null;
    @property() _demoVertrekLocatie = null;
    @property() _demoAankomstLocatie = null;
    private _demoProject = null;
    @property() inputfield = 'inputfield';
    @property() _vervoerMiddelDummyData = [];
    @property() _gekozenC02: string | undefined;
    @property() _gekozenVoertuig: string | undefined;

    @query('.formDeelTweeZakelijkvsPrive') _formDeelTweeZakelijkvsPrive!: HTMLDivElement;
    @query('.reisKlasseKeuzeMenu') _formDeelReisKlasseKeuzeMenu!: HTMLDivElement;
    @query('.formDeelDrie') _formDeelDrieElement!: HTMLDivElement;
    @query('.alleenZakelijk') _formZakelijkDiv!: HTMLDivElement;
    @queryAll('._alleenZakelijkClass') _alleenZakelijkClassElementList!: NodeListOf<HTMLElement>;

    @query('form') _entireForm!: HTMLFormElement;
    @property() _userName!: string;
    @property() _unsavedData = false;
    @property() _reizenDummyData: string | string[] | null | undefined;
    @property() _mercury = 0;
    @property() _slidePolygon = -194;  // Transform : (42=bottom) (-76=middle) (-194= top) range=(0-236 minus 194)
    @property() _thermoBreedte = '20vw';
    @property() _thermoHoogte = '20vw';

    // ------------------------ queries of all inputfields
    @query('#vervoerselector') _vervoerSelector!: HTMLElement;
    @query('#Zakelijk') _Zakelijk!: HTMLElement;
    @query('#reisKlasseKeuzeMenu') _reisKlasseKeuzeMenu!: HTMLElement;
    @query('#aankomstLocatie') _eindLocatie!: HTMLElement;
    @query('#vertrekLocatie') _beginLocatie!: HTMLElement;
    @query('#beginTijd') _beginTijd!: HTMLElement;
    @query('#eindTijd') _eindTijd!: HTMLElement;
    @query('#Kosten') _Kosten!: HTMLElement;
    @query('#km') _km!: HTMLElement;
    @query('#Project') _Project!: HTMLElement;

    @query('#insertButton') insBtn!: HTMLInputElement;
    @query('#selectButton') selBtn!: HTMLInputElement;
    @query('#updateButton') updBtn!: HTMLInputElement;
    @query('#deleteButton') delBtn!: HTMLInputElement;
    @property() _app: any;
    @property() _db: any;
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
            //visibility: hidden;
          }
          
          .label:hover {
              visibility: visible;
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
          
          .thermometer {
            background-color: var(--kpn-grijs);
            opacity: 0.9;
            width: 20vw;
            margin-left: auto;
            margin-right: auto;
            border-radius: 30em;
            margin-top: 5em;
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
            margin: auto;

            background-color: var(--kpn-groen);
            border: none;
            color: var(--kpn-wit);
            padding: 0.8em 0.4px;
            text-decoration: none;
            cursor: pointer;
          }
          #bottomButtonsBox {
            justify-content: center;
            display: flex;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10px;
            //display: flex;
            place-items: center;

            align-content: center;
            text-align: center;
          }

          .visibility-hidden {
            display: none;
            pointer-events: none;
            color: lightgrey;
            color: var(--kpn-grijs);
            background-color: var(--kpn-grijs);
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
            <!DOCTYPE html>
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
                            <label class="label" for="vervoerstype">typeVervoer:</label>
                            <select tooltip="vervoerstype"
                                    name="type" id="vervoerselector" class="${this.inputfield}" required
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
                            <label class="label" for="zakelijkOfPrive">zakelijk of prive:</label>
                            <select name="Zakelijk" id="Zakelijk" class="${this.inputfield}" required>
                                <option disabled
                                        value="Zakelijke reis:"
                                        hidden>
                                    
                                </option>
                                
                                <label class="label" class="label" class="label" for="prive" style="float:left" hidden>Prive</label>
                                <option id="prive"
                                        value=false
                                        @click="${this._optionClickedZakelijkOfPrive}">
                                    Prive
                                </option>

                                <label class="label" for="zakelijk" style="float:left" hidden>Zakelijk</label>
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
                            <label class="label" for="reisKlasseKeuzeMenu">zakelijk of prive:</label>
                            <select name="klasse" id="reisKlasseKeuzeMenu" class="${this.inputfield}" required>
                                <option disabled
                                        aria-hidden="true"
                                        value=null
                                        selected
                                        hidden
                                >
                                    "Reisklasse keuze:"
                                </option>
                                <label class="label" for="eersteKlas" style="float:left">Eerste klas</label>
                                <option id="eersteKlas">Eerste klas</option>
                                <label class="label" for="tweedeKlas" style="float:left">Tweede klas</label>
                                <option id="tweedeKlas">Tweede klas</option>
                                <label class="label" for="highSpeed" style="float:left">Tweede klas</label>
                                <option id="highSpeed"> Tweede klas</option>
                            </select>
                        </li>
                    </ul>
                    <ul class="alleenZakelijk" hidden>
                        <h2>formdeeldrie</h2>
                        <li>
                            <label class="label" for="vertrekLocatie">Vertrek locatie:</label>
                            <input class="_alleenZakelijkClass" id="vertrekLocatie"
                                   name="vertrekLocatie"
                                   value=${this._demoVertrekLocatie}
                                   placeholder="Vertrek locatie"/>
                        </li>
                        <li>
                            <label class="label" for="aankomstLocatie">Aankomst locatie:</label>
                            <input class="_alleenZakelijkClass" id="aankomstLocatie"
                                   name="aankomstLocatie"
                                   value=${this._demoAankomstLocatie}
                                   placeholder="Aankomst locatie"/>
                        </li>
                        <li>
                            <label class="label" for="beginTijd">Begin tijd:</label>
                            <input class="_alleenZakelijkClass" id="beginTijd"
                                   name="beginTijd"
                                   value="${this._vertrekTijd}"
                                   max="${this.beginTijdMax}"
                                   type="datetime-local"
                            />
                        </li>
                        <li>
                            <label class="label" for="eindTijd">Eind tijd:</label>
                            <input class="_alleenZakelijkClass" id="eindTijd"
                                   name="eindTijd"
                                   value="${this._aankomstTijd}"
                                   min="${this.eindTijdMin}"
                                   type="datetime-local"/>
                        </li>
                        <li id="kmDiv">
                            <label class="label" for="km">Km:</label>
                            <input class="_alleenZakelijkClass"
                                   id="km"
                                   name="km"
                                   value=${this._demoKM}
                                   placeholder="Gereisde km"/>
                        </li>
                        <li id="kostenDiv">
                            <label class="label" for="Kosten">Kosten:</label>
                            <input class="_alleenZakelijkClass"
                                   id="Kosten"
                                   name="Kosten"
                                   value=${this._demoKosten}
                                   placeholder="Kosten"/>
                        </li>
                        <li id="projectDiv">
                            <label class="Project" for="Kosten">Project:</label>
                            <select name="Project" id="Project" class="_alleenZakelijkClass" required>
                                <option disabled value=${this._demoProject} selected hidden>
                                    Project Keuze
                                </option>
                                
                                <label class="label" for="Montage" style="float:left">Montage op locatie</label>
                                <option id="Montage">Tweede klas</option>
                                
                                <label class="label" for="Klantgesprek" style="float:left">Klantgesprek</label>
                                <option id="Klantgesprek">Klantgesprek</option>
                            </select>
                        </li>
                    </ul>
                    <hr>
                    <br>
                    
                    <div id="bottomButtonsBox">
                        <button class="bottomButtons" id="zenden" form="formulierReizen" aria-label="Verzend formulier"
                                @click="${this.persistDataToDb}"
                                value="Verzenden"></button>

                        <input class="bottomButtons" id="resetButton" type="reset" value="Reset velden" aria-label="reset formulier"
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

                <div class="thermometer">
                    <svg width="${this._thermoHoogte}" height="${this._thermoBreedte}" id="thermometer-svg" version="1.1"
                         viewBox="-5 78.2 381.6 412.5" preserveAspectRatio x="0px"
                         xml:space="preserve" xmlns="http://www.w3.org/2000/svg" y="0px">
        <g id="fill">
                                <path d="M207.8,345.9V106.5h-40v239.4 c-11.6,6.9-19.4,19.5-19.4,33.9c0,21.8,17.6,39.4,39.4,39.4s39.4-17.6,39.4-39.4C227.2,365.4,219.4,352.7,207.8,345.9z"
                                      fill="red"
                                      id="fill-path"></path>
                            </g>
                        <g id="cover"><rect fill="#ffffff" height="${this._mercury}" id="cover-rect" width="40.8" x="167.4" y="105.5"></rect>
                            // thermometer fill range: heigth=(0=full)-(236=empty)
                            <polygon fill="red" id="polygon"
                                     points="233.7,291.3 225.8,299.9 233.7,308.5 236.8,308.5 236.8,291.3"
                                     transform="translate(0 ${this._slidePolygon})"
                                     xmlns="http://www.w3.org/2000/svg"></polygon>
                            // Transform translate min = (0 41); max = (0 -200)
                            </g>
                        <g id="thermometer">
                                <path d="M219.7,340.3V120.1 c0-17.6-14.3-31.9-31.9-31.9c-9.6,0-18.6,4.3-24.7,11.7c-4.7,5.7-7.2,12.8-7.2,20.2v220.2c-12,9.7-18.9,24.1-18.9,39.6 c0,28,22.8,50.8,50.8,50.8s50.8-22.8,50.8-50.8C238.7,364.3,231.8,350,219.7,340.3z M214.7,273.9h-26.9v1.5h26.9v15.3h-26.9v1.5 h26.9v15.3h-26.9v1.5h26.9v15.3h-26.9v1.5h26.9v15.3H161v-82.6h53.8v15.4H214.7z M214.7,189.8h-26.9v1.5h26.9v15.3h-26.9v1.5h26.9 v15.3h-26.9v1.5h26.9v15.3h-26.9v1.5h26.9V257H161v-82.6h53.8v15.4H214.7z M167,103c5.1-6.3,12.7-9.8,20.8-9.8 c9.6,0,18,5,22.7,12.6h-22.8v1.5h23.7c2.1,3.8,3.3,8.2,3.3,12.8v2.5h-26.9v1.5h26.9v15.3h-26.9v1.5h26.9v15.3h-26.9v1.5h26.9V173 H161v-53C161,113.9,163.1,107.8,167,103z M187.8,425.6c-25.3,0-45.8-20.5-45.8-45.8c0-14.3,6.5-27.6,18-36.4l1-0.8l0,0h53.8l0,0 l1,0.8c11.4,8.8,18,22,18,36.4C233.7,405.1,213.1,425.6,187.8,425.6z"
                                      fill="#231F20"
                                      id="thermometer-path"></path>
                            </g>
                        </svg>
                </div>

                
                <!-- ------------------------------------ CRUD ------------------------------------------------>
                <div id="bottomButtonsBox">
                    <button id="insertButton" 
                            @click="${this.persistDataToDb}"
                    >INSERT</button>
                    <button id="selectButton">SELECT</button>
                    <button id="updateButton">UPDATE</button>
                    <button id="deleteButton">DELETE</button>
                </div>

                </html>
<!--                <thermometer-element></thermometer-element>-->
            </main>
            </body>
        `;
    }


    // ------------------------------------ IMPORTS + CONFIG ------------------------------------------------//
    /**
     * collect alle data uit formulier, vertaal met reisDTO => sla op in db
     */
    persistDataToDb(
    ) {
        // @ts-ignore
        const username = sessionStorage.getItem('userID').split("@")[0].slice(1) + "";
        const reis = new reisDTO(
            Date.now().toLocaleString(),
            username,
            this._vervoerSelector.getAttribute('value')+"",
            this._Project.getAttribute('value')+"",
            this._beginTijd.getAttribute('value')+"",
            this._eindTijd.getAttribute('value')+"",
            this._beginLocatie.getAttribute('value')+"",
            this._eindLocatie.getAttribute('value')+"",
            this._km.getAttribute('value')+"",
            this._Kosten.getAttribute('value')+"",
            this._mercury.toString(),
            // @ts-ignore
            (this._mercury * (this._km.getAttribute('value')+0)).toString(),
            this._Zakelijk.getAttribute('value')=='zakelijk'); //TODO fix the boolean
        DataService.writeReisData(reis);
    }


    connectedCallback() {
        super.connectedCallback();
        this._getReizenData();
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

        // @ts-ignore
        this._gekozenVoertuig = option.originalTarget.value;
        this._gekozenC02 = option.originalTarget.id;
        console.log('keuze: ' + this._gekozenVoertuig)
        console.log('uitstoot: ' + this._gekozenC02)

        // @ts-ignore
        this._mercury = (((this._gekozenC02 ) / 15) * -236) + 236;
        this._slidePolygon = this._mercury - 194

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
        // move to service layer
        console.log('customFormSend reached')

        const formData = new FormData(this._entireForm);    // formdata ophalen

        const object = {};
        // @ts-ignore
        formData.forEach((value, key) => object[key] = value);
        formData.append('userID', this._userName)           // username toevoegen

        const nuTijd = Date.now().toLocaleString();
        formData.append('tijdvanopslaan', nuTijd)           //datum van opslaan toevoegen
        console.log(object)

        const jsonFormData = JSON.stringify(object);
        console.log(jsonFormData)

        // if(this._reizenDummyData== null) {                      // if no curr data => add this form as first
        //     console.log('null')
        //     localStorage.setItem('reizenData',jsonFormData);
        // } else {                                               // if there was data => .push() to it and then store this.
        let arr = [];
        try {
            arr = this._getReizenData();
        } catch (e) {
            arr = [];
        }
        arr.push(object);
        console.log(arr)
        localStorage.setItem('reizenData', JSON.stringify(arr));

        this._unsavedData =false; // remove unsaved data
        alert('Uw data is opgeslagen :)')
        this._getReizenData()

    };
    _getReizenData() {
        try {
            // @ts-ignore
            return JSON.parse(localStorage.getItem('reizenData'));

        } catch (e) {
            localStorage.removeItem('reizenData');
            return [];
        }
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
    private _dispatchEventUitstoot() {
        // TODO fix
        console.log('_vehicleChosen reached')

        const myEvent = new CustomEvent('mercury-event', {
            detail: {uitstoot: this._gekozenC02, voertuigkeuze: this._gekozenVoertuig}, bubbles: true, composed: true
        });
        this.dispatchEvent(myEvent);
        console.log('mercury-event customevent dispatching')
    }
    private _thermometerInput(e: CustomEvent) {
        console.log('reached invoeren-reizen.ts._thermometerInput()')
        console.log(e.detail.uitstoot)
        console.log(e.detail.voertuigkeuze)
        //TODO remove hard coding (15) = max C02 in list voertuigdata
        // mercury = thermometer-fill range: (0=full)-(236=empty) **/

        this._mercury = (((e.detail.uitstoot) / 15) * -236) + 236;
        this._slidePolygon = this._mercury - 194
    }
    public onChange() {
        this._unsavedData = true;
    }
    private isAuthorized() {
        return !!sessionStorage.getItem('userID');
    }
}

