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
    // TODO: make this work:
    this._reizenDummyData = fetch('dummydata-reizen.json')
      .then((response) => response.json())
      .then((json) => json.map(el => Object.values(el)))
      .then((arrayarrays) => console.log(arrayarrays));
    // this.rows =fetch('dummydata-reizen.json')
    //   .then((response) => response.json())
    //   .then((json) => json.map(el=>Object.values(el)))
    //   .then((arrayarrays) => {return arrayarrays});

    this.rows = [['Napalm Death', 'Barney Greenway', '1981', 'Century Media'], ['Carcass', 'Jeff Walker', '1985', 'Earache'], ['Extreme Noise Terror', 'Dean Jones', '1985', 'Candlelight'], ['Discordance Axis', 'Jon Chang', '1992', 'Hydrahead']];


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

      rows: {type: String}, headers: {type: Array}, caption: {type: String}

    }
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
        
        
        
        </span>
            <button>Exporteren als..</button>
            <button>Print...</button>


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
}

window.customElements.define('overzicht-reizen', MyElement)
