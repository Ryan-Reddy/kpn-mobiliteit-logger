import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'

import './nav-menu.js';
// import './header-template.js';
// import './my-article.js';
import './footer-menu.js';
import './home-page-test.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class VariablePageTemplate extends LitElement {
  static get properties() {
    return {
      /**
       * De huidige pagina die getoond wordt
       */
      _currentPage: {type: String},
    }
  }

  constructor() {
    super()
    this.currentPage = 'empty-current-page'
  }

  render() {
    return html`
    <body>
      ${this.navTemplate()}
      ${this.currentPage}
      ${this.footerTemplate()}
    
    </body>
  `;
  }


  navTemplate() {
    return html`<nav-menu></nav-menu>`;
  }
  footerTemplate() {
    return html`<footer-menu></footer-menu>`;
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
}

window.customElements.define('compiled-templates', VariablePageTemplate)
