import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {property} from "lit-element";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("thermometer-element")
export class Thermometer extends LitElement {
  private sliderinput: any;
  constructor() {
    super();
  }

  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: {type: String},

      /**
       * The number of times the button has been clicked.
       */
      count: {type: Number},

      /**
       * The thermometer polygon pointer
       */
      mercury: {type: Number},
    };
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
    `;
  }

  render() {
    return html`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
        </head>

        <div class="range">
          <button "@click'${this._thermometerInput}">hello          </button>
          <input id="sliderinput" type="range" min="0" max="236" value=${(this.sliderinput)}"/>
        </div>

          <div class="thermometer">
            <svg
                    id="thermometer-svg"
                    version="1.1"
                    viewBox="-5 78.2 381.6 412.5"
                    x="0px"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0px"
            >
            <g id="fill">
              <path
                      d="M207.8,345.9V106.5h-40v239.4 c-11.6,6.9-19.4,19.5-19.4,33.9c0,21.8,17.6,39.4,39.4,39.4s39.4-17.6,39.4-39.4C227.2,365.4,219.4,352.7,207.8,345.9z"
                      fill="#00C300"
                      id="fill-path"
              ></path>
            </g>
                <g id="cover">
              <rect
                      fill="#ffffff"
                      height="${this.mercury}"
                      id="mercury"
                      width="40.8"
                      x="167.4"
                      y="105.5"
              ></rect>
                    // thermometer fill range: height=(0=full)-(236=empty)
                    <polygon
                            fill="#00C300"
                            id="polygon"
                            points="233.7,291.3 225.8,299.9 233.7,308.5 236.8,308.5 236.8,291.3"
                            transform="translate(0 41)"
                            xmlns="http://www.w3.org/2000/svg"
                    ></polygon>
                    // Transform translate min = (0 41); max = (0 -200)
            </g>
                <g id="thermometer">
              <path
                      d="M219.7,340.3V120.1 c0-17.6-14.3-31.9-31.9-31.9c-9.6,0-18.6,4.3-24.7,11.7c-4.7,5.7-7.2,12.8-7.2,20.2v220.2c-12,9.7-18.9,24.1-18.9,39.6 c0,28,22.8,50.8,50.8,50.8s50.8-22.8,50.8-50.8C238.7,364.3,231.8,350,219.7,340.3z M214.7,273.9h-26.9v1.5h26.9v15.3h-26.9v1.5 h26.9v15.3h-26.9v1.5h26.9v15.3h-26.9v1.5h26.9v15.3H161v-82.6h53.8v15.4H214.7z M214.7,189.8h-26.9v1.5h26.9v15.3h-26.9v1.5h26.9 v15.3h-26.9v1.5h26.9v15.3h-26.9v1.5h26.9V257H161v-82.6h53.8v15.4H214.7z M167,103c5.1-6.3,12.7-9.8,20.8-9.8 c9.6,0,18,5,22.7,12.6h-22.8v1.5h23.7c2.1,3.8,3.3,8.2,3.3,12.8v2.5h-26.9v1.5h26.9v15.3h-26.9v1.5h26.9v15.3h-26.9v1.5h26.9V173 H161v-53C161,113.9,163.1,107.8,167,103z M187.8,425.6c-25.3,0-45.8-20.5-45.8-45.8c0-14.3,6.5-27.6,18-36.4l1-0.8l0,0h53.8l0,0 l1,0.8c11.4,8.8,18,22,18,36.4C233.7,405.1,213.1,425.6,187.8,425.6z"
                      fill="#231F20"
                      id="thermometer-path"
              ></path>
            </g>
          </svg>
        </div>
        </html>
    `;
  }

  private _thermometerInput(e: Event) {
    console.log(this.sliderinput.value);
    this.mercury = this.sliderinput.value;
  }
}