import { LitElement, css, html } from '../node_modules/lit';
import { eventOptions, property, customElement } from 'lit-element';

import './footer-menu.js';
import './home-page.ts';
import './nav-menu.ts';
import './overzicht-reizen.js';
import './invoeren-reizen.js';
import './invoeren-reizen-wijzigen.js';
// import './thermometer.js';
import './login.ts';
import './account-info.ts';
import './support.ts';
import './reset-password.ts';
import './new-account.ts';
import './readme.ts';
import { NavMenu } from './nav-menu';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('compiled-templates')
export class ControllerTemplate extends LitElement {
  @property() _currentPage: string | undefined;
  //TODO: make visible : "":
  @property() _homePageTemplateHidden = '';
  @property() _reisInvoerenTemplateHidden = 'hidden';
  @property() _reisGeschiedenisTemplateHidden = 'hidden';
  @property() _loginTemplateHidden = 'hidden';
  @property() _logoutTemplateHidden = 'hidden';
  @property() _accountInfoTemplateHidden = 'hidden';
  @property() _overzichtTemplateHidden = 'hidden';
  @property() _thermometerTemplateHidden = 'hidden';
  @property() _supportTemplateHidden = 'hidden';
  @property() _passwordResetTemplateHidden = 'hidden';
  @property() _newAccountTemplateHidden = 'hidden';
  @property() _readmeTemplateHidden = 'hidden';
  @property() _reisWijzigenTemplateHidden = 'hidden';

  constructor() {
    super();
  }

  @eventOptions({ capture: true }) _onClick() {
    console.log('clicked event listener');
  }

  static get properties() {
    return {
      /**
       * De huidige pagina die getoond wordt
       */
      _currentPage: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        max-width: 100vw;
        margin: 0 auto;
        padding: 2rem;
      }
      
      body {
        padding: 10em;
      }

      #page-container {
        min-height: 100%;
        padding: 2em;        
      }

      footer-menu {
        width: 100vw;
        position: absolute;
        bottom: 0;
        height: 2.5rem; /* Footer height */
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
            <div id="page-container">
                    <div class=${
                      this._homePageTemplateHidden
                    }>${this._homePageTemplate()}</div>
                    <div class=${
                      this._reisInvoerenTemplateHidden
                    }>${this._reisInvoerenTemplate()}</div>
                    <div class=${
                      this._reisWijzigenTemplateHidden
                    }>${this._reisWijzigenTemplate()}</div>
                    <div class=${
                      this._reisGeschiedenisTemplateHidden
                    }>${this._overzichtTemplate()}</div>
                    <div class=${
                      this._loginTemplateHidden
                    }>${this._loginTemplate()}</div>
                    <div class=${
                      this._logoutTemplateHidden
                    }>${this._loginTemplate()}</div>
                    <div class=${
                      this._supportTemplateHidden
                    }>${this._supportTemplate()}</div>
                    <div class=${
                      this._thermometerTemplateHidden
                    }>${this._thermometerTemplate()}</div>
                    <div class=${
                      this._accountInfoTemplateHidden
                    }>${this._accountInfoTemplate()}</div>
                    <div class=${
                      this._passwordResetTemplateHidden
                    }>${this._resetPasswordTemplate()}</div>
                    <div class=${
                      this._readmeTemplateHidden
                    }>${this._readmeTemplate()}</div>
                    <div class=${
                      this._newAccountTemplateHidden
                    }>${this._newAccountTemplate()}</div
            </div>
            </body>
                <footer-menu @page-chosen=${
                  this._onCurrentPageChanged
                }></footer-menu>
        `;
  }

  _onCurrentPageChanged(event: Event) {
    console.log('_onCurrentPageChanged()');
    const target = event.target as NavMenu;
    this._currentPage = target.currentPage;
    switch (this._currentPage) {
      case 'home-page': {
        this.hideRest();
        console.log('home case');
        this._homePageTemplateHidden = '';
        break;
      }
      case 'Reis Registreren': {
        this.hideRest();
        console.log('reis registeren case');
        this._reisInvoerenTemplateHidden = '';
        break;
      }
      case 'Reisgeschiedenis': {
        this.hideRest();
        console.log('reis registeren case');
        this._reisGeschiedenisTemplateHidden = '';
        break;
      }
      case 'Account': {
        this.hideRest();
        console.log('Account');
        this._accountInfoTemplateHidden = '';
        break;
      }
      case 'Support': {
        this.hideRest();
        console.log('Support');
        this._supportTemplateHidden = '';
        break;
      }
      // TODO: Logout needs work in controller-template.ts
      case 'Logout': {
        this.hideRest();
        console.log('Logout needs work in controller-template.ts');
        this._logoutTemplateHidden = '';
        break;
      }
      case 'Login': {
        this.hideRest();
        console.log('Login');
        this._loginTemplateHidden = '';
        break;
      }
      case 'password-reset': {
        this.hideRest();
        console.log('password-reset');
        this._passwordResetTemplateHidden = '';
        break;
      }
      case 'new-account': {
        this.hideRest();
        console.log('new-account');
        this._newAccountTemplateHidden = '';
        break;
      }
      case 'Readme': {
        this.hideRest();
        console.log('new-account');
        this._readmeTemplateHidden = '';
        break;
      }
      case 'nope':
        console.log('nope');
        break;
    }
  }

  hideRest() {
    this._homePageTemplateHidden = 'hidden';
    this._reisInvoerenTemplateHidden = 'hidden';
    this._reisGeschiedenisTemplateHidden = 'hidden';
    this._loginTemplateHidden = 'hidden';
    this._logoutTemplateHidden = 'hidden';
    this._accountInfoTemplateHidden = 'hidden';
    this._overzichtTemplateHidden = 'hidden';
    this._thermometerTemplateHidden = 'hidden';
    this._supportTemplateHidden = 'hidden';
    this._passwordResetTemplateHidden = 'hidden';
    this._newAccountTemplateHidden = 'hidden';
    this._readmeTemplateHidden = 'hidden';
    this._reisWijzigenTemplateHidden = 'hidden';
  }

  _homePageTemplate() {
    return html` <home-page></home-page>`;
  }

  headerTemplate() {
    return html` <header>
      <title>KPN-222</title>
      <h1>${this._currentPage}</h1>
    </header>`;
  }

  _overzichtTemplate() {
    return html` <overzicht-reizen></overzicht-reizen>`;
  }

  _reisInvoerenTemplate() {
    return html` <invoeren-reizen id="invoeren-reizen"></invoeren-reizen>`;
  }

  _reisWijzigenTemplate() {
    return html` <invoeren-reizen-wijzigen id="invoeren-reizen"></invoeren-reizen-wijzigen>`;
  }

  _thermometerTemplate() {
    return html` <thermometer></thermometer>`;
  }

  _loginTemplate() {
    return html` <login-element
      @page-chosen=${this._onCurrentPageChanged}
    ></login-element>`;
  }

  _supportTemplate() {
    return html` <support-element></support-element>`;
  }

  _accountInfoTemplate() {
    return html` <account-element></account-element>`;
  }

  _newAccountTemplate() {
    return html` <new-account></new-account>`;
  }

  _resetPasswordTemplate() {
    return html` <reset-password></reset-password>`;
  }

  _readmeTemplate() {
    return html` <readme-element></readme-element>`;
  }


}
