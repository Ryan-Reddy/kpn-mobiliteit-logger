import {css, html, LitElement} from 'lit'
import {customElement, property} from "lit-element";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('footer-menu')
export class MyElement extends LitElement {
  @property() currentPage: string;

  constructor() {
    super()
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
        width: 100%;
        height: 8em;
        border: 1px solid black;
    
        bottom: 0;
        position: fixed;
        overflow: hidden;
        padding: 1rem 1.5rem;
      
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #151617;
        color: white;
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
            padding-right: 0 8em;
    }
    
    nav ul li{
    display: inline-block;
    line-height: 8em;
    margin: 0 5px;
    }
    
    nav ul li a{
    color: white;
    border-radius: 3px;
    text-transform: uppercase;
    padding: 5px;
    }
    a.active, a:hover {
      background: red;
      transition: .5s;
    }  
    .nav-button {
        opacity: 1;
        text-align: center;
    }
    li {        
        list-style: none;    
    }
    
    #check{
    display: none;
    }
    
    @media (max-width: 952px) {
    .nav-logo {
        height: 3em;
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
    `
  }

  render() {

    return html`
      
        <footer>
          <nav>
          <ul @click=${this._clickMenu} id="nope">
            <li>
              <a class="nav-button" href="#" id="Login">Log in</a>
            </li>
            <li>
              <a class="nav-button" href="#" id="Support">Support</a>
            </li>
            <li>
              <a class="nav-button" href="#" id="Readme">Readme</a>
            </li>
            <li>
              <a class="nav-button" href="#" id="Logout">Log out</a>
            </li>
          </ul>
          </nav>
        </footer>
    `
  }

  _clickMenu(e: Event) {
    console.log('_dispatchPageLink()');
    // @ts-ignore
    const id = e.target.id;
    console.log('id= ' + id);

    const hasChanged = this.currentPage !== id;

    if (hasChanged) {
      this.currentPage = id;

      //notify parent:
      this.dispatchEvent(new Event('page-chosen'));
    }
  }
}

