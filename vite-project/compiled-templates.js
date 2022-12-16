import {LitElement, css, html} from 'lit'

import './footer-menu.js';
import './home-page-test.js';
import './nav-menu.js';
import './overzicht-reizen.js';
import './invoeren-reizen.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CompiledTemplates extends LitElement {
  constructor() {
    super()
    window.addEventListener('click', this._pageChange)
    this._sessionstorecurrpage = localStorage.getItem("currentpagesessionstorage")
  }

  static get properties() {
    return {
      /**
       * De huidige pagina die getoond wordt
       */
      _sessionstorecurrpage: {type: Element}
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

  set currentPage(newPage) {
    console.log('reached set currentpage')
    if (this._currentPage === newPage) {
      // no change, don't do any work
      console.log(this._currentPage)
      return;
    }

    // value changed, trigger an update
    this._currentPage = newPage;
    this.requestUpdate();
  }

  _pageChange = () => {
    this._sessionstorecurrpage = localStorage.getItem("currentpagesessionstorage")
  }

  render() {
    return html`
    <body>
      ${this.navTemplate()}
      
      ${this.overzichtTemplate()}
      <br><br><br><br><br>
      {{Curr page bubbler: ${this._sessionstorecurrpage}
      ${this._sessionstorecurrpage.toString()} }}
      <br><br>
      ${this.footerTemplate()}
    </body>
  `
  }

  navTemplate() {
    return html`<nav-menu></nav-menu>`;
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
    return html`<invoeren-reizen></invoeren-reizen>`;
  }
}

window.customElements.define('compiled-templates', CompiledTemplates)
