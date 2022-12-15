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
        <h1 class="header">Overzicht reizen</h1>

        <body>
        <main>
    <span class="span">
        
        <div style="overflow: auto">
          <table class="full">
            <tr>
              <th>Project</th>
              <th>Type vervoer</th>
              <th>Begin</th>
              <th>Einde</th>
              <th>Km</th>
              <th>C02</th>
              <th>Kosten</th>
              <th hidden>Wijzig</th>
            </tr>
            <tr>
              <td>null 1</td>
              <td>null 2</td>
              <td>null 3</td>
              <td>null 1</td>
              <td>null 2</td>
              <td>null 3</td>
              <td>null 1</td>
              <td><a href="#">Wijzig</a></td>
            </tr>
            <tr>
              <td>null 1</td>
              <td>null 2</td>
              <td>null 3</td>
              <td>null 1</td>
              <td>null 2</td>
              <td>null 3</td>
              <td>null 1</td>
              <td><a href="#">Wijzig</a></td>
            </tr>
            <tr>
              <td>null 1</td>
              <td>null 2</td>
              <td>null 3</td>
              <td>null 1</td>
              <td>null 2</td>
              <td>null 3</td>
              <td>null 1</td>
              <td><a href="#">Wijzig</a></td>
            </tr>
            <tr>
              <td>null 1</td>
              <td>null 2</td>
              <td>null 3</td>
              <td>null 1</td>
              <td>null 2</td>
              <td>null 3</td>
              <td>null 1</td>
              <td><a href="#">Wijzig</a></td>
            </tr>
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
