import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import "https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2/webcomponents-loader.min.js";

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
    @property() _readmeFile = 'README.md';

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
        color: lightgrey;
        background-color: var(--kpn-grijs);
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
            <!-- Lightweight client-side loader that feature-detects and load polyfills only when necessary -->


            <zero-md src="${this._readmeFile}">
                <template>

                    <!-- Define your own styles inside a \`<style>\` tag -->
                    <style>
                        h1 {
                            color: red;
                        }
                    </style>
                </template>
            </zero-md>


        `;
    }

    _clickForSupport() {
        console.log('Click for support');
        console.log(this._hiddenElement);
        this._hiddenElement = this._hiddenElement == 'hidden' ? '' : 'hidden';
    }
}
