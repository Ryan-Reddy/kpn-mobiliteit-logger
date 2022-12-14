import {css, html, LitElement} from 'lit'

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
      docsHint: {type: String},

      /**
       * The number of times the button has been clicked.
       */
      count: {type: Number},
    }
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
    this.count = 0
  }

  render() {

    return html`

        <body id="bodyofmenubar">
        <span class="ingelogd_als">ingelogd als Hans Fumphried</span>

        <div class="entire_menu_bar">
            <span class="nav-button">Reis Registreren</span>
            <span class="nav-button">Reisgeschiedenis</span>
            <span class="nav-button">Account</span>
            <span class="nav-button">Support</span>
            <span class="nav-button">Uitloggen</span>
            <img href="#" src="./resources/branding/kpn-logo2-jpeg.jpg" alt="kpn-logo-zwart-op-wit" class="nav-logo">
        </div>
        </body>
    `
  }

  _onClick() {
    this.count++
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
        top: 0px;
        left: 0px;
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
        width: 100%;
        // position: absolute;
        top: 24px;
        left: 852px;
        font-family: Montserrat;
        font-size: 1em;
        opacity: 1;
        text-align: center;
    }
    
    .nav-logo {
        width: 60em;
        object-fit: cover;
        height: 5em;
    
        opacity: 1;
        position: relative;
        // top: 7px;
        right: 1px;
        overflow: hidden;
    }

    li {        list-style: none;    }
    `
  }
}

window.customElements.define('nav-menu', MyElement)
