import {LitElement, css, html} from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  constructor() {
    super()
  }

  static get properties() {
    return {
      // docsHint: { type: String },
      // count: { type: Number },
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

  render() {

    return html`
        <body>
        <main>
        <h1 class="header">Welkom bij de KNP medewerkers mobiliteits APP!</h1>
        <ul>
            // FOR TEST PURPOSE ONLY:
            <li>
                <label for="registreerReis" hidden>Log out</label>
                <input id="registreerReis" onclick="window.open('/v2fe-v2a-2/src/main/webapp/formulier-reizen','_self')"
                       type="button" value="registreerReis">
            </li>
        </ul>
    
        <h2>wiki and info/</h2>
        <ul class="externallinks">
            <li>
                <a href="https://github.com/orgs/HU-SD-SV2FE-studenten-2022/projects/23">Github Project Management</a>
            </li>
            <li>
                <a href="https://github.com/HU-SD-SV2FE-studenten-2022/v2fe-v2a-2">HU repo</a>
            </li>
            <li>
                <a href="https://ryan-reddy.github.io/src/main/webapp/wiki/">wiki</a>
            </li>
        </ul>
        <h2>Github.io/</h2>
        <ul class="externallinks">
            <li>
                <a href="https://hu-sd-sv2fe-studenten-2022.github.io/v2fe-v2a-2/">live PAGES</a>
            </li>
            <li>
                <a href="https://hu-sd-sv2fe-studenten-2022.github.io/src/main/webapp/formulier-reizen">Formulier reizen</a>
            </li>
            <li>
                <a href="https://hu-sd-sv2fe-studenten-2022.github.io/src/main/webapp/overzicht-reizen/">overzicht
                    reizen</a>
            </li>
        </ul>
    
        <simple-greeting name="World"></simple-greeting>
    
    </main>
      </body>
    `
  }

  _onClick() {
    this.count++
  }
}

window.customElements.define('home-page', MyElement)