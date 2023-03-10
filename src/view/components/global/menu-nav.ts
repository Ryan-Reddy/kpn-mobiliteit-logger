import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('menu-nav-element')
export class MenuNav extends LitElement {
    @property() _naamGebruiker = sessionStorage.getItem('userID');
    @property() _kpnLogo = 'branding/Logo_kpn_banner.svg';
    @property() _currentPage: string = '';
    @property() _kpnHomePageUrl = 'https://www.kpn.com/';
    private _root: any;

    constructor() {
        super();
        this.onLoad();
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
            color: var(--kpn-wit);
            font-size: 1em;
            opacity: 1;
          }

          .entire_menu_bar {
            height: 8em;
            border: 1px solid var(--kpn-zwart);
            background-color: #151617;

            position: relative;
            overflow: hidden;
            padding: 1rem 1.5rem;

            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .ingelogd_als {
            width: 176px;
            color: yellow;
            position: relative;
            left: 1em;
            font-family: Fira Code;
            font-size: 12px;
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

          a:visited {
            text-decoration: none;
          }

          a:link {
            text-decoration: none;
          }

          a.active,
          a:hover {
            background: var(--kpn-groen);
            transition: 0.5s;
          }

          .nav-button {
            opacity: 1;
            text-align: center;
          }

          .nav-logo {
            object-fit: cover;
            height: 5em;
            opacity: 1;
            position: absolute;
            right: 2em;
            overflow: hidden;
            padding: 0 2em;
          }

          img {
            -webkit-filter: invert(1);
            filter: invert(1);
          }

          .nav-logo:hover {
            height: 3.5em;
          }

          #check {
            display: none;
          }

          #check:checked ~ ul {
            left: 0;
          }

          @media (max-width: 952px) {
            .nav-logo {
              height: 3em;
              padding-left: 50px;
            }

            nav ul li a {
              font-size: 10px;
              display: inline-block;
              line-height: 8em;
              margin: 0 1em;
            }
          }

          @media (max-width: 858px) {
            .checkbtn {
              display: block;
            }

            u: {
              position: fixed;
              width: 100%;
              height: 100vh;
              top: 80px;
              left: -100%;
              text-align: center;
              transition: all 0.5s;
            } nav ul li {
              display: block;
            } nav ul li a {
              font-size: 20px;
            };

            a:hover,
            a.active {
              background: none;
              color: #333;
            }
          }

          @media (prefers-color-scheme: light) {
            .entire_menu_bar,
            nav ul li a {
              color: var(--kpn-zwart);
              background-color: var(--kpn-wit);
              border-color: lightgray;
            }

            .ingelogd_als {
              color: red;
            }

            img {
              -webkit-filter: invert(1);
              filter: invert(0);
            }
          }
        `;
    }

    script() {
        let script = document.createElement('script');
        script.onload = this.onLoad.bind(this);
        script.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js';
        return script;
    }

    onLoad() {
        this._root = this.createRenderRoot();
        console.log('The page has fully loaded');
        // alert('loaded nav-menu');
    }


    render() {
        // TODO create response menu with: https://www.codingnepalweb.com/responsive-dropdown-menu-bar-html-css/
        return html`
            <body id="bodyofmenubar">
            <a href="#" class="ingelogd_als">ingelogd als ${this._naamGebruiker}</a>
            <div class="entire_menu_bar">
                <img
                        @click=${this.kpnHomePageUrl}
                        src="${this._kpnLogo}"
                        alt="kpn-logo-zwart-op-wit"
                        class="nav-logo"
                />
                <nav>
                    <input type="checkbox" id="check"/>
                    <label for="check">
                        <i class="fas fa-bars"></i>
                    </label>
                    <ul @click=${this._clickMenu} id="nope">
                        <li>
                            <a class="nav-button" href="invoeren-reizen" id="Reis Registreren"
                            >Reis Registreren</a
                            >
                        </li>
                        <li>
                            <a class="nav-button" href="overzicht-reizen" id="Reisgeschiedenis">Reisgeschiedenis</a>
                        </li>
                        <li><a class="dashboard-button" href="dashboard" id="Dashboard">Dashboard</a></li>
                        
                    </ul>
                </nav>
            </div>
            </body>
        `;
    }

    _clickMenu(e: Event) {
        console.log('_dispatchPageLink()');
        // @ts-ignore
        const id = e.target.id;
        console.log('id= ' + id);

        const hasChanged = this._currentPage !== id;

        if (hasChanged) {
            this._currentPage = id;

            //notify parent:
            this.dispatchEvent(new Event('page-chosen'));
        }
    }

    kpnHomePageUrl() {
        window.open(this._kpnHomePageUrl);
    }
}
