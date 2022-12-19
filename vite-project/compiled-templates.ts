import {LitElement, css, html} from 'lit'

import './footer-menu.js';
import './home-page-test.js';
import './nav-menu.ts';
import './overzicht-reizen.js';
import './invoeren-reizen.js';
import {property} from "lit-element";
import {NavMenu} from "./nav-menu";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CompiledTemplates extends LitElement {
  @property() _sessionstorecurrpage = localStorage.getItem("currentpagesessionstorage")
  @property() _currentPage : String;

  constructor() {
    super()
  }

  static get properties() {
    return {
      /**
       * De huidige pagina die getoond wordt
       */
      _sessionstorecurrpage: {type: Element},

      _currentPage: {type: String},
    }

  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

    `
  }

  render() {
    return html`
    <body>
      
      <nav-menu @page-chosen=${this._onCurrentPageChanged}></nav-menu>


      ${this.invoerenTemplate()}
      <br><br><br><br><br>
      //_currentPage bubbler: ${this._currentPage}
      <br>
      
      ${this.footerTemplate()}
    </body>
  `
  }

  _onCurrentPageChanged(event: Event){
    const target = event.target as NavMenu;
    this._currentPage = target.currentPage;
  }

  navTemplate() {
    return html`<nav-menu @page-changed=${this._onCurrentPageChanged()}></nav-menu>`;
  }

  homeTemplate() {
    return html`<home-page></home-page>`;
  }

  footerTemplate() {
    return html`<footer-menu></footer-menu>`;
  }

  overzichtTemplate() {
    return html`<overzicht-reizen></overzicht-reizen>`;
  }

  invoerenTemplate() {
    return html`<invoeren-reizen id='invoeren-reizen'></invoeren-reizen>`;
  }


}
window.customElements.define('compiled-templates', CompiledTemplates)