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
    this.naamGebruiker = 'Hans Fumphried'
    this.count = 0
  }

  render() {

    return html`
        <footer>
            <li>
                <label for="loginButton" hidden>Log in</label>
                <input id="loginButton" onclick="window.open('/v2fe-v2a-2/src/main/webapp/login','_self')" type="button"
                       value="Log in">
            </li>


            <button @click=${e => console.log('clicked')}>Click Me</button>
            
            <li>
                <label for="logoutButton" hidden>Log out</label>
                <input id="logoutButton" onclick="window.open('/v2fe-v2a-2/src/main/webapp/logout','_self')"
                       type="button" value="Log out">
            </li>
        </footer>
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
    
    footer {
        width: 100%;
        height: 8em;
        border: 1px solid black;
    
        bottom: 0;
        position: fixed;
        overflow: hidden;
        padding: 1rem 1.5rem;
      
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #151617;
        color: white;
        opacity: 1;
    }
    
    input {
        width: 176px;
        position: relative;
        left: 1em;
        font-family: Fira Code;
        font-size: 12px;
        opacity: 1;
        text-align: left;
    }
    li {        list-style: none;    }
    `
  }
}

window.customElements.define('footer-menu', MyElement)
