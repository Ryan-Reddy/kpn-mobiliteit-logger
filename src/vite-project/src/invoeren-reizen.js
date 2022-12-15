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

  }

  static get properties() {
    return {
      /** ingelogde gebruiker */
      naamGebruiker: {type: String},

      /** logo */
      kpnLogo: {type: String},

      _reizenContent: {type: String},

      _reizenRegels: {type: String}

    }
  }

  render() {
    return html`
        <html>
        
              <H1>Welkom, vul hieronder zo nauwkeurig mogelijk uw reis in:</H1>
        <body>
        
        <main>
          <form class="reisInvoerFormulier" id="reisInvoerFormulier">
          <hr/>
            <ol>
              <li>
                <label for="vervoerstype">typeVervoer:</label>
                <select class="inputfield" id="vervoerstype" name="vervoerstype" required focus>
                  <option disabled hidden selected value="0">Start: kies hier uw vervoerstype!</option>
                  <option value="Trein/Metro/Tram">"Trein/Metro/Tram"</option>
                  <option value="Fiets">"Fiets"</option>
                  <option value="OV Fiets">"OV Fiets"</option>
                  <option value="Scooter">"Scooter"</option>
                  <option value="bus">"bus"</option>
                  <option value="Elektr Scooter (incl deel scooter)">"Elektr Scooter (incl deel scooter)"</option>
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
                <input class="inputfield" id="vertrekLocatie" name="vertrekLocatie" placeholder="Vertrek locatie"/>
              </li>
          
              <li class="alleenzakelijk" required>
                <label for="aankomstLocatie">Aankomst locatie:</label>
                <input class="inputfield" id="aankomstLocatie" name="aankomstLocatie" placeholder="Aankomst locatie"/>
              </li>
          
              <li>
                <label for="beginTijd">Begin tijd:</label>
                <input class="inputfield" id="beginTijd" name="beginTijd" placeholder="Begin tijd" required
                       type="datetime-local"/>
              </li>
          
              <li>
                <label for="eindTijd">Eind tijd:</label>
                <input class="inputfield" id="eindTijd" min="beginTijd" name="eindTijd" placeholder="Eind tijd" required
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
                  <option disabled hidden selected value="0">Kies hier het project waar u voor hebt gereisd.</option>
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
                </ol>
              </fieldset>
            </div>
          
            <div id="priveZakelijkKeuzeMenu">
              <fieldset>
                <ul>
                  <legend>Prive of zakelijke reis:</legend>
          
                  <li>
                    <label for="zakelijk" style="float:left">Zakelijk</label>
                    <input id="zakelijk" name="zakelijk-prive"
                           type="radio" value="true"/> Zakelijk
                  </li>
                  <li>
                    <label for="prive" style="float:left"></label>
                    <input id="prive" name="zakelijk-prive"
                           type="radio" value="true"/> Prive
                  </li>
                </ul>
              </fieldset>
            </div>
          
            <hr/>
            <label for="verzendReis" hidden>Verzend</label>
            <input class="verzendReis" id="verzendReis" type="submit" value="verzendReis">
          
              <label for="resetButton" hidden>Herlaad en leeg het formulier.</label>
              <input id="resetButton" type="reset" value="Reset velden">
          
                <label for="herhalendeReisButton" hidden>Sla op als herhalende reis.</label>
                <input id="herhalendeReisButton" type="checkbox" value="Reset velden" disabled> Sla op als herhalende reis. [under-construction]
          </form>
            
          <span id="feedbackSpan"></span>


              </main>


              </body>
              </html>
    `
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

        table {
        background: slateblue;
        }

        form { 
        margin-top: 5em;
        }

        
    `
  }
}

window.customElements.define('invoeren-reizen', MyElement)
