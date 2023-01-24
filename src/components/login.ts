import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

import loginDTO from "../domain/loginDTO";

/**
 * A Login element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('login-element')
export class Login extends LitElement {
    @property() _loginData: loginDTO | undefined;
    @property() _passwordInput = "wachtwoord";
    @property() _emailId = "_emailId";
    @property() _passwordId = "_passwordId";
    @query('#_emailId') _emailInputElement!: HTMLInputElement;
    @query('#_passwordId') _passwordInputElement!: HTMLInputElement;
    @property() _shadowRoot: any;
    private _currentPageTitle = "Login";


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
      .full {
        width: 100%;
      }

      header {
        padding-top: 1em;
        font-size: 2em;
        padding-bottom: 0.5em;
      }

      header p {
        font-size: 0.5em;
      }

      table {
        padding: 1em;
        background: var(--kpn-blauw);
      }
      label {
        /*font-size: 2em;*/
        visibility: hidden;
      }

      form {
        margin-top: 1em;
        padding-left: 1em;
        padding-right: 1em;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }

      ol {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }

      li {
        padding: 0.1em;
      }

      fieldset {
        padding-left: 1em;
        padding-right: 1em;
      }

      #vervoerstype {
        background-color: #00c300;
      }

      .inputfield {
        width: 100%;
        padding: 0.8em 0.4px;
        /*margin: 0.1em;*/
        border: none;
        border-radius: 4px;
        background-color: var(--kpn-wit);
        color: var(--kpn-zwart);
        background-color: var(--kpn-grijs);
        vertical-align: middle;
        text-indent: 0.7em;
      }

      /*Buttons: */
      input[type='button'],
      input[type='submit'],
      input[type='reset'] {
        width: 33%;
        background-color: #00c300;
        border: none;
        color: white;
        padding: 1em 0px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
      }

      .visibility-hidden {
        display: none;
        pointer-events: none;
        color: lightgrey;
        background-color: var(--kpn-grijs);
      }
    `;
    }

    // @ts-ignore
    firstUpdated(changedProperties) {
        changedProperties.forEach((oldValue: any, propName: any) => {
            console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        // @ts-ignore
        const textArea = this.shadowRoot.getElementById(this._emailId);
    }

    render() {
        return html`
            <header>
                <h1 class="header">${this._currentPageTitle}</h1>
            </header>
            <body>
            <div id="page-container">
                <main>
                    <form id="login_account">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email"
                                   autocomplete="email"
                                   class="inputfield"
                                   value=""
                                   id="${this._emailId}" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password"
                                   autocomplete="password"
                                   class="inputfield" id="${this._passwordId}"
                                   value=""
                                   placeholder="Password">
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" autocomplete="password"
                                   class="inputfield"
                                   id="passwordInput">
                            <input type="checkbox" checked="checked" name="remember"> Onthoudt mijn gegevens
                        </div>
                        <input @click=${this._login} type="submit" class="submit-login">
                    </form>

                    <div @click=${this._clickMenu} id="nope">

                        <a class="nav-button" href="#" id="password-reset">Wachtwoord vergeten</a>
                        ||
                        <a class="nav-button" href="#" id="new-account">Nieuw account creëren</a>
        `;
    }

    _login(e: Event) {
        const email = this._emailInputElement.value;
        const password = this._passwordInputElement.value;
        sessionStorage.removeItem("userID");
        sessionStorage.removeItem("password");

        sessionStorage.setItem("userID", JSON.stringify(email))
        // TODO check input with db and return user
        //   DO NOT SAVE PW to localstorage or elsewhere

        sessionStorage.setItem("password", JSON.stringify(password))
        window.open('/home', '_self');
    }


    private async _clickMenu() {
        // @ts-ignore
        const id = e.target.id;
        console.log('id= ' + id);
        // this.currentPage = id;

        // const hasChanged = this.currentPage !== id;
        // if (hasChanged) {
        // this.currentPage = id;
        // console.log('currentPage now: ' + this.currentPage);

        //notify parent:
        // this.dispatchEvent(new Event('page-chosen'));
        // }
    }
}
