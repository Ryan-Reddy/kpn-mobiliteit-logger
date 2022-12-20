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
import './reset-password.ts';
import './new-account.ts';
import {eventOptions, property, customElement} from 'lit-element';
import {NavMenu} from './nav-menu';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('compiled-templates')
export class CompiledTemplates extends LitElement {
    @property() _currentPage: string;
    @property() _homePageTemplateHidden = "";
    @property() _invoerenTemplateHidden = "hidden";
    @property() _reisGeschiedenisTemplateHidden = "hidden";
    @property() _loginTemplateHidden = "hidden";
    @property() _logoutTemplateHidden = "hidden";
    @property() _accountInfoTemplateHidden = "hidden";
    @property() _overzichtTemplateHidden = "hidden";
    @property() _thermometerTemplateHidden = "hidden";
    @property() _supportTemplateHidden = "hidden";
    @property() _passwordResetTemplateHidden = "hidden";
    @property() _newAccountTemplateHidden = "hidden";

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
            <div class=${this._homePageTemplateHidden}>${this._homePageTemplate()}</div>
            <div class=${this._invoerenTemplateHidden}>${this._invoerenTemplate()}</div>
            <div class=${this._reisGeschiedenisTemplateHidden}>${this._overzichtTemplate()}</div>
            <div class=${this._loginTemplateHidden}>${this._loginTemplate()}</div>
            <div class=${this._logoutTemplateHidden}>${this._loginTemplate()}</div>
            <div class=${this._supportTemplateHidden}>${this._supportTemplate()}</div>
            <div class=${this._thermometerTemplateHidden}>${this._thermometerTemplate()}</div>
            <div class=${this._accountInfoTemplateHidden}>${this._accountInfoTemplate()}</div>
            <div class=${this._passwordResetTemplateHidden}>${this._resetPasswordTemplate()}</div>
            <div class=${this._newAccountTemplateHidden}>${this._newAccountTemplate()}</div
            
            <footer-menu></footer-menu>
            <footer-menu @page-chosen=${this._onCurrentPageChanged}></footer-menu>
            </body>
        `;
    }


    _onCurrentPageChanged(event: Event) {
        console.log('_onCurrentPageChanged()')
        const target = event.target as NavMenu;
        this.hideRest()
        this._currentPage = target.currentPage;
        switch (this._currentPage) {
            case "home-page": {
                console.log('home case')
                this._homePageTemplateHidden = "";
                break;
            }
            case "Reis Registreren": {
                console.log('reis registeren case')
                this._invoerenTemplateHidden = "";

                break;
            }
            case "Reisgeschiedenis": {
                console.log('reis registeren case')
                this._reisGeschiedenisTemplateHidden = "";
                break;
            }
            case "Account": {
                console.log('Account')
                this._accountInfoTemplateHidden = "";
                break;
            }
            case "Support": {
                console.log('Support')
                this._supportTemplateHidden = "";
                break;
            }
            // TODO: Logout needs work in compiled-templates.ts
            case "Logout": {
                console.log('Logout needs work in compiled-templates.ts')
                this._logoutTemplateHidden = "";
                break;
            }
            case "Login": {
                console.log('Login')
                this._loginTemplateHidden = "";
                break;
            }
            case "password-reset": {
                console.log('password-reset')
                this._passwordResetTemplateHidden = "";
                break;
            }
            case "new-account": {
                console.log('new-account')
                this._newAccountTemplateHidden = "";
                break;
            }
            case "nope":
                console.log('nope')
                break;
        }
    }

    headerTemplate() {
        return html`
            <header>
                <title>KPN-222</title>
                <H1>${this._currentPage}</H1>
            </header>`;
    }

    _homePageTemplate() {
        return html`
            <home-page></home-page>`;
    }

    _overzichtTemplate() {
        return html`
            <overzicht-reizen></overzicht-reizen>`;
    }

    _invoerenTemplate() {
        return html`
            <invoeren-reizen id="invoeren-reizen"></invoeren-reizen>`;
    }

    _thermometerTemplate() {
        return html`
            <thermometer></thermometer>`;
    }

    _loginTemplate() {
        return html`
            <login-element @page-chosen=${this._onCurrentPageChanged}></login-element>`;
    }

    _supportTemplate() {
        return html`
            <support-element></support-element>`;
    }

    _accountInfoTemplate() {
        return html`
            <account-element></account-element>`;
    }

    _newAccountTemplate() {
        return html`
            <new-account></new-account>`;
    }

    _resetPasswordTemplate() {
        return html`
            <reset-password></reset-password>`;
    }

    hideRest() {
        this._homePageTemplateHidden = "hidden";
        this._loginTemplateHidden = "hidden";
        this._invoerenTemplateHidden = "hidden";
        this._invoerenTemplateHidden = "hidden";
        this._reisGeschiedenisTemplateHidden = "hidden";
        this._accountInfoTemplateHidden = "hidden";
        this._supportTemplateHidden = "hidden";
        this._passwordResetTemplateHidden = "hidden";
        this._newAccountTemplateHidden = "hidden";
    }
}