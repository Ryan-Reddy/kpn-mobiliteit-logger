import {css, html, LitElement} from 'lit'
import {CompiledTemplates} from './compiled-templates.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  constructor() {
    super()
    this.naamGebruiker = "Hans Fumphried";
    this.kpnLogo = "./resources/branding/kpn-logo2-jpeg.jpg"
    this._currentPage = 'no page chosen yet';
  }

  static get properties() {
    return {
      /** ingelogde gebruiker */
      naamGebruiker: {type: String},

      /** logo */
      kpnLogo: {type: String},

      _currentPage: {type: String, reflect: true}
    }
  }

  render() {
        // TODO create response menu with: https://www.codingnepalweb.com/responsive-dropdown-menu-bar-html-css/
    return html`
        <body id="bodyofmenubar">
        <span class="ingelogd_als">ingelogd als ${this.naamGebruiker}</span>
        <div class="entire_menu_bar">
            <img href="#" src="${this.kpnLogo}" alt="kpn-logo-zwart-op-wit" class="nav-logo">
            <nav>
                    <ul>
                         <li> <a class="nav-button" href="#" @click=${this._dispatchPageLink} id='homecoming'>Home</a></li>
                        |<li> <a class="nav-button" href="#"  @click=${this._dispatchPageLink} id='Reis Registreren'>Reis Registreren</a></li>
                        |<li> <a class="nav-button" href="#"  @click=${this._dispatchPageLink} id='Reisgeschiedenis'>Reisgeschiedenis</a></li>
                        |<li> <a class="nav-button" href="#"  @click=${this._dispatchPageLink} id='Account'>Account</a></li>
                        |<li> <a class="nav-button" href="#"  @click=${this._dispatchPageLink} id='Support'>Support</a></li>
                        |<li> <a class="nav-button" href="#"  @click=${this._dispatchPageLink} id='Uitloggen'>Uitloggen</a></li>
                    </ul>
            </nav>
        </div>
                        ${this._currentPage}
        </body>
    `
  }

  _dispatchPageLink(e) {
    console.log('_dispatchPageLink()')
    console.log('id= ' + e.target.id)
    console.log('innertext= ' + e.target.innerText)
    // this._currentPage = e.target.id;
    this._currentPage = e.target.innerText;

    localStorage.setItem('currentpagesessionstorage', e.target.id)
    localStorage.getItem("currentpagesessionstorage")

    // const name = this.name;
    // console.log(name)
    // if (name) {
    //   const options = {
    //     detail: {name},
    //     bubbles: true,
    //     composed: true,
    //   };
    //   this.dispatchEvent(new CustomEvent('mydispatchpagelink', options));
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
    
    .entire_menu_bar {
        // width: 1w;
        height: 8em;
        border: 1px solid black;
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
    
    }
    
    nav ul li{
    display: inline-block;
    line-height: 8em;
    margin: 0 1em;
    }
    
    nav ul li a{
    color: white;
    border-radius: 3px
    text-transform: uppercase;
    }
    
    a.active, a:hover {
      background: red;
      transition: .5s;
      
    }  
     
    
    .nav-button {
        opacity: 1;
        text-align: center;
    }
    
    .nav-logo {
        object-fit: cover;
        height: 5em;
        opacity: 1;
        position: fixed;
        // top: 7px;
        right: 2em;
        overflow: hidden;
        padding: 0 8em;
    }
    #check{
    display: none;
    }
    
    @media (max-width: 952px) {
    .nav-logo {
      height: 30px;
      padding-left: 50px;
      }
      nav ul li a{
        font-size: 10px;
        display: inline-block;
        line-height: 8em;
        margin: 0 1em;
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
      transition: all .5s;
      }
      nav ul li {
        display: block;
      }
      nav ul li a {
        font-size: 20px;
     }
     a:hover, a.active {
      background: none;
      color: #333;   
    }
    #check:checked ~ul{
    left: 0;
    }
    
    
    }

    `
  }
}

window.customElements.define('nav-menu', MyElement)
