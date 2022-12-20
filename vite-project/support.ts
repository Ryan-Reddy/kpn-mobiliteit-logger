import {css, html, LitElement} from 'lit'
import {customElement, property} from "lit-element";


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('support-element')
export class SupportElement extends LitElement {
    @property() _hiddenElement = "hidden";
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
    
    .hidden {
    display: none;
    pointer-events: none;
    color: lightgrey;
    foreground-color: grey;
    background-color: grey;
    required: invalid;
    }
    `
    }

    render() {

        return html`
                    <body>
                        <main>
                            <button @click=${this._clickForSupport}>Click here for support!</button>
                                <br>
                            <div class=${this._hiddenElement} >
                            <img src="public/Have-you-tried-turning-it-off-and-on-again.jpg">
                                <br>
                                <br>
                                <p>if so, call us on 69-420-420-69</p>
                            </div>
                        </main>
                    </body>
    `
    }
    _clickForSupport() {
        console.log("Click for support")
        console.log(this._hiddenElement)
        this._hiddenElement = this._hiddenElement == "hidden" ? "" : "hidden";
    }
}

