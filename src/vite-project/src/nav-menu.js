import {css, html, LitElement} from 'lit'
import {VariablePageTemplate} from './variable-page-template.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      naamIngelogdeGebruiker: {type: String},

    }
  }

  constructor() {
    super()
    this.naamIngelogdeGebruiker = 'Hans Fumphried'
  }

  render() {
    return html`

        <body id="bodyofmenubar">
        <span class="ingelogd_als">ingelogd als ${this.naamIngelogdeGebruiker}</span>

        <div class="entire_menu_bar">
            <nav>
                <a class="nav-button" onclick="currentPage = 100" href="#">Home</a> |
                <a class="nav-button" href="#">Reis Registreren</a> |
                <a class="nav-button" href="#">Reisgeschiedenis</a> |
                <a class="nav-button" href="#">Account</a> |
                <a class="nav-button" href="#">Support</a> |
                <a class="nav-button" href="#">Uitloggen</a>
            </nav>

            <img href="#" src="./resources/branding/kpn-logo2-jpeg.jpg" alt="kpn-logo-zwart-op-wit" class="nav-logo">
        </div>
        </body>
        

    `
  }

  static get styles() {
    return css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-size: 14px;
    }
    
    .entire_menu_bar {
        // width: 1w;
        height: 8em;
        border: 1px solid black;
    
        position: relative;
        overflow: hidden;
        padding: 1rem 1.5rem;
      
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #151617;
        color: white;
        opacity: 1;
    }
    
    .ingelogd_als {
        width: 176px;
        color: yellow;
        position: relative;
        left: 1em;
        font-family: Fira Code;
        font-size: 12px;
        opacity: 1;
        text-align: left;
    }
    
    .nav-button {
        // background: none!important;
        // border: none;
        // padding: 0!important;
        //
        // width: 100%;
        // position: absolute;
        // top: 24px;
        // left: 852px;
        font-family: Montserrat;
        font-size: 1em;
        opacity: 1;
        text-align: center;
    }
    
    .nav-logo {
        object-fit: cover;
        height: 5em;
    
        opacity: 1;
        position: fixed;
        // top: 7px;
        right: 2em;
        overflow: hidden;
    }
    `
  }
}

window.customElements.define('nav-menu', MyElement)
