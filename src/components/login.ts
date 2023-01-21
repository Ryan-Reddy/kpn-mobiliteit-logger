import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import loginDTO from "../domain/loginDTO";

/**
 * A Login element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement('login-element')
export class Login extends LitElement {
    // @property() currentPage: string;
    @property({type: Boolean}) open = true;
    private _loginData: loginDTO | undefined;

    constructor() {
        super();
    }

    static get styles() {
        return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }
      .full {
        width: 100%;
      }

      header {
        padding-top: 1em;
        font-size: 2em;
        padding-bottom: 0.5em;
      }

      header p {
        font-size: 0.5em;
      }

      table {
        padding: 1em;
        background: var(--kpn-blauw);
      }
      label {
        /*font-size: 2em;*/
        /*visibility: hidden;*/
        display: none;
      }

      form {
        margin-top: 1em;
        padding-left: 1em;
        padding-right: 1em;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }

      ol {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }

      li {
        padding: 0.1em;
      }

      fieldset {
        padding-left: 1em;
        padding-right: 1em;
        font-color: var(--kpn-zwart);
      }

      #vervoerstype {
        background-color: #00c300;
      }

      .inputfield {
        width: 100%;
        padding: 0.8em 0.4px;
        /*margin: 0.1em;*/
        border: none;
        border-radius: 4px;
        background-color: var(--kpn-wit);
        color: var(--kpn-zwart);
        background-color: var(--kpn-grijs);
        vertical-align: middle;
        text-indent: 0.7em;
      }

      /*Buttons: */
      input[type='button'],
      input[type='submit'],
      input[type='reset'] {
        width: 33%;
        background-color: #00c300;
        border: none;
        color: white;
        padding: 1em 0px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
      }

      .visibility-hidden {
        display: none;
        pointer-events: none;
        color: lightgrey;
        foreground-color: var(--kpn-grijs);
        background-color: var(--kpn-grijs);
        required: invalid;
      }
    `;
    }

    render() {
        return html`
                  
                  <vaadin-grid .items="${this._loginData}">
                      <vaadin-grid-column path="_email"></vaadin-grid-column>
                      <vaadin-grid-column path="_password"></vaadin-grid-column>
                  </vaadin-grid>
                  
                    <p ?hidden=${!this.open}>Logged in !!</p>

              </form>
              <br /><br />
              <div @click=${this._clickMenu} id="nope">
                <a class="nav-button" href="#" id="password-reset"
                  >Wachtwoord vergeten</a
                >
                ||
                <a class="nav-button" href="#" id="new-account"
                  >Nieuw account creëren</a
                >
                  
    `;
    }
    //
    // @state()
    // private items: Person[] = [];
    //
    // async firstUpdated() {
    //     const { people } = await getPeople();
    //     this.items = people;
    // }
    //
    //
    //
    // // _login(e: Event) {
    // _login(e: Event) {
    //     const id = e.target.id;
    //
    //     alert("Logged In!" + id);
    //     localStorage.setItem('username',e.value);
    // }
    //
    private async _clickMenu() {
        // @ts-ignore
        const id = e.target.id;
        console.log('id= ' + id);
        // this.currentPage = id;

        // const hasChanged = this.currentPage !== id;
        // if (hasChanged) {
        // this.currentPage = id;
        // console.log('currentPage now: ' + this.currentPage);

        //notify parent:
        // this.dispatchEvent(new Event('page-chosen'));
        // }
    }


}
