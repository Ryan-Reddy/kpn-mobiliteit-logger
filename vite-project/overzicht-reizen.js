import {css, html, LitElement} from 'lit'
// import * as Rx from 'rx-dom';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    // TODO insert ajax rsjx json file observer
  }
  constructor() {
    super()

    this.rows = [['Napalm Death', 'Barney Greenway', 1981.25, 'Century Media'], ['Carcass', 'Jeff Walker', '1985', 'Earache'], ['Extreme Noise Terror', 'Dean Jones', '1985', 'Candlelight'], ['Discordance Axis', 'Jon Chang', '1992', 'Hydrahead']];
    console.log(this.rows);
    // TODO: make this work:
    // this._reizenDummyData = fetch('dummydata-reizen.json')
    //   .then((response) => response.json())
    //   .then((json) => json.map(el => Object.values(el)))
    //   .then((arrayarrays) => {
    //       const arrayout = []
    //       for (let i = 0; i < arrayarrays.length; i++) {
    //         // console.log(arrayarrays[i])
    //         arrayout.push(arrayarrays[i])
    //       }
    //       console.log(arrayarrays)
    //     // const newArray = Array.isArray(arrayarrays) ? arrayarrays.map(element => element) : [];
    //     // console.log(newArray);
    //     // TODO: seems to return an array but no chance of reading it using .map
    //     })
    //   .then((newArray) => { return Array.from(newArray) } );
    this._reizenDummyData = [];

    this.headers = ['Project', 'Type vervoer', 'Begin', 'Einde', 'Km', 'C02', 'Kosten', 'Wijzig'];
    this.titel = 'Overzicht Reizen';
  }

  static get properties() {
    return {
      /** ingelogde gebruiker */
      naamGebruiker: {type: String},

      /** logo */
      kpnLogo: {type: String},

      _reizenContent: {type: String},

      _reizenRegels: {type: String},

      _reizenDummyData: {type: String},

      rows: {type: String},
      headers: {type: Array},
      caption: {type: String}

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

  render() {
    return html`
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
    ${this.rows.map((row, index) => html`
        <tr key=${index}>
            ${row.map((cell, index) => (html`
                <td key=${index}>${cell}</td>
            `))}
        </tr>
    `)}
    </tbody>
    </table>
        
        <ul>
          ${this._reizenDummyData.map(i => html`<li>${i}</li>`)}
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
