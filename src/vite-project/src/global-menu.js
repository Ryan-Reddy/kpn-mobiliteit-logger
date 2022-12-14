import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'

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
      docsHint: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    }
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
    this.count = 0
  }

  render() {

    return html`
        <head>
            <link href="https://fonts.googleapis.com/css?family=Fira+Code&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>

            <title>Menu Bar</title>
        </head>
        <body>
        <h1 class="header">Menu Bar!</h1>

        <div class="entire_menu_bar">
            <span class="ingelogd_als">ingelogd als Hans Fumphried</span>
            <span class="button1">Reis Registreren</span>
            <span class="button2">Reisgeschiedenis</span>
            <span class="button3">Account</span>
            <span class="button4">Support</span>
            <span class="button5">Uitloggen</span>
            <div class="logo"> <img src="/branding/kpn-logo2-jpeg.jpg" alt="kpn-logo-zwart-op-wit"> </div>
        </div>
        </body>
    `
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

    box-sizing: border-box;
}

body {
    font-size: 14px;
}

.entire_menu_bar {
    width: 100%;
    height: 60px;
    background: white;
    font-color: black;
    opacity: 1;
    position: relative;
    top: 0px;
    left: 0px;
    overflow: hidden;
}

.ingelogd_als {
    width: 176px;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 21px;
    left: 79px;
    font-family: Fira Code;
    font-weight: Bold;
    font-size: 12px;
    opacity: 1;
    text-align: left;
}

.button1 {
    width: 122px;
    position: absolute;
    top: 24px;
    left: 852px;
    font-family: Montserrat;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: center;
}

.button2 {
    width: 129px;
    position: absolute;
    top: 24px;
    left: 1015px;
    font-family: Montserrat;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: center;
}

.button3 {
    width: 63px;
    position: absolute;
    top: 24px;
    left: 1200px;
    font-family: Montserrat;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: center;
}

.button4 {
    width: 61px;
    position: absolute;
    top: 24px;
    left: 1308px;
    font-family: Montserrat;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: center;
}

.button5 {
    width: 75px;
    position: absolute;
    top: 21px;
    left: 1414px;
    font-family: Montserrat;
    font-weight: Medium;
    font-size: 15px;
    opacity: 1;
    text-align: center;
}

.logo {
    width: 12.8em;
    height: 4.6em;
    opacity: 1;
    position: absolute;
    top: 7px;
    left: 1534px;
    overflow: hidden;
}
img {
    width: 12.8em;
    height: 4.6em;
    object-fit: cover;
}
    `
  }
}

window.customElements.define('global-menu', MyElement)
