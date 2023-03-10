import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {PreventAndRedirectCommands, PreventResult, RedirectResult, Router, RouterLocation} from "@vaadin/router";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('footer-menu')
export class MenuFooter extends LitElement {
    @property() _root;
    @query('.whole') whole!: HTMLDivElement;

    constructor() {
        super();
        this._root = this.createRenderRoot();
    }

    static get styles() {
        return css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none;
          }

          body {
            font-size: 14px;
            font-family: Montserrat;
            color: white;
            font-size: 1em;
            opacity: 1;
          }

          footer {
          / / width: 100 %;
          /// / height: 8 em;
          / / bottom: 0;
          /// / position: fixed;
            padding: 1rem 1.5rem;

            overflow: hidden;
            display: flex;
            justify-content: space-between;
            align-items: center;

            border: 1px solid var(--kpn-zwart);
            background-color: var(--kpn-zwart);
            color: var(--kpn-wit);
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

          nav ul {
            float: right;
            margin-right: 8em;
            padding-right: 8em;
          }

          nav ul li {
            display: inline-block;
            line-height: 8em;
            margin: 0 5px;
          }

          nav ul li a {
            color: var(--kpn-wit);
            border-radius: 3px;
            text-transform: uppercase;
            padding: 5px;
          }

          a.active, a:hover {
            background: var(--kpn-groen);
            transition: .5s;
          }

          .nav-button {
            opacity: 1;
            text-align: center;
          }

          li {
            list-style: none;
          }

          #check {
            display: none;
          }

          @media (max-width: 952px) {
            nav ul li a {
              font-size: 10px;
              //display: inline-block;
              line-height: 8em;
              margin: 0 1em;
            }
          }

          @media (max-width: 858px) {
            .checkbtn {
              display: block;
            }

            ul: {
              position: relative;
              width: 100%;
              height: 100%;
              //top: 80px;
              left: -100%;
              text-align: center;
              transition: all .5s;
            } 
            nav ul li {
              //display: block;
              font-size: 10px;
            };

            a:hover, a.active {
              background: none;
            }

            #check:checked ~ ul {
              left: 0;
            }
          }

          @media (prefers-color-scheme: light) {
            footer, nav ul li a {
              color: var(--kpn-zwart);
              background-color: var(--kpn-wit);
              border-color: var(--kpn-wit);
            }
          }
        `;
    }

    onload = () => {
        if (sessionStorage.getItem('currentpagetitle') == 'Login') {
            this.whole.setAttribute("hidden", "hidden")
        }
    };

    connectedCallback() {
        super.connectedCallback();
        console.log('thermometer connectedCallback')
        this._root = this.createRenderRoot();
    }

    disconnectedCallback() {
        sessionStorage.removeItem('currentpagetitle')
        super.disconnectedCallback();
    }

    render() {
        return html`
            <div class="whole">
                <nav>
                    <ul
                            @click=${this._clickMenu}
                            id="nope">
                        <li>
                            <a class="nav-button" href="login" id="Login">Log in</a>
                        </li>
                        <li>
                            <a class="nav-button" href="support" id="Support">Support</a>
                        </li>
                        <li><a class="nav-button" href="account-info" id="Account">Account</a></li>
                        <li>
                            <a class="nav-button" href="readme" id="Readme">Readme</a>
                        </li>
                        <li>
                            <a class="nav-button" href="#" @click="${this.logOut}" id="Logout">Log out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        `;
    }

    logOut() {
        !sessionStorage.removeItem('userID');
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
        this.whole.removeAttribute('hidden')

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
