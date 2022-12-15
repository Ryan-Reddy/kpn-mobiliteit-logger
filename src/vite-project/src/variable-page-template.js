import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'

import './nav-menu.js';
// import './header-template.js';
// import './my-article.js';
import './footer-menu.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class VariablePageTemplate extends LitElement {
  static get properties() {
    return {
      userName: { type: String },
      count: { type: Number },

    }
  }

  constructor() {
    super()
    // this.docsHint = 'Click on the Vite and Lit logos to learn more'
    // this.count = 10
  }

  render() {
    return html`
        <body>
    ${this.navTemplate()}

    ${this.footerTemplate()}
    </body>
  `;
  }
  // ${this.headerTemplate()}
  // ${this.articleTemplate()}


  navTemplate() {
    return html`<nav-menu></nav-menu>`;
  }
  // headerTemplate() {
  //   return html`<header>${this.article.title}</header>`;
  // }
  // articleTemplate() {
  //   return html`<article>${this.article.text}</article>`;
  // }
  footerTemplate() {
    return html`<footer-menu></footer-menu>`;
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;

      }
      
      // body { 
      //   background-image: url('assets/achtergrondshapes.webp');
      //   background-repeat: no-repeat;
      //   right: 0;
      //   bottom: 0;
      //   position: static;
      //   /*background-size: cover;*/
      // }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `
  }
}

window.customElements.define('variable-page', VariablePageTemplate)
