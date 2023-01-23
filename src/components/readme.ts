import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('readme-element')
export class ReadmeElement extends LitElement {
    @property() _hiddenElement = 'hidden';
    @property() _currentPageTitle = 'Readme';

    constructor() {
        super();
        sessionStorage.setItem('currentpagetitle',this._currentPageTitle);
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
        color: lightgrey;
        foreground-color: grey;
        background-color: var(--kpn-grijs);
        required: invalid;
      }
      button {
        width: 66%;
        height: 2em;
      }
    `;
    }

    //TODO properly import /node_modules/zero-md:
    render() {
        return html`
            <header>
                <h1 class="header">${this._currentPageTitle}</h1>
            </header>
                <script
                        type="module"
                        src="zero-md"
                ></script>
            <body>
            <main>
                <h1>README FILE</h1>
                <zero-md src="../README.md"></zero-md>

            </main>

            </body>
            </html>
    `;
    }

    _clickForSupport() {
        console.log('Click for support');
        console.log(this._hiddenElement);
        this._hiddenElement = this._hiddenElement == 'hidden' ? '' : 'hidden';
    }
}
