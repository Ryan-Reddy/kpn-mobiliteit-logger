import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('support-element')
export class SupportElement extends LitElement {
    @property() _hiddenElement = 'hidden';
    @property() _currentPageTitle = 'Support';

    constructor() {
        super();
        sessionStorage.setItem('currentpagetitle', this._currentPageTitle);

    }

    static get styles() {
        return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }

      .hidden {
        display: none;
        pointer-events: none;
        color: lightgray;
        foreground-color: var(--kpn-grijs);
        background-color: var(--kpn-grijs);
      }
      button {
        width: 66%;
        height: 2em;
      }
    `;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    render() {
        return html`
            <header>
                <h1 class="header">${this._currentPageTitle}</h1>
            </header>
            <body>
            <main>
                <label hidden for="support"></label>
                <button id="support" @click=${this._clickForSupport}>
                    Click here for support!
                </button>
                <br/>
                <div class=${this._hiddenElement}>
                    <img src="/Have-you-tried-turning-it-off-and-on-again.jpg"
                         alt="Hello IT... Have you tried turning it off and on again?"/>
                    <br/>
                    <br/>
                    <button>if so, call us on 69-420-420-69</button>
                </div>
            </main>
            </body>
        `;
    }

    _clickForSupport() {
        console.log('Click for support');
        console.log(this._hiddenElement);
        this._hiddenElement = this._hiddenElement == 'hidden' ? '' : 'hidden';
    }
}
