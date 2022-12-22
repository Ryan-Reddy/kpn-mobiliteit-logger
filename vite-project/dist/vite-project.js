import { LitElement as t, css as e, html as n } from "lit-element";
/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class o extends t {
  static get styles() {
    return e`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }
  static get properties() {
    return {
      name: { type: String },
      count: { type: Number }
    };
  }
  constructor() {
    super(), this.name = "World", this.count = 0;
  }
  render() {
    return n`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }
  _onClick() {
    this.count++;
  }
}
window.customElements.define("my-element", o);
export {
  o as MyElement
};
