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
        height: 100%; 
        overflow: auto
        }
        
        main {       
        }
        .tablecontainer {
          height: 60vh;
          overflow: auto
        }
       
        table {
        background: slateblue;
        max-height: 100%;
        }
          th {
          padding: .6em;
          border-bottom: 1px dotted #ddd;
          border-collapse: collapse;

        }
        tr:hover {background-color: coral;}

    
    @media (max-width: 858px) {
    .hiddensmolscreen {
      display: none;
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
        
        <div class="tablecontainer">
    <table class="full">
    <caption>${this.titel}</caption>
    <thead>
    <tr>
        <th class="hiddensmolscreen">${this.headers[0]}</th>
        <th>${this.headers[1]}</th>
        <th>${this.headers[2]}</th>
        <th class="hiddensmolscreen">${this.headers[3]}</th>
        <th>${this.headers[4]}</th>
        <th class="hiddensmolscreen">${this.headers[5]}</th>
        <th class="hiddensmolscreen">${this.headers[6]}</th>
        <th>${this.headers[7]}</th>
        <th class="hiddensmolscreen"></th>
                
    </tr>

    </thead>
    <tbody>
    ${this._reizenDummyData.map((row, index) => html`
        <tr>
            <th class="hiddensmolscreen">${row.project}</th>
            <th>${row.type}</th>
            <th>${row.begin}</th>
            <th class="hiddensmolscreen">${row.eind}</th>
            <th>${row.km}</th>
            <th class="hiddensmolscreen">${row.uitstoot}</th>
            <th class="hiddensmolscreen">${row.kosten}</th>
            <th><a href="#">Wijzig</a></th>
        </tr>
    `)}
    </tbody>
    </table>
                
        </div>
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
