import {LitElement, css, html} from 'lit';

import './footer-menu.js';
import './home-page.ts';
import './nav-menu.ts';
import './overzicht-reizen.js';
import './invoeren-reizen.js';
import './thermometer.js';
import './login.ts';
import './account-info.ts';
import './support.ts';
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
    @property() _homePageTemplateHidden= "";
    @property() _invoerenTemplateHidden = "hidden";
    @property() _reisGeschiedenisTemplateHidden = "hidden";
    @property() _loginTemplateHidden = "hidden";
    @property() _logoutTemplateHidden= "hidden";
    @property() _accountInfoTemplateHidden = "hidden";
    @property() _overzichtTemplateHidden = "hidden";
    @property() _thermometerTemplateHidden = "hidden";
    @property() _supportTemplateHidden = "hidden";

    constructor() {
        super();
    }

    // @eventOptions({capture: true}) _onClick(e: Event) {
    @eventOptions({capture: true}) _onClick() {
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

    `;
    }

    render() {
        return html`
            <nav-menu @page-chosen=${this._onCurrentPageChanged}></nav-menu>
            ${this.headerTemplate()}

            <body>
            <div class=${this._homePageTemplateHidden}>${this.homePageTemplate()}</div>
            <div class=${this._invoerenTemplateHidden}>${this.invoerenTemplate()}</div>
            <div class=${this._reisGeschiedenisTemplateHidden}>${this.overzichtTemplate()}</div>
            <div class=${this._loginTemplateHidden}>${this.loginTemplate()}</div>
            <div class=${this._supportTemplateHidden}>${this.supportTemplate()}</div>
            <div class=${this._accountInfoTemplateHidden}>${this.accountInfoTemplate()}</div>
            <br/><br/><br/><br/><br/>
            <br/>
            ${this.thermometerTemplate()}

            <footer-menu @page-chosen=${this._onCurrentPageChanged}></footer-menu>
            </body>
        `;
    }
    headerTemplate() {
        return html`            <header>
            <title>KPN-222</title>
            <H1>${this._currentPage}</H1>
        </header>`;
    }
    homePageTemplate() {
        return html`
            <home-page></home-page>`;
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

    loginTemplate() {
        return html`
            <login-element></login-element>`;
    }
    supportTemplate() {
        return html`
            <support-element></support-element>`;
    }

    accountInfoTemplate() {
        return html`
            <account-element></account-element>`;
    }

    _onCurrentPageChanged(event: Event) {
        console.log('_onCurrentPageChanged()')
        const target = event.target as NavMenu;
        this._currentPage = target.currentPage;
        switch (this._currentPage) {
            case "home-page": {
                this.hideRest()
                console.log('home case')
                this._homePageTemplateHidden = "";
                break;
            }
            case "Reis Registreren": {
                this.hideRest()
                console.log('reis registeren case')
                this._invoerenTemplateHidden = "";

                break;
            }
            case "Reisgeschiedenis": {
                this.hideRest()
                console.log('reis registeren case')
                this._reisGeschiedenisTemplateHidden = "";
                break;
            }
            case "Account": {
                this.hideRest()
                console.log('Account')
                this._accountInfoTemplateHidden = "";
                break;
            }
            case "Support": {
                console.log('Support')
                this.hideRest()
                this._supportTemplateHidden = "";
                break;
            }
            case "Logout": {
                console.log('Logout')
                this.hideRest()
                this._logoutTemplateHidden = "";
                break;
            }
            case "Login": {
                console.log('Login')
                this.hideRest()
                this._loginTemplateHidden = "";
                break;
            }
            case "nope":
                console.log('nope')
                break;
        }
    }

    hideRest() {
        this._homePageTemplateHidden = "hidden";
        this._loginTemplateHidden = "hidden";
        this._invoerenTemplateHidden = "hidden";
        this._invoerenTemplateHidden = "hidden";
        this._reisGeschiedenisTemplateHidden = "hidden";
        this._accountInfoTemplateHidden = "hidden";
        this._supportTemplateHidden = "hidden";
    }
}

window.customElements.define('compiled-templates', CompiledTemplates);
