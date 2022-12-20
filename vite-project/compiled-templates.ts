import {LitElement, css, html} from 'lit';

import './footer-menu.js';
import './home-page-test.js';
import './nav-menu.ts';
import './overzicht-reizen.js';
import './invoeren-reizen.js';
import './thermometer.js';
import {eventOptions, property} from 'lit-element';
import {NavMenu} from './nav-menu';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CompiledTemplates extends LitElement {
    @property() _currentPage: string;
    @property() _invoerenTemplateHidden = "hidden";
    @property() _lastpage: string;
    @property() _reisGeschiedenisTemplateHidden= "hidden";

    constructor() {
        super();
    // @eventlistener('')
    }

    @eventOptions({capture: true}) _onClick(e: Event) {
        console.log('clicked event listener')
    }

    static get properties() {
        return {
            /**
             * De huidige pagina die getoond wordt
             */
            _currentPage: {type: String},
        };
    }

    static get styles() {
        return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
      .hidden {
            display: none;
            pointer-events: none;
            color: lightgrey;
            foreground-color: grey;
            background-color: grey;
            required: invalid;
        }
        .show {
        }
    `;
    }

    render() {
        return html`
            <body>
            <nav-menu @page-chosen=${this._onCurrentPageChanged}></nav-menu>

            <div class=${this._invoerenTemplateHidden}>${this.invoerenTemplate()}</div>
            <div class=${this._reisGeschiedenisTemplateHidden}>${this.overzichtTemplate()}</div>
            <br/><br/><br/><br/><br/>
            //_currentPage bubbler: ${this._currentPage}
            <br/>
            ${this.thermometerTemplate()}

            ${this.footerTemplate()}
            </body>
        `;
    }

    _onCurrentPageChanged(event: Event) {
        this._lastpage = this._currentPage;

        console.log('_onCurrentPageChanged()')
        const target = event.target as NavMenu;
        this._currentPage = target.currentPage;


        switch (this._currentPage) {
            case "home-page": {
                console.log('home case')
                this._invoerenTemplateHidden = "hidden";
                this._reisGeschiedenisTemplateHidden = "hidden";
                break;
            }
            case "Reis Registreren": {
                console.log('reis registeren case')
                this._invoerenTemplateHidden = "";
                this._reisGeschiedenisTemplateHidden = "hidden";

                break;
            }
            case "Reisgeschiedenis": {
                console.log('reis registeren case')
                this._invoerenTemplateHidden = "hidden";
                this._reisGeschiedenisTemplateHidden = "";
                break;
            }
        }

    }

    navTemplate() {
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        return html`
            <nav-menu
                    @page-changed=${this._onCurrentPageChanged()}
            ></nav-menu>`;
    }

    homeTemplate() {
        return html`
            <home-page></home-page>`;
    }
    footerTemplate() {
        return html`
            <footer-menu></footer-menu>`;
    }
    overzichtTemplate() {
        return html`
            <overzicht-reizen></overzicht-reizen>`;
    }
    invoerenTemplate() {
        return html`
            <invoeren-reizen id="invoeren-reizen"></invoeren-reizen>`;
    }
    thermometerTemplate() {
        return html`
            <thermometer></thermometer>`;
    }


}

window.customElements.define('compiled-templates', CompiledTemplates);
