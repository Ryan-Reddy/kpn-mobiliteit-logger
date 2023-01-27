import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {PreventAndRedirectCommands, PreventResult, RedirectResult, Router, RouterLocation} from "@vaadin/router";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('account-info-element')
export class Accountinfo extends LitElement {
    @property() _currentPageTitle = 'Account info';
    private _unsavedData = false;

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
        .full {
        width: 100%;
        height: 100%;
        overflow: auto
        }

        H1 {
        padding-top: 1em;
        font-size: 2em;
        padding-bottom: 0.5em;
        }
        header p{
          font-size: 1em;
        }

        .tablecontainer {
          height: 60vh;
          overflow: auto
        }
        table {
        background: var(--kpn-blauw);
        max-height: 100%;
        padding: 1em;
        }
          th {
          padding: .6em;
          border-bottom: 1px dotted #ddd;
          border-collapse: collapse;
        }
        tr:hover {background-color: red;}


        label {
            /*font-size: 2em;*/
            /*visibility: hidden;*/
            display: none;
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
            font-color: var(--kpn-zwart);
        }

        .inputfield {
            width: 100%;
            padding: 0.8em 0.4px;
            /*margin: 0.1em;*/
            border: none;
            border-radius: 4px;
            background-color: var(--kpn-blauw);
            vertical-align: middle;
            text-indent: 0.7em;
        }

        /*Buttons: */
        input[type=button], input[type=submit], input[type=reset] {
            width: 33%;
            background-color: var(--kpn-wit);
            border: none;
            color: var(--kpn-wit);
            padding: 1em 0px;
            text-decoration: none;
            margin: 4px 2px;
            cursor: pointer;
        }

        .visibility-hidden {
            display: none;
            pointer-events: none;
            color: lightgrey;
            foreground-color: var(--kpn-grijs);
            background-color: var(--kpn-grijs);
            required: invalid;
        }

    @media (max-width: 858px) {
    .hiddensmolscreen {
      display: none;
    }
    `;
    }

    render() {
        return html`
            <header>
                <h1 class="header">${this._currentPageTitle}</h1>
                <p>Breng hier wijzigingen aan in uw gegevens.</p>
            </header>

            <body>

            <form id="postaccount">
                <div class="tablecontainer">

                    <table style="width:100%">
                        <tr>
                            <td></td>
                            <td>Huidige accountinfo:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><label for="naam">Naam:</label></td>
                            <td><input class="inputfield" id="naam" name="naam" placeholder="naam" type="text"/></td>
                            <td></td>
                        </tr>
                        <!-- <tr>
                        <td><label for="achternaam">Achternaam:</label></td>
                    <td><input class="inputfield" id="achternaam" name="achternaam"
                    type="text" style="width:100%"/><br/></td>
                        <td><br/></td>
                        </tr> -->
                        <tr>
                            <td><label for="email">E-mail adres:</label></td>
                            <td><input class="inputfield" id="email" name="email" placeholder="email" type="text"
                                       style="width:100%"/></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <!-- <input id="send_json" onclick="sendJsonData()" type="button" value="send json"/>
              <input id="send_formdata" onclick="sendFormData()" type="button" value="send formdata"/> -->
                <input id="update_account_info" onclick="wijzigAccount()" type="button" value="Update Info"/>
                <span id="feedbackspan"></span>
            </form>
            <hr/>
            <br/>
            <a href="../reset-password/index.html">
                <button>Wachtwoord resetten</button>
            </a>

            </div>
            </main>
            <footer id="footer">
            </footer>
            </div>
            </body>
        `;
    }

    // _login(e: Event) {
    _login() {
        console.log('login.login()');

        //notify parent:
        this.dispatchEvent(new Event('page-chosen'));
    }

    public onChange() {
        this._unsavedData = true;
    }

    public onBeforeEnter(location: RouterLocation, commands: PreventAndRedirectCommands, router: Router): Promise<unknown> | RedirectResult | undefined {
        console.log('onBeforeEnter');
        if (!this.isAuthorized()) {
            // sync operation
            // return commands.redirect('/');

            // async operation
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('Not authorized, redirect to home page');
                    resolve(commands.redirect('/login'));
                }, 2000);
            });
        }

        console.log('You can see this page');
    }

    public onBeforeLeave(location: RouterLocation, commands: PreventAndRedirectCommands, router: Router): PreventResult | undefined {
        if (this._unsavedData) {

            console.log('onBeforeLeave');

            const leave = window.confirm('Weet je zeker dat je deze pagina wil verlaten? \nUw ingevoerde gegevens zijn nog niet verzonden!');
            if (!leave) {
                console.log('onBeforeLeave commands.prevent()');
                return commands.prevent();
            }
        }
    }


    private isAuthorized() {
        return !!sessionStorage.getItem('userID');
    }
}
