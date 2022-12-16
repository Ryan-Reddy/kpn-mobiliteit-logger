import {css, html, LitElement} from 'lit'

// import * as Rx from 'rx-dom';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  constructor() {
    super()
    this.rows = [['Napalm Death', 'Barney Greenway', 1981.25, 'Century Media'], ['Carcass', 'Jeff Walker', '1985', 'Earache'], ['Extreme Noise Terror', 'Dean Jones', '1985', 'Candlelight'], ['Discordance Axis', 'Jon Chang', '1992', 'Hydrahead']];
    console.log(this.rows);
    this._reizenDummyData = [];
    this._vervoerMiddelDummyData = [];

    this.headers = ['Project', 'Type vervoer', 'Begin', 'Einde', 'Km', 'C02', 'Kosten', 'Wijzig'];
    this.titel = 'Overzicht Reizen';
  }

  static get properties() {
    return {
      /** ingelogde gebruiker */
      naamGebruiker: {type: String},

      /** logo */
      kpnLogo: {type: String},

      _vervoerMiddelDummyData: {type: String},

      _reizenDummyData: {type: String},

      rows: {type: String}, headers: {type: Array}, caption: {type: String}

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
        overflow: auto
        }
        
        main { 
        margin-top: 10em;
        margin-bottom: 10em;
        }
       
        table {
        background: slateblue;
        }
    `
  }

  connectedCallback() {
    super.connectedCallback();
    // TODO insert ajax rsjx json file observer
    //
    fetch('/vervoermiddel-CO2.json')
      .then(response => response.json())
      .then((json) => {
        this._vervoerMiddelDummyData = Array.from(json)
        console.log(this._vervoerMiddelDummyData)
      });
    // }
    fetch('/dummydata-reizen.json')
      .then(response => response.json())
      .then((json) => {
        this._reizenDummyData = Array.from(json)
        console.log(this._reizenDummyData)
      });
    // }
  }

  render() {
    return html`
        <br>
        <h1 class="header">${this.titel}</h1>

        <body>
        <main>
    <span class="span">
        
    <table class="full">
    <caption>${this.titel}</caption>
    <thead>
    <tr>${this.headers.map((header, index) => html`
        <th scope="col" key=${index}>${header}</th>
    `)}
    </tr>
    </thead>
    <tbody>
    ${this._reizenDummyData.map((row, index) => html`
        <tr>
            <th>${row.project}</th>
            <th>${row.type}</th>
            <th>${row.begin}</th>
            <th>${row.eind}</th>
            <th>${row.km}</th>
            <th>${row.uitstoot}</th>
            <th>${row.kosten}</th>
            <th><a href="#">Wijzig</a></th>
        </tr>
    `)}
    </tbody>
    </table>
                
        <h2>Uitstoot uit json: </h2>
        <ul>
          ${this._reizenDummyData.map(i => html`
              <li>${i.project} | ${i.type_vervoer} | ${i.begin} | ${i.eind} | ${i.km} | ${i.uitstoot} | ${i.kosten}
              </li>`)}
        </ul>
        </span>
            <button>Exporteren als..</button>
            <button>Print...</button>
        </main>


        </body>
        </html>
    `
  }
}

window.customElements.define('overzicht-reizen', MyElement)
