import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('invoeren-reizen-element')
export class InvoerenReizen extends LitElement {
    @property() _currentPageTitle = 'Wijzigen Reis';
    // @property() eindTijdMin = '';
    // @property() beginTijdMax = '';
    // @property() span_message = '';
    // @property() _vertrekTijd = '';
    // @property() _aankomstTijd = '';
    // @property() _demoKM = '11';
    // @property() _demoKosten = '111,11';
    // @property() _demoVertrekLocatie = 'Amsterdam';
    // @property() _demoAankomstLocatie = 'Utrecht';
    @property() inputfield = 'inputfield';
    @property() _vervoerMiddelDummyData = [];
    @property() _gekozenC02: string | undefined;
    @property() _gekozenVoertuig: string | undefined;

    @query('.formDeelTweeZakelijkvsPrive') _formDeelTweeZakelijkvsPrive!: HTMLDivElement;
    @query('.reisKlasseKeuzeMenu') _formDeelReisKlasseKeuzeMenu!: HTMLDivElement;
    @query('.formDeelDrie') _formDeelDrieElement!: HTMLDivElement;
    @query('.alleenZakelijk') _formZakelijkClassElements!: HTMLDivElement;


    constructor() {
        super();
        sessionStorage.setItem('currentpagetitle', this._currentPageTitle);

        // TODO insert ajax rsjx json file observer
        //
        fetch('/vervoermiddel-CO2.json')
            .then((response) => response.json())
            .then((json) => {
                this._vervoerMiddelDummyData = Array.from(json);
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

          input[type='button'],
          input[type='submit'],
          input[type='reset'] {
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
        `;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    render() {
        return html`
            <header>
                <h1 class="header">${this._currentPageTitle}</h1>
            </header>
            <body>

            <main>
                <form class="formulierReizen" id="formulierReizen" @onChange="${this.onChange()}">
                    <hr/>
                    <ul>
                        <div id="formDeelEen">
                            <h2>formDeelEen</h2>
                            <ol>
                                <label for="vervoerstype">typeVervoer:</label>
                                <select id="vervoerstype" class="${this.inputfield}" required focus>
                                    ${this._vervoerMiddelDummyData.map(({naam, uitstoot}) => html`
                                        <option
                                                id="${naam}"
                                                value="${uitstoot}"
                                                @click="${this.formDeelTweeShow}"
                                        >
                                            ${naam}
                                        </option>
                                    `)}
                                    <option
                                            disabled
                                            hidden
                                            selected
                                            value="0"
                                    >
                                        "kies hier uw vervoerstype!"
                                    </option>
                                </select>
                            </ol>
                        </div>
                        <div class="formDeelTweeZakelijkvsPrive" hidden>
                            <h2>Zakelijk of prive keuze</h2>
                            <li>
                                <label for="zakelijkOfPrive">zakelijk of prive:</label>
                                <select id="zakelijkOfPrive" class="${this.inputfield}" required focus
                                >
                                    <option disabled
                                            aria-hidden="true"
                                            selected
                                            value="0"
                                            hidden>
                                        "Prive of zakelijke reis:"
                                    </option>
                                    <label for="zakelijk" style="float:left" hidden>Zakelijk</label>
                                    <option id="zakelijk"
                                            @click="${this._optionClickedZakelijkOfPrive}">
                                        Zakelijk
                                    </option>
                                    <label for="zakelijk" style="float:left" hidden>Prive</label>
                                    <option id="prive"
                                            @click="${this._optionClickedZakelijkOfPrive}">
                                        Prive
                                    </option>
                                </select>
                            </li>
                        </div>
                        <div id="reisKlasseKeuzeMenu" hidden>
                            <legend>Reisklasse keuze:</legend>
                            <li>
                                <label for="eersteKlas" style="float:left">Eerste klas</label>
                                <input id="eersteKlas" name="klasse"
                                       type="radio" value="true"/> Eerste klas
                            </li>
                            <li>
                                <label for="tweedeKlas" style="float:left">Tweede klas</label>
                                <input id="tweedeKlas" name="klasse"
                                       type="radio" value="true"/> Tweede klas
                            </li>
                            <li>
                                <label for="highspeed" style="float:left">NS-Highspeed</label>
                                <input id="highspeed" name="klasse"
                                       type="radio" value="true"/> NS-Highspeed
                            </li>
                        </div>
                        <div class="alleenZakelijk" hidden>
                            <h2>formdeeldrie</h2>
                            <div>
                                <div id="vertrekLocatieDiv">
                                    <li>
                                        <label for="vertrekLocatie">Vertrek locatie:</label>
                                        <input class="${this.inputfield}" id="vertrekLocatie" name="vertrekLocatie"
                                               placeholder="Vertrek locatie" value=${this._demoVertrekLocatie}/>
                                    </li>
                                </div>
                                <div id="aankomstLocatieDiv">
                                    <li>
                                        <label for="aankomstLocatie">Aankomst locatie:</label>
                                        <input class="${this.inputfield}" id="aankomstLocatie" name="aankomstLocatie"
                                               placeholder="Aankomst locatie" value=${this._demoAankomstLocatie}/>
                                    </li>
                                </div>
                                </fieldset>
                                <div id="beginTijdDiv">
                                    <li>
                                        <label for="beginTijd">Begin tijd:</label>
                                        <input @input=inputCallback class="${this.inputfield}" id="beginTijd"
                                               name="beginTijd"
                                               required
                                               value="${this._vertrekTijd}"
                                               max="${this.beginTijdMax}"
                                               type="datetime-local"
                                        />
                                    </li>
                                </div>
                                <div id="eindTijdDiv">
                                    <li>
                                        <label for="eindTijd">Eind tijd:</label>
                                        <input class="${this.inputfield}" id="eindTijd" required
                                               value="${this._aankomstTijd}"
                                               min="${this.eindTijdMin}"
                                               type="datetime-local"/>
                                    </li>
                                </div>
                                <div id="kmDiv">
                                    <li required>
                                        <label for="km" value="10">km:</label>
                                        <input class="${this.inputfield}" id="km" name="km" placeholder="Gereisde km"
                                               required
                                               type="text"
                                               value="${this._demoKM}"/>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </ul>
                    <div id="buttonsUnderFormDiv">
                        <label for="verzendReis" hidden">Verzend</label>
                        <input class="verzendReis" id="verzendReis" type="submit" value="verzendReis">

                        <label for="zenden" hidden">Zenden(custom)</label>
                        <button id="zenden" @click=${e => this.formElements()}>Zenden(custom)</button>

                        <label for="resetButton">Herlaad en leeg het formulier.</label>
                        <input id="resetButton" type="reset" value="Reset velden">
                        <br>
                        <label for="herhalendeReisButton">Sla op als herhalende reis.</label>
                        <input id="herhalendeReisButton" type="checkbox" value="Reset velden" disabled>
                        Herhalende
                        reis. [under-construction]
                    </div>
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
        `;
    }
    _optionClickedZakelijkOfPrive(option: {
        originalTarget: {
            value: string; id: string;
        };
    }) {
        console.log('_optionClickedZakelijkOfPrive');

        let zakelijkOrPrive = option.originalTarget.id;
        console.log(zakelijkOrPrive)

        let zzz = this._formZakelijkClassElements;

        console.log(zakelijkOrPrive.toLowerCase());

        switch (zakelijkOrPrive.toLowerCase()) {
            case 'zakelijk':
                console.log('zakelijk chosen');
                zzz.removeAttribute("hidden");
                break;
            case 'prive':
                console.log('prive chosen')
                zzz.setAttribute("hidden", "hidden");
                break;
            default:
                console.log('choose zakelijk or prive again, something went wrong.')
                break;
        }

    }
    formDeelTweeShow(option: {
        originalTarget: {
            value: string; id: string;
        };
    }) {
        console.log('formDeelTweeShow');
        let keuze = option.originalTarget.id;

        console.log('keuze: ' + keuze)

        switch (keuze) {
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
                this._formDeelReisKlasseKeuzeMenu?.setAttribute("hidden","hidden");
                break;
            case 'Lopen':
            case 'Fiets':
            case 'OV Fiets':
            case 'bus':
                this._formDeelTweeZakelijkvsPrive?.removeAttribute("hidden");
                break;
            default: {
                console.log('Kan de reis type vervoer niet herkennen');
            }
                break;
        }
    }

    // get
    formElements() {
        console.log('_divs');
        console.log(document.getElementsByClassName('inputfield') ?? null);
        return this.querySelector('.inputfield') ?? null;
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
                    resolve(commands.redirect('/'));
                }, 2000);
            });
        }

        console.log('You can see this page');
    }

    private isAuthorized() {
        // Logic to determine if the current user can see this page
        return true; //TODO implement auth logic
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


}

