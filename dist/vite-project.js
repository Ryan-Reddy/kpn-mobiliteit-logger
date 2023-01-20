import "lit-html";
import { LitElement as re, css as ne, html as b } from "lit-element/lit-element.js";
import "lit-html/is-server.js";
import { property as a, customElement as f, LitElement as se, css as ae, html as le, eventOptions as de } from "lit-element";
import { LitElement as _, css as y, html as g } from "lit";
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
    o(t);
  new MutationObserver((t) => {
    for (const n of t)
      if (n.type === "childList")
        for (const s of n.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(t) {
    const n = {};
    return t.integrity && (n.integrity = t.integrity), t.referrerpolicy && (n.referrerPolicy = t.referrerpolicy), t.crossorigin === "use-credentials" ? n.credentials = "include" : t.crossorigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n;
  }
  function o(t) {
    if (t.ep)
      return;
    t.ep = !0;
    const n = i(t);
    fetch(t.href, n);
  }
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $ = window, M = $.ShadowRoot && ($.ShadyCSS === void 0 || $.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Y = Symbol(), N = /* @__PURE__ */ new WeakMap();
let pe = class {
  constructor(e, i, o) {
    if (this._$cssResult$ = !0, o !== Y)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = i;
  }
  get styleSheet() {
    let e = this.o;
    const i = this.t;
    if (M && e === void 0) {
      const o = i !== void 0 && i.length === 1;
      o && (e = N.get(i)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), o && N.set(i, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const ce = (r) => new pe(typeof r == "string" ? r : r + "", void 0, Y), he = (r, e) => {
  M ? r.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : e.forEach((i) => {
    const o = document.createElement("style"), t = $.litNonce;
    t !== void 0 && o.setAttribute("nonce", t), o.textContent = i.cssText, r.appendChild(o);
  });
}, q = M ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let i = "";
  for (const o of e.cssRules)
    i += o.cssText;
  return ce(i);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var E;
const j = window, V = j.trustedTypes, ue = V ? V.emptyScript : "", I = j.reactiveElementPolyfillSupport, S = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? ue : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let i = r;
  switch (e) {
    case Boolean:
      i = r !== null;
      break;
    case Number:
      i = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(r);
      } catch {
        i = null;
      }
  }
  return i;
} }, J = (r, e) => e !== r && (e == e || r == r), C = { attribute: !0, type: String, converter: S, reflect: !1, hasChanged: J };
class w extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(e) {
    var i;
    this.finalize(), ((i = this.h) !== null && i !== void 0 ? i : this.h = []).push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((i, o) => {
      const t = this._$Ep(o, i);
      t !== void 0 && (this._$Ev.set(t, o), e.push(t));
    }), e;
  }
  static createProperty(e, i = C) {
    if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(e, i), !i.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const o = typeof e == "symbol" ? Symbol() : "__" + e, t = this.getPropertyDescriptor(e, o, i);
      t !== void 0 && Object.defineProperty(this.prototype, e, t);
    }
  }
  static getPropertyDescriptor(e, i, o) {
    return { get() {
      return this[i];
    }, set(t) {
      const n = this[e];
      this[i] = t, this.requestUpdate(e, n, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || C;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), e.h !== void 0 && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const i = this.properties, o = [...Object.getOwnPropertyNames(i), ...Object.getOwnPropertySymbols(i)];
      for (const t of o)
        this.createProperty(t, i[t]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(e) {
    const i = [];
    if (Array.isArray(e)) {
      const o = new Set(e.flat(1 / 0).reverse());
      for (const t of o)
        i.unshift(q(t));
    } else
      e !== void 0 && i.push(q(e));
    return i;
  }
  static _$Ep(e, i) {
    const o = i.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  u() {
    var e;
    this._$E_ = new Promise((i) => this.enableUpdating = i), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach((i) => i(this));
  }
  addController(e) {
    var i, o;
    ((i = this._$ES) !== null && i !== void 0 ? i : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((o = e.hostConnected) === null || o === void 0 || o.call(e));
  }
  removeController(e) {
    var i;
    (i = this._$ES) === null || i === void 0 || i.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, i) => {
      this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
    });
  }
  createRenderRoot() {
    var e;
    const i = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return he(i, this.constructor.elementStyles), i;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
      var o;
      return (o = i.hostConnected) === null || o === void 0 ? void 0 : o.call(i);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
      var o;
      return (o = i.hostDisconnected) === null || o === void 0 ? void 0 : o.call(i);
    });
  }
  attributeChangedCallback(e, i, o) {
    this._$AK(e, o);
  }
  _$EO(e, i, o = C) {
    var t;
    const n = this.constructor._$Ep(e, o);
    if (n !== void 0 && o.reflect === !0) {
      const s = (((t = o.converter) === null || t === void 0 ? void 0 : t.toAttribute) !== void 0 ? o.converter : S).toAttribute(i, o.type);
      this._$El = e, s == null ? this.removeAttribute(n) : this.setAttribute(n, s), this._$El = null;
    }
  }
  _$AK(e, i) {
    var o;
    const t = this.constructor, n = t._$Ev.get(e);
    if (n !== void 0 && this._$El !== n) {
      const s = t.getPropertyOptions(n), oe = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((o = s.converter) === null || o === void 0 ? void 0 : o.fromAttribute) !== void 0 ? s.converter : S;
      this._$El = n, this[n] = oe.fromAttribute(i, s.type), this._$El = null;
    }
  }
  requestUpdate(e, i, o) {
    let t = !0;
    e !== void 0 && (((o = o || this.constructor.getPropertyOptions(e)).hasChanged || J)(this[e], i) ? (this._$AL.has(e) || this._$AL.set(e, i), o.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, o))) : t = !1), !this.isUpdatePending && t && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (i) {
      Promise.reject(i);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, n) => this[n] = t), this._$Ei = void 0);
    let i = !1;
    const o = this._$AL;
    try {
      i = this.shouldUpdate(o), i ? (this.willUpdate(o), (e = this._$ES) === null || e === void 0 || e.forEach((t) => {
        var n;
        return (n = t.hostUpdate) === null || n === void 0 ? void 0 : n.call(t);
      }), this.update(o)) : this._$Ek();
    } catch (t) {
      throw i = !1, this._$Ek(), t;
    }
    i && this._$AE(o);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var i;
    (i = this._$ES) === null || i === void 0 || i.forEach((o) => {
      var t;
      return (t = o.hostUpdated) === null || t === void 0 ? void 0 : t.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$EC !== void 0 && (this._$EC.forEach((i, o) => this._$EO(o, this[o], i)), this._$EC = void 0), this._$Ek();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
w.finalized = !0, w.elementProperties = /* @__PURE__ */ new Map(), w.elementStyles = [], w.shadowRootOptions = { mode: "open" }, I == null || I({ ReactiveElement: w }), ((E = j.reactiveElementVersions) !== null && E !== void 0 ? E : j.reactiveElementVersions = []).push("1.5.0");
var me = Object.defineProperty, ve = Object.getOwnPropertyDescriptor, Q = (r, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? ve(e, i) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && me(e, i, t), t;
};
let O = class extends _ {
  constructor() {
    super();
  }
  static get styles() {
    return y`
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
    / / width: 100 %;
    / / height: 8 em;
    / / bottom: 0;
    / / position: fixed;
        padding: 1rem 1.5rem;
    
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        border: 1px solid var(--kpn-zwart);
        background-color: var(--kpn-zwart);
        color: var(--kpn-wit);
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
    
    nav ul li {
        display: inline-block;
        line-height: 8em;
        margin: 0 5px;
    }
    
    nav ul li a {
        color: var(--kpn-wit);
        border-radius: 3px;
        text-transform: uppercase;
        padding: 5px;
    }
    
    a.active, a:hover {
        background: var(--kpn-groen);
        transition: .5s;
    }
    
    .nav-button {
        opacity: 1;
        text-align: center;
    }
    
    li {
        list-style: none;
    }
    
    #check {
        display: none;
    }
    
    @media (max-width: 952px) {
        .nav-logo {
            height: 3em;
            padding-left: 50px;
        }
    
        nav ul li a {
            font-size: 10px;
            display: inline-block;
            line-height: 8em;
            margin: 0 1em;
        }
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
        }
    
        #check:checked ~ ul {
            left: 0;
        }
    }
    
    @media (prefers-color-scheme: light) {
        footer, nav ul li a {
            color: var(--kpn-zwart);
            background-color: var(--kpn-wit);
            border-color: var(--kpn-wit);
        }
    }
    `;
  }
  render() {
    return g`
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
    `;
  }
  _clickMenu(r) {
    console.log("_dispatchPageLink()");
    const e = r.target.id;
    console.log("id= " + e), this.currentPage !== e && (this.currentPage = e, this.dispatchEvent(new Event("page-chosen")));
  }
};
Q([
  a()
], O.prototype, "currentPage", 2);
O = Q([
  f("footer-menu")
], O);
var ge = Object.defineProperty, be = Object.getOwnPropertyDescriptor, fe = (r, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? be(e, i) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && ge(e, i, t), t;
};
let B = class extends _ {
  constructor() {
    super();
  }
  static get styles() {
    return y`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
      
      main {
        background-color: var(--kpn-zwart);
      }
      ul {
        list-style: none;
      }
      .card {
        padding: 2em;
      }

      a {
        font-weight: 500;
        color: var(--kpn-grijs);
      }
      
      a:hover {
        color: var(--kpn-groen);
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
        background-color: color: var(--kpn-zwart);
        
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: var(--kpn-groen);
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
    return g`
      <header>
        <h1 class="header">Welkom bij de KNP medewerkers mobiliteits APP!</h1>
      </header>
        <body>
        <main>
        <ul>
            // FOR TEST PURPOSE ONLY:
            <li>
                <label for="registreerReis" hidden>Log out</label>
                <input id="registreerReis" onclick="window.open('/v2fe-v2a-2/src/main/webapp/formulier-reizen','_self')"
                       type="button" value="registreerReis">
            </li>
    
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
    `;
  }
};
B = fe([
  f("home-page")
], B);
var _e = Object.defineProperty, ye = Object.getOwnPropertyDescriptor, z = (r, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? ye(e, i) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && _e(e, i, t), t;
};
let k = class extends se {
  constructor() {
    super(), this.naamGebruiker = "Hans Fumphriehd", this.kpnLogo = "/branding/kpn-logo2-jpeg.jpg", this.currentPage = "", this._kpnHomePageUrl = "https://www.kpn.com/", this.onLoad();
  }
  static get styles() {
    return ae`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }

      body {
        font-size: 14px;
        font-family: Montserrat;
        color: var(--kpn-wit);
        font-size: 1em;
        opacity: 1;
      }

      .entire_menu_bar {
        height: 8em;
        border: 1px solid var(--kpn-zwart);
        background-color: #151617;

        position: relative;
        overflow: hidden;
        padding: 1rem 1.5rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .ingelogd_als {
        width: 176px;
        color: yellow;
        position: relative;
        left: 1em;
        font-family: Fira Code;
        font-size: 12px;
        text-align: left;
      }

      nav ul {
        float: right;
        margin-right: 8em;
        padding-right: 0 8em;
      }

      nav ul li {
        display: inline-block;
        line-height: 8em;
        margin: 0 5px;
      }

      nav ul li a {
        color: var(--kpn-wit);
        border-radius: 3px;
        text-transform: uppercase;
        padding: 5px;
      }

      a:visited {
        text-decoration: none;
      }

      a:link {
        text-decoration: none;
      }

      a.active,
      a:hover {
        background: var(--kpn-groen);
        transition: 0.5s;
      }

      .nav-button {
        opacity: 1;
        text-align: center;
      }

      .nav-logo {
        object-fit: cover;
        height: 5em;
        opacity: 1;
        position: absolute;
        right: 2em;
        overflow: hidden;
        padding: 0 2em;
      }

      img {
        -webkit-filter: invert(1);
        filter: invert(1);
      }

      .nav-logo:hover {
        height: 3.5em;
      }

      #check {
        display: none;
      }

      #check:checked ~ ul {
        left: 0;
      }

      @media (max-width: 952px) {
        .nav-logo {
          height: 3em;
          padding-left: 50px;
        }

        nav ul li a {
          font-size: 10px;
          display: inline-block;
          line-height: 8em;
          margin: 0 1em;
        }
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
          transition: all 0.5s;
        }

        nav ul li {
          display: block;
        }

        nav ul li a {
          font-size: 20px;
        }

        a:hover,
        a.active {
          background: none;
          color: #333;
        }
      }

      @media (prefers-color-scheme: light) {
        .entire_menu_bar,
        nav ul li a {
          color: var(--kpn-zwart);
          background-color: var(--kpn-wit);
          border-color: var(--kpn-wit);
        }
        .ingelogd_als {
          color: red;
        }
        img {
          -webkit-filter: invert(1);
          filter: invert(0);
        }
      }
    `;
  }
  script() {
    let r = document.createElement("script");
    return r.onload = this.onLoad.bind(this), r.src = "https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js", r;
  }
  onLoad() {
  }
  render() {
    return le`
      <body id="bodyofmenubar">
        <a href="#" class="ingelogd_als">ingelogd als ${this.naamGebruiker}</a>
        <div class="entire_menu_bar">
          <img
            @click=${this.kpnHomePageUrl}
            href="#"
            src="${this.kpnLogo}"
            alt="kpn-logo-zwart-op-wit"
            class="nav-logo"
          />
          <nav>
            <input type="checkbox" id="check" />
            <label for="check">
              <i class="fas fa-bars"></i>
            </label>
            <ul @click=${this._clickMenu} id="nope">
              <li>
                <a class="nav-button" href="home-page" id="home-page">Home</a>
              </li>
              <li>
                <a class="nav-button" href="reis-registreren" id="Reis Registreren"
                  >Reis Registreren</a
                >
              </li>
              <li>
                <a class="nav-button" href="#" id="Reisgeschiedenis"
                  >Reisgeschiedenis</a
                >
              </li>
              <li><a class="nav-button" href="#" id="Account">Account</a></li>
              <li><a class="nav-button" href="#" id="Support">Support</a></li>
              <li>
                <a class="nav-button" href="#" id="Uitloggen">Uitloggen</a>
              </li>
            </ul>
          </nav>
        </div>
      </body>
    `;
  }
  _clickMenu(r) {
    console.log("_dispatchPageLink()");
    const e = r.target.id;
    console.log("id= " + e), this.currentPage !== e && (this.currentPage = e, this.dispatchEvent(new Event("page-chosen")));
  }
  kpnHomePageUrl() {
    window.open(this._kpnHomePageUrl);
  }
};
z([
  a()
], k.prototype, "naamGebruiker", 2);
z([
  a()
], k.prototype, "kpnLogo", 2);
z([
  a()
], k.prototype, "currentPage", 2);
z([
  a()
], k.prototype, "_kpnHomePageUrl", 2);
k = z([
  f("nav-menu")
], k);
var ke = Object.defineProperty, we = Object.getOwnPropertyDescriptor, m = (r, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? we(e, i) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && ke(e, i, t), t;
};
let h = class extends _ {
  constructor() {
    super(), this.titel = "Overzicht Reizen", this._vervoerMiddelDummyData = [], this._reizenDummyData = [], this.headers = ["Project", "Type vervoer", "Begin", "Einde", "Km", "C02", "Kosten", "Wijzig"], this._feedback = "", this._sorted0 = !1, this._sorted1 = !1, this._sorted2 = !1, this._sorted3 = !1, this._sorted4 = !1, this._sorted5 = !1, this._sorted6 = !1, this._sorted7 = !1, this.sortsymboldown = "&#5167;", this.sortsymbolUP = "&#11016;", fetch("/vervoermiddel-CO2.json").then((r) => r.json()).then((r) => {
      this._vervoerMiddelDummyData = Array.from(r), console.log(this._vervoerMiddelDummyData);
    }), fetch("/dummydata-reizen.json").then((r) => r.json()).then((r) => {
      this._reizenDummyData = Array.from(r), console.log(this._reizenDummyData);
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  static get styles() {
    return y`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }
      .full {
        width: 100%;
        height: 100%;
        overflow: auto;
      }
      H1 {
        padding-top: 1em;
        font-size: 2em;
        padding-bottom: 0.5em;
      }
      header p {
        font-size: 1em;
      }
      main {
      }
      .tablecontainer {
        height: 60vh;
        overflow: auto;
      }
      table {
        background: var(--kpn-zwart);
        max-height: 100%;
      }
      th {
        padding: 0.6em;
        border-bottom: 1px dotted #ddd;
        border-collapse: collapse;
      }
      .columnHeads {
        background: var(--kpn-groen);
        cursor: pointer;
      }
      @media (max-width: 858px) {
        .hiddensmolscreen {
          display: none;
        }
      }
      #errorKM {
        background: var(--kpn-warning-red);
      }
      @media (prefers-color-scheme: light) {
        :root {
          color: var(--kpn-zwart);
          background-color: var(--kpn-wit);
        }

        table {
          background: var(--kpn-wit);
          border: 1px solid var(--kpn-zwart);
          border-color: var(--kpn-wit);
        }
        th {
          border-bottom: 1px dotted var(--kpn-zwart);
        }
      }
    `;
  }
  update(r) {
    super.update(r), console.log("updated YAAY");
  }
  tableToCSV() {
  }
  render() {
    return g`
            <header>
                <h1 class="header">${this.titel}</h1>
            </header>
            <body>
            <main>
          <span class="span">
            <hr/>
            <div class="tablecontainer">
              <table class="full">
                <caption hidden>
                  ${this.titel}
                </caption>
                <thead>
                  <tr @click=${this.headerClicked} class="columnHeads"
                  >
                    <th
                            id=${this.headers[0]}
                            class="hiddensmolscreen"
                    >
                      ${this.headers[0]} &#5167;&#5169;
                    </th>
                    <th id=${this.headers[1]}>
                      ${this.headers[1]} &#5167;&#5169;
                    </th>
                    <th id=${this.headers[2]}>
                      ${this.headers[2]} &#5167;&#5169;
                    </th>
                    <th
                           
                            id=${this.headers[3]}
                            class="hiddensmolscreen"
                    >
                      ${this.headers[3]} &#5167;&#5169;
                    </th>
                    <th id=${this.headers[4]}>
                      ${this.headers[4]} &#5167;&#5169;
                    </th>
                    <th
                           
                            id=${this.headers[5]}
                            class="hiddensmolscreen"
                    >
                      ${this.headers[5]} &#5167;&#5169;
                    </th>
                    <th
                           
                            id=${this.headers[6]}
                            class="hiddensmolscreen"
                    >
                      ${this.headers[6]} &#5167;&#5169;
                    </th>
                    <th id=${this.headers[7]}>
                      ${this.headers[7]} &#5167;&#5169;
                    </th>
                  </tr>
                </thead>
                <tbody>
                  ${this._reizenDummyData.map(({
      begin: r,
      eind: e,
      km: i,
      kosten: o,
      project: t,
      type: n,
      uitstoot: s
    }) => g`
                      <tr>
                          <th class="hiddensmolscreen">${t}</th>
                          <th>${n}</th>
                          <th>${r}</th>
                          <th class="hiddensmolscreen">${e}</th>
                          <th id=${i > 300 ? "errorKM" : "allGood"}>${i}</th>
                          <th class="hiddensmolscreen">${s}</th>
                          <th class="hiddensmolscreen">${o}</th>
                          <th @click=${this.wijzigDezeDataRij}><a href="wijzig" >Wijzig</a></th>
                      </tr>
                  `)}
                </tbody>
              </table>
            </div>
          </span>
                <button>Exporteren als..</button>
                <button @click="${this.tableToCSV}">download CSV</button>
                <button @click="${this.filterColumnOnTerm("nobis")}">Filter on 'nobis'</button>
                <button onclick="print()">Print...</button>
            </main>
            </body>
            <span id="feedbackspan"> ${this._feedback} </span>
            
        `;
  }
  wijzigDezeDataRij(r) {
    console.log("wijzigDezeDataRij"), console.log(r.target);
    const i = r.target.parentElement, o = i.parentElement;
    console.log(i.parentElement), console.log(o.previousSibling), this.dispatchEvent(new Event("page-chosen")), this.dispatchEvent(new Event("row-chosen"));
  }
  filterColumnOnTerm(r) {
    console.log("sortColumnSimple"), console.log(r);
  }
  headerClicked(r) {
    console.log("headerClicked"), console.log(this._reizenDummyData);
    const i = r.target.id;
    switch (console.log("id= " + i), this._feedback = "Table column to be sorted: " + i, i) {
      case this.headers[0]: {
        console.log(this._sorted0), this._sorted0 = this._sorted0 !== !0, this._reizenDummyData = this._sorted0 === !0 ? this._reizenDummyData.sort((o, t) => {
          const n = o.project.toUpperCase(), s = t.project.toUpperCase();
          return n > s ? -1 : n < s ? 1 : 0;
        }) : this._reizenDummyData.sort((o, t) => {
          const n = o.project.toUpperCase(), s = t.project.toUpperCase();
          return s > n ? -1 : s < n ? 1 : 0;
        });
        break;
      }
      case this.headers[1]: {
        console.log(this._sorted1), this._sorted1 = this._sorted1 !== !0, this._reizenDummyData = this._sorted1 === !0 ? this._reizenDummyData.sort((o, t) => {
          const n = o.type.toUpperCase(), s = t.type.toUpperCase();
          return n > s ? -1 : n < s ? 1 : 0;
        }) : this._reizenDummyData.sort((o, t) => {
          const n = o.type.toUpperCase(), s = t.type.toUpperCase();
          return s > n ? -1 : s < n ? 1 : 0;
        });
        break;
      }
      case this.headers[2]: {
        console.log(this._sorted2), this._sorted2 = this._sorted2 !== !0, this._reizenDummyData = this._sorted2 ? this._reizenDummyData.sort((o, t) => (o = new Date(o.begin), t = new Date(t.begin), o - t)) : this._reizenDummyData.sort((o, t) => (o = new Date(o.begin), t = new Date(t.begin), o - t));
        break;
      }
      case this.headers[3]: {
        console.log(this._sorted3), this._sorted3 = this._sorted3 !== !0, this._reizenDummyData = this._sorted3 ? this._reizenDummyData.sort((o, t) => (o = new Date(o.eind), t = new Date(t.eind), o - t)) : this._reizenDummyData.sort((o, t) => (o = new Date(o.eind), t = new Date(t.eind), o - t));
        break;
      }
      case this.headers[4]: {
        console.log(this._sorted4), this._sorted4 = this._sorted4 !== !0, this._reizenDummyData = this._sorted4 ? this._reizenDummyData.sort((o, t) => o.km - t.km) : this._reizenDummyData.sort((o, t) => t.km - o.km);
        break;
      }
      case this.headers[5]: {
        console.log(this._sorted5), this._sorted5 = this._sorted5 !== !0, this._reizenDummyData = this._sorted5 ? this._reizenDummyData.sort((o, t) => o.uitstoot - t.uitstoot) : this._reizenDummyData.sort((o, t) => t.uitstoot - o.uitstoot);
        break;
      }
      case this.headers[6]: {
        console.log(this._sorted6), this._sorted6 = this._sorted6 !== !0, this._reizenDummyData = this._sorted6 ? this._reizenDummyData.sort((o, t) => o.kosten - t.kosten) : this._reizenDummyData.sort((o, t) => t.kosten - o.kosten);
        break;
      }
      case this.headers[7]:
        alert("'no sorting needed'");
        break;
    }
  }
};
m([
  a()
], h.prototype, "titel", 2);
m([
  a()
], h.prototype, "_vervoerMiddelDummyData", 2);
m([
  a()
], h.prototype, "_reizenDummyData", 2);
m([
  a()
], h.prototype, "headers", 2);
m([
  a()
], h.prototype, "_feedback", 2);
m([
  a()
], h.prototype, "_sorted0", 2);
m([
  a()
], h.prototype, "_sorted1", 2);
m([
  a()
], h.prototype, "_sorted2", 2);
m([
  a()
], h.prototype, "_sorted3", 2);
m([
  a()
], h.prototype, "_sorted4", 2);
m([
  a()
], h.prototype, "_sorted5", 2);
m([
  a()
], h.prototype, "_sorted6", 2);
m([
  a()
], h.prototype, "_sorted7", 2);
m([
  a()
], h.prototype, "sortsymboldown", 2);
m([
  a()
], h.prototype, "sortsymbolUP", 2);
h = m([
  f("overzicht-reizen")
], h);
var ze = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, p = (r, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? $e(e, i) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && ze(e, i, t), t;
};
let l = class extends _ {
  constructor() {
    super(), this.currentPage = "invoeren-reizen", this.eindTijdMin = "", this.beginTijdMax = "", this._hidden = "true", this.span_message = "", this.visibility_hidden_reisklasse = "visibility-hidden", this.visibility_hidden_zakelijkprive = "visibility-hidden", this._vertrekTijd = "", this._aankomstTijd = "", this._demoKM = "11", this._demoKosten = "111,11", this._demoVertrekLocatie = "Amsterdam", this._demoAankomstLocatie = "Utrecht", this.inputfield = "inputfield", this._vervoerMiddelDummyData = [];
    let e = new Date();
    e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e.setMilliseconds(0), e.setSeconds(0), this._vertrekTijd = e.toISOString().slice(0, -1);
    let i = new Date();
    i.setMinutes(e.getMinutes() - e.getTimezoneOffset() + 60), i.setMilliseconds(0), i.setSeconds(0), this._aankomstTijd = i.toISOString().slice(0, -1), this.eindTijdMin = this._vertrekTijd, this.beginTijdMax = this._aankomstTijd + 60;
  }
  connectedCallback() {
    super.connectedCallback(), fetch("/vervoermiddel-CO2.json").then((e) => e.json()).then((e) => {
      this._vervoerMiddelDummyData = Array.from(e), console.log(this._vervoerMiddelDummyData);
    });
  }
  static get styles() {
    return y`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }
      .full {
        width: 100%;
        height: 100%;
        overflow: auto;
      }

      H1 {
        padding-top: 1em;
        font-size: 2em;
        padding-bottom: 0.5em;
      }
      header p {
        font-size: 1em;
      }

      table {
        padding: 1em;
        background: var(--kpn-blauw);
      }
      label {
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
        background-color: var(--kpn-groen);
      }

      .inputfield {
        width: 100%;
        padding: 0.8em 0.4px;
        /*margin: 0.1em;*/
        border: none;
        border-radius: 4px;
        background-color: var(--kpn-blauw);
        vertical-align: middle;
        text-indent: 0.7em;
      }

      /*Buttons: */
      input[type='button'],
      input[type='submit'],
      input[type='reset'] {
        width: 33%;
        background-color: var(--kpn-zwart);
        border: none;
        color: var(--kpn-wit);
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
      #feedbackSpan {
        background-color: var(--kpn-blauw);
        place-items: center;
        text-align: center;
      }
    `;
  }
  render() {
    return g`
            <header>
                <H1>Welkom,</H1>
                <br>
                <p>vul hieronder zo nauwkeurig mogelijk uw reis in:</p>
            </header>
            <body>

            <main>
                <form class="formulierReizen" id="formulierReizen">
                    <hr/>
                    <ol>
                        <div id="typeVervoerDiv2">
                            <li>
                                <label for="vervoerstype">typeVervoer:</label>
                                <select id="vervoerstype" class="${this.inputfield}" required focus>
                                    ${this._vervoerMiddelDummyData.map(
      ({ naam: e, uitstoot: i }) => g`
                                        <option
                                          disabled
                                          hidden="${this._hidden}"
                                          selected
                                          value="0"
                                        >
                                          "kies hier uw vervoerstype!"
                                        </option>
                                        <option
                                          @click="${this.optionClicked}"
                                          id=${e}
                                          value=${i}
                                        >
                                          ${e}
                                        </option>
                                      `
    )}
                                </select>
                                <div id="vertrekLocatieDiv">
                            <li class="alleenzakelijk" required>
                                <label for="vertrekLocatie">Vertrek locatie:</label>
                                <input class="${this.inputfield}" id="vertrekLocatie" name="vertrekLocatie"
                                       placeholder="Vertrek locatie" value=${this._demoVertrekLocatie}/>
                            </li>
                        </div>
                        <div id="aankomstLocatieDiv">
                            <li class="alleenzakelijk" required>
                                <label for="aankomstLocatie">Aankomst locatie:</label>
                                <input class="${this.inputfield}" id="aankomstLocatie" name="aankomstLocatie"
                                       placeholder="Aankomst locatie" value=${this._demoAankomstLocatie}/>
                            </li>
                        </div>
                        <div id="beginTijdDiv">
                            <li>
                                <label for="beginTijd">Begin tijd:</label>
                                <input @input=inputCallback class="${this.inputfield}" id="beginTijd" name="beginTijd"
                                       required
                                       value="${this._vertrekTijd}"
                                       max="${this.beginTijdMax}"
                                       type="datetime-local"
                                />
                            </li>
                        </div>
                        <div id="eindTijdDiv">
                            <li>
                                <label for="eindTijd">Eind tijd:</label>
                                <input class="${this.inputfield}" id="eindTijd" required value="${this._aankomstTijd}"
                                       min="${this.eindTijdMin}"
                                       type="datetime-local"/>
                            </li>
                        </div>
                        <div id="kmDiv">
                            <li required>
                                <label for="km" value="10">km:</label>
                                <input class="${this.inputfield}" id="km" name="km" placeholder="Gereisde km" required
                                       type="text"
                                       value="${this._demoKM}"/>
                            </li>
                        </div>
                        <div id="kostenDiv">
                            <li class="alleenzakelijk" required>
                                <label for="kosten">kosten:</label>
                                <input class="${this.inputfield}" id="kosten" name="kosten"
                                       placeholder="Kosten in euro's"
                                       value="${this._demoKosten}"/>
                            </li>
                        </div>
                        <div id="projectDiv">
                            <li class="alleenzakelijk" required>
                                <label for="project">Project:</label>
                                <select class="${this.inputfield}" id="project" name="project">
                                    <option disabled hidden selected value="0">Kies hier het project
                                        waar u
                                        voor hebt gereisd.
                                    </option>
                                    <option value="KPN-glasvezel-aanleg">KPN-glasvezel-aanleg</option>
                                    <option value="KPN-modem-installatie">KPN-modem-installatie</option>
                                    <option value="KPN-modem-reparatie">KPN-modem-reparatie</option>
                                    <option value="Prive">Prive</option>
                                </select>
                            </li>
                        </div>
                    </ol>
                    <div id="reisKlasseKeuzeMenu" class="${this.visibility_hidden_reisklasse}">
                        <fieldset>
                            <ol>
                                <legend>Reisklasse keuze:</legend>
                                <li>
                                    <label for="eersteKlas" style="float:left" hidden>Eerste klas</label>
                                    <input id="eersteKlas" name="klasse"
                                           type="radio" value="true"/> Eerste klas
                                </li>
                                <li>
                                    <label for="tweedeKlas" style="float:left" hidden>Tweede klas</label>
                                    <input id="tweedeKlas" name="klasse"
                                           type="radio" value="true"/> Tweede klas
                                </li>
                                <li>
                                    <label for="highspeed" style="float:left" hidden>NS-Highspeed</label>
                                    <input id="highspeed" name="klasse"
                                           type="radio" value="true"/> NS-Highspeed
                                </li>
                            </ol>
                        </fieldset>
                    </div>
                    <div id="priveZakelijkKeuzeMenu" class="${this.visibility_hidden_zakelijkprive}">
                        <fieldset>
                            <ul>
                                <legend>Prive of zakelijke reis:</legend>
                                <li>
                                    <label for="zakelijk" style="float:left" hidden>Zakelijk</label>
                                    <input id="zakelijk" name="zakelijk-prive"
                                           type="radio" value="true"
                                           @click=""
                                    /> Zakelijk
                                </li>
                                <li>
                                    <label for="prive" style="float:left" hidden></label>
                                    <input id="prive" name="zakelijk-prive"
                                           type="radio" value="true"/> Prive
                                </li>
                            </ul>
                        </fieldset>
                    </div>
                    <div id="buttonsUnderFormDiv">
                        <label for="verzendReis" hidden">Verzend</label>
                        <input class="verzendReis" id="verzendReis" type="submit" value="verzendReis">

                        <label for="zenden" hidden">Zenden(custom)</label>
                        <button id="zenden" @click=${this.formElements}>Zenden(custom)</button>

                        <label for="resetButton">Herlaad en leeg het formulier.</label>
                        <input id="resetButton" type="reset" value="Reset velden">
                        <br>
                        <label for="herhalendeReisButton">Sla op als herhalende reis.</label>
                        <input id="herhalendeReisButton" type="checkbox" value="Reset velden" disabled> Herhalende
                        reis. [under-construction]
                    </div>
                </form>
                <div id="feedbackSpan">
                    ${this.span_message}
                    <br>
                    U heeft gekozen voor voertuig:
                    ${this._gekozenVoertuig}
                    <br>
                    met gemiddelde uitstoot:
                    ${this._gekozenC02}
                    C02/km
                </div>
            </main>
            </body>
        `;
  }
  optionClicked(e) {
    console.log("optionClicked");
    const i = e.originalTarget.id, o = e.originalTarget.value;
    switch (this._gekozenVoertuig = i, this._gekozenC02 = o, console.log(i), console.log(o), i) {
      case "Trein/Metro/Tram":
        this.visibility_hidden_zakelijkprive = "visibility-hidden", this.visibility_hidden_reisklasse = "";
        break;
      case "Scooter":
      case "Elektr Scooter (incl deel scooter)":
      case "Elektr Deelauto":
      case "Hybride eigen auto":
      case "Electr eigen auto":
      case "Diesel eigen auto":
      case "Benzine eigen auto":
      case "eigenAuto":
      case "deelAuto":
        console.log("auto gekozen"), this.visibility_hidden_zakelijkprive = "", this.visibility_hidden_reisklasse = "visibility-hidden";
        break;
      case "Lopen":
      case "Fiets":
      case "OV Fiets":
      case "bus":
        this.visibility_hidden_zakelijkprive = "visibility-hidden", this.visibility_hidden_reisklasse = "visibility-hidden";
        break;
      default:
        console.log("Kan de reis type vervoer niet herkennen");
        break;
    }
  }
  formElements() {
    return console.log("_divs"), console.log(document.getElementsByClassName("inputfield") ?? null), this.querySelector(".inputfield") ?? null;
  }
};
p([
  a()
], l.prototype, "currentPage", 2);
p([
  a()
], l.prototype, "eindTijdMin", 2);
p([
  a()
], l.prototype, "beginTijdMax", 2);
p([
  a()
], l.prototype, "_hidden", 2);
p([
  a()
], l.prototype, "span_message", 2);
p([
  a()
], l.prototype, "visibility_hidden_reisklasse", 2);
p([
  a()
], l.prototype, "visibility_hidden_zakelijkprive", 2);
p([
  a()
], l.prototype, "_vertrekTijd", 2);
p([
  a()
], l.prototype, "_aankomstTijd", 2);
p([
  a()
], l.prototype, "_demoKM", 2);
p([
  a()
], l.prototype, "_demoKosten", 2);
p([
  a()
], l.prototype, "_demoVertrekLocatie", 2);
p([
  a()
], l.prototype, "_demoAankomstLocatie", 2);
p([
  a()
], l.prototype, "inputfield", 2);
p([
  a()
], l.prototype, "_vervoerMiddelDummyData", 2);
p([
  a()
], l.prototype, "_gekozenC02", 2);
p([
  a()
], l.prototype, "_gekozenVoertuig", 2);
l = p([
  f("invoeren-reizen")
], l);
var je = Object.defineProperty, Te = Object.getOwnPropertyDescriptor, c = (r, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Te(e, i) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && je(e, i, t), t;
};
let d = class extends _ {
  constructor() {
    super(), this.currentPage = "invoeren-reizen", this.eindTijdMin = "", this.beginTijdMax = "", this._hidden = "true", this.span_message = "", this.visibility_hidden_reisklasse = "visibility-hidden", this.visibility_hidden_zakelijkprive = "visibility-hidden", this._vertrekTijd = "", this._aankomstTijd = "", this._demoKM = "11", this._demoKosten = "111,11", this._demoVertrekLocatie = "Amsterdam", this._demoAankomstLocatie = "Utrecht", this.inputfield = "inputfield", this._vervoerMiddelDummyData = [];
    let r = new Date();
    r.setMinutes(r.getMinutes() - r.getTimezoneOffset()), r.setMilliseconds(0), r.setSeconds(0), this._vertrekTijd = r.toISOString().slice(0, -1);
    let e = new Date();
    e.setMinutes(r.getMinutes() - r.getTimezoneOffset() + 60), e.setMilliseconds(0), e.setSeconds(0), this._aankomstTijd = e.toISOString().slice(0, -1), this.eindTijdMin = this._vertrekTijd, this.beginTijdMax = this._aankomstTijd + 60;
  }
  connectedCallback() {
    super.connectedCallback(), fetch("/vervoermiddel-CO2.json").then((r) => r.json()).then((r) => {
      this._vervoerMiddelDummyData = Array.from(r), console.log(this._vervoerMiddelDummyData);
    });
  }
  static get styles() {
    return y`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }
      .full {
        width: 100%;
        height: 100%;
        overflow: auto;
      }

      H1 {
        padding-top: 1em;
        font-size: 2em;
        padding-bottom: 0.5em;
      }
      header p {
        font-size: 1em;
      }

      table {
        padding: 1em;
        background: var(--kpn-blauw);
      }
      label {
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
        background-color: var(--kpn-groen);
      }

      .inputfield {
        width: 100%;
        padding: 0.8em 0.4px;
        /*margin: 0.1em;*/
        border: none;
        border-radius: 4px;
        background-color: var(--kpn-blauw);
        vertical-align: middle;
        text-indent: 0.7em;
      }

      /*Buttons: */
      input[type='button'],
      input[type='submit'],
      input[type='reset'] {
        width: 33%;
        background-color: var(--kpn-zwart);
        border: none;
        color: var(--kpn-wit);
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
      #feedbackSpan {
        background-color: var(--kpn-blauw);
        place-items: center;
        text-align: center;
      }
    `;
  }
  render() {
    return g`
            <header>
                <H1>Welkom,</H1>
                <br>
                <p>vul hieronder zo nauwkeurig mogelijk uw reis in:</p>
            </header>
            <body>

            <main>
                <form class="formulierReizen" id="formulierReizen">
                    <hr/>
                    <ol>
                        <div id="typeVervoerDiv2">
                            <li>
                                <label for="vervoerstype">typeVervoer:</label>
                                <select id="vervoerstype" class="${this.inputfield}" required focus>
                                    ${this._vervoerMiddelDummyData.map(
      ({ naam: r, uitstoot: e }) => g`
                                        <option
                                          disabled
                                          hidden="${this._hidden}"
                                          selected
                                          value="0"
                                        >
                                          "kies hier uw vervoerstype!"
                                        </option>
                                        <option
                                          @click="${this.optionClicked}"
                                          id=${r}
                                          value=${e}
                                        >
                                          ${r}
                                        </option>
                                      `
    )}
                                </select>
                                <div id="vertrekLocatieDiv">
                            <li class="alleenzakelijk" required>
                                <label for="vertrekLocatie">Vertrek locatie:</label>
                                <input class="${this.inputfield}" id="vertrekLocatie" name="vertrekLocatie"
                                       placeholder="Vertrek locatie" value=${this._demoVertrekLocatie}/>
                            </li>
                        </div>
                        <div id="aankomstLocatieDiv">
                            <li class="alleenzakelijk" required>
                                <label for="aankomstLocatie">Aankomst locatie:</label>
                                <input class="${this.inputfield}" id="aankomstLocatie" name="aankomstLocatie"
                                       placeholder="Aankomst locatie" value=${this._demoAankomstLocatie}/>
                            </li>
                        </div>
                        <div id="beginTijdDiv">
                            <li>
                                <label for="beginTijd">Begin tijd:</label>
                                <input @input=inputCallback class="${this.inputfield}" id="beginTijd" name="beginTijd"
                                       required
                                       value="${this._vertrekTijd}"
                                       max="${this.beginTijdMax}"
                                       type="datetime-local"
                                />
                            </li>
                        </div>
                        <div id="eindTijdDiv">
                            <li>
                                <label for="eindTijd">Eind tijd:</label>
                                <input class="${this.inputfield}" id="eindTijd" required value="${this._aankomstTijd}"
                                       min="${this.eindTijdMin}"
                                       type="datetime-local"/>
                            </li>
                        </div>
                        <div id="kmDiv">
                            <li required>
                                <label for="km" value="10">km:</label>
                                <input class="${this.inputfield}" id="km" name="km" placeholder="Gereisde km" required
                                       type="text"
                                       value="${this._demoKM}"/>
                            </li>
                        </div>
                        <div id="kostenDiv">
                            <li class="alleenzakelijk" required>
                                <label for="kosten">kosten:</label>
                                <input class="${this.inputfield}" id="kosten" name="kosten"
                                       placeholder="Kosten in euro's"
                                       value="${this._demoKosten}"/>
                            </li>
                        </div>
                        <div id="projectDiv">
                            <li class="alleenzakelijk" required>
                                <label for="project">Project:</label>
                                <select class="${this.inputfield}" id="project" name="project">
                                    <option disabled hidden selected value="0">Kies hier het project
                                        waar u
                                        voor hebt gereisd.
                                    </option>
                                    <option value="KPN-glasvezel-aanleg">KPN-glasvezel-aanleg</option>
                                    <option value="KPN-modem-installatie">KPN-modem-installatie</option>
                                    <option value="KPN-modem-reparatie">KPN-modem-reparatie</option>
                                    <option value="Prive">Prive</option>
                                </select>
                            </li>
                        </div>
                    </ol>
                    <div id="reisKlasseKeuzeMenu" class="${this.visibility_hidden_reisklasse}">
                        <fieldset>
                            <ol>
                                <legend>Reisklasse keuze:</legend>
                                <li>
                                    <label for="eersteKlas" style="float:left" hidden>Eerste klas</label>
                                    <input id="eersteKlas" name="klasse"
                                           type="radio" value="true"/> Eerste klas
                                </li>
                                <li>
                                    <label for="tweedeKlas" style="float:left" hidden>Tweede klas</label>
                                    <input id="tweedeKlas" name="klasse"
                                           type="radio" value="true"/> Tweede klas
                                </li>
                                <li>
                                    <label for="highspeed" style="float:left" hidden>NS-Highspeed</label>
                                    <input id="highspeed" name="klasse"
                                           type="radio" value="true"/> NS-Highspeed
                                </li>
                            </ol>
                        </fieldset>
                    </div>
                    <div id="priveZakelijkKeuzeMenu" class="${this.visibility_hidden_zakelijkprive}">
                        <fieldset>
                            <ul>
                                <legend>Prive of zakelijke reis:</legend>
                                <li>
                                    <label for="zakelijk" style="float:left" hidden>Zakelijk</label>
                                    <input id="zakelijk" name="zakelijk-prive"
                                           type="radio" value="true"
                                           @click=""
                                    /> Zakelijk
                                </li>
                                <li>
                                    <label for="prive" style="float:left" hidden></label>
                                    <input id="prive" name="zakelijk-prive"
                                           type="radio" value="true"/> Prive
                                </li>
                            </ul>
                        </fieldset>
                    </div>
                    <div id="buttonsUnderFormDiv">
                        <label for="verzendReis" hidden">Verzend</label>
                        <input class="verzendReis" id="verzendReis" type="submit" value="verzendReis">

                        <label for="zenden" hidden">Zenden(custom)</label>
                        <button id="zenden" @click=${this.formElements}>Zenden(custom)</button>

                        <label for="resetButton">Herlaad en leeg het formulier.</label>
                        <input id="resetButton" type="reset" value="Reset velden">
                        <br>
                        <label for="herhalendeReisButton">Sla op als herhalende reis.</label>
                        <input id="herhalendeReisButton" type="checkbox" value="Reset velden" disabled> Herhalende
                        reis. [under-construction]
                    </div>
                </form>
                <div id="feedbackSpan">
                    ${this.span_message}
                    <br>
                    U heeft gekozen voor voertuig:
                    ${this._gekozenVoertuig}
                    <br>
                    met gemiddelde uitstoot:
                    ${this._gekozenC02}
                    C02/km
                </div>
            </main>
            </body>
        `;
  }
  optionClicked(r) {
    console.log("optionClicked");
    const e = r.originalTarget.id, i = r.originalTarget.value;
    switch (this._gekozenVoertuig = e, this._gekozenC02 = i, console.log(e), console.log(i), e) {
      case "Trein/Metro/Tram":
        this.visibility_hidden_zakelijkprive = "visibility-hidden", this.visibility_hidden_reisklasse = "";
        break;
      case "Scooter":
      case "Elektr Scooter (incl deel scooter)":
      case "Elektr Deelauto":
      case "Hybride eigen auto":
      case "Electr eigen auto":
      case "Diesel eigen auto":
      case "Benzine eigen auto":
      case "eigenAuto":
      case "deelAuto":
        console.log("auto gekozen"), this.visibility_hidden_zakelijkprive = "", this.visibility_hidden_reisklasse = "visibility-hidden";
        break;
      case "Lopen":
      case "Fiets":
      case "OV Fiets":
      case "bus":
        this.visibility_hidden_zakelijkprive = "visibility-hidden", this.visibility_hidden_reisklasse = "visibility-hidden";
        break;
      default:
        console.log("Kan de reis type vervoer niet herkennen");
        break;
    }
  }
  formElements() {
    return console.log("_divs"), console.log(document.getElementsByClassName("inputfield") ?? null), this.querySelector(".inputfield") ?? null;
  }
};
c([
  a()
], d.prototype, "currentPage", 2);
c([
  a()
], d.prototype, "eindTijdMin", 2);
c([
  a()
], d.prototype, "beginTijdMax", 2);
c([
  a()
], d.prototype, "_hidden", 2);
c([
  a()
], d.prototype, "span_message", 2);
c([
  a()
], d.prototype, "visibility_hidden_reisklasse", 2);
c([
  a()
], d.prototype, "visibility_hidden_zakelijkprive", 2);
c([
  a()
], d.prototype, "_vertrekTijd", 2);
c([
  a()
], d.prototype, "_aankomstTijd", 2);
c([
  a()
], d.prototype, "_demoKM", 2);
c([
  a()
], d.prototype, "_demoKosten", 2);
c([
  a()
], d.prototype, "_demoVertrekLocatie", 2);
c([
  a()
], d.prototype, "_demoAankomstLocatie", 2);
c([
  a()
], d.prototype, "inputfield", 2);
c([
  a()
], d.prototype, "_vervoerMiddelDummyData", 2);
c([
  a()
], d.prototype, "_gekozenC02", 2);
c([
  a()
], d.prototype, "_gekozenVoertuig", 2);
d = c([
  f("invoeren-reizen-wijzigen")
], d);
var Pe = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, X = (r, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? xe(e, i) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && Pe(e, i, t), t;
};
let H = class extends _ {
  constructor() {
    super();
  }
  static get styles() {
    return y`
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
    return g`
      <body>
        <div id="page-container">
          <main>
            <div id="content-wrap">
              <form id="login_account">
                <ul>
                  <li>
                    <label for="email">Email:</label>
                    <input
                      autocomplete="email"
                      class="inputfield"
                      id="email"
                      name="email"
                      required
                      type="email"
                      width="50%"
                    /><br />
                  </li>
                  <li>
                    <label for="password">Wachtwoord:</label>
                    <input
                      autocomplete="password"
                      class="inputfield"
                      id="password"
                      name="password"
                      required
                      type="password"
                    /><br /><br />
                  </li>
                  <li>
                    <input
                      id="login()_button"
                      @click=${this._login}
                      type="button"
                      value="login()_button"
                    />
                  </li>
                </ul>
              </form>
              <span id="postresponse"></span>

              <br /><br />
              <div @click=${this._clickMenu} id="nope">
                <a class="nav-button" href="#" id="password-reset"
                  >Wachtwoord vergeten</a
                >
                ||
                <a class="nav-button" href="#" id="new-account"
                  >Nieuw account creëren</a
                >
              </div>
            </div>
          </main>
        </div>
      </body>
    `;
  }
  _login() {
    console.log("login.login() neeeeds work");
  }
  _clickMenu(e) {
    const i = e.target.id;
    console.log("id= " + i), this.currentPage = i, this.currentPage = i, console.log("currentPage now: " + this.currentPage), this.dispatchEvent(new Event("page-chosen"));
  }
};
X([
  a()
], H.prototype, "currentPage", 2);
H = X([
  f("login-element")
], H);
var De = Object.defineProperty, Ee = Object.getOwnPropertyDescriptor, ee = (r, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Ee(e, i) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && De(e, i, t), t;
};
let R = class extends _ {
  constructor() {
    super(), this.currentPage = "Reis Registreren";
  }
  static get styles() {
    return y`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        }
        .full { 
        width: 100%; 
        height: 100%; 
        overflow: auto
        }
        
        H1 {
        padding-top: 1em;
        font-size: 2em;
        padding-bottom: 0.5em;
        }
        header p{
          font-size: 1em;
        }
        
        .tablecontainer {
          height: 60vh;
          overflow: auto
        }
        table {
        background: var(--kpn-blauw);
        max-height: 100%;
        padding: 1em;
        }
          th {
          padding: .6em;
          border-bottom: 1px dotted #ddd;
          border-collapse: collapse;
        }
        tr:hover {background-color: none;}


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
        
        .inputfield {
            width: 100%;
            padding: 0.8em 0.4px;
            /*margin: 0.1em;*/
            border: none;
            border-radius: 4px;
            background-color: var(--kpn-blauw);
            vertical-align: middle;
            text-indent: 0.7em;
        }
        
        /*Buttons: */
        input[type=button], input[type=submit], input[type=reset] {
            width: 33%;
            background-color: var(--kpn-wit);
            border: none;
            color: var(--kpn-wit);
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
        
    @media (max-width: 858px) {
    .hiddensmolscreen {
      display: none;
    }
    `;
  }
  render() {
    return g`
            <header>
            <h1 class="header">Account info</h1>
                <p>Breng hieronder wijzigingen in uw gegevens.</p>

            </header>

        <body>

        <form id="postaccount">
            <div class="tablecontainer">

            <table style="width:100%">
            <tr>
                <td></td>
            <td>Huidige accountinfo:</td>
        <td></td>
        </tr>
        <tr>
        <td><label for="naam">Naam:</label></td>
        <td><input class="inputfield" id="naam" name="naam" placeholder="naam" type="text" /></td>
            <td></td>
            </tr>
            <!-- <tr>
            <td><label for="achternaam">Achternaam:</label></td>
        <td><input class="inputfield" id="achternaam" name="achternaam"
        type="text" style="width:100%"/><br/></td>
            <td><br/></td>
            </tr> -->
            <tr>
            <td><label for="email">E-mail adres:</label></td>
        <td><input class="inputfield" id="email" name="email" placeholder="email" type="text" style="width:100%" /></td>
            <td></td>
            </tr>
            </table>
            </div>
            <!-- <input id="send_json" onclick="sendJsonData()" type="button" value="send json"/>
          <input id="send_formdata" onclick="sendFormData()" type="button" value="send formdata"/> -->
            <input id="update_account_info" onclick="wijzigAccount()" type="button" value="Update Info" />
        <span id="feedbackspan"></span>
        </form>
        <hr />
        <br />
        <a href="../reset-password/index.html">
            <button>Wachtwoord resetten</button>
        </a>

        </div>
        </main>
        <footer id="footer">
            </footer>
            </div>
            </body>
        `;
  }
  _login() {
    console.log("login.login()"), this.currentPage = "Reis Registreren", this.dispatchEvent(new Event("page-chosen"));
  }
};
ee([
  a()
], R.prototype, "currentPage", 2);
R = ee([
  f("account-element")
], R);
var Ce = Object.defineProperty, Se = Object.getOwnPropertyDescriptor, A = (r, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Se(e, i) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && Ce(e, i, t), t;
};
let T = class extends _ {
  constructor() {
    super(), this._hiddenElement = "hidden";
  }
  static get styles() {
    return y`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }

      .hidden {
        display: none;
        pointer-events: none;
        color: lightgray;
        foreground-color: var(--kpn-grijs);
        background-color: var(--kpn-grijs);
        required: invalid;
      }
      button {
        width: 66%;
        height: 2em;
      }
    `;
  }
  render() {
    return g`
      <body>
        <main>
          <label hidden for="support"></label>
          <button id="support" @click=${this._clickForSupport}>
            Click here for support!
          </button>
          <br />
          <div class=${this._hiddenElement}>
            <img src="/Have-you-tried-turning-it-off-and-on-again.jpg" alt="Hello IT... Have you tried turning it off and on again?" />
            <br />
            <br />
            <button>if so, call us on 69-420-420-69</button>
          </div>
        </main>
      </body>
    `;
  }
  _clickForSupport() {
    console.log("Click for support"), console.log(this._hiddenElement), this._hiddenElement = this._hiddenElement == "hidden" ? "" : "hidden";
  }
};
A([
  a()
], T.prototype, "_hiddenElement", 2);
A([
  a()
], T.prototype, "currentPage", 2);
T = A([
  f("support-element")
], T);
var Oe = Object.defineProperty, He = Object.getOwnPropertyDescriptor, L = (r, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? He(e, i) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && Oe(e, i, t), t;
};
let P = class extends _ {
  constructor() {
    super(), this._hiddenElement = "hidden";
  }
  static get styles() {
    return y`
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
        foreground-color: var(--kpn-grijs);
        background-color: var(--kpn-grijs);
        required: invalid;
      }
      button {
        width: 66%;
        height: 2em;
      }
    `;
  }
  render() {
    return g`
      <h1 class="header">Account zoeken.</h1>

      <body>
        <div id="page-container">
          <div id="content-wrap">
            <main>
              <p>
                Voer je e-mailadres in om je account wachtwoord te resetten.
              </p>
              <form id="resetAccount">
                <label for="email">E-mail adres:</label
                ><input
                  class="inputfield"
                  id="email"
                  name="email"
                  type="email"
                /><br /><br />

                <a href="../login/index.html">
                  <button>Annuleren</button>
                </a>
                <!--  onclick="stuurWachtwoordReset()"  -->
                <input
                  id="stuurEmailMetWachtwoordReset"
                  onclick="stuurWachtwoordReset()"
                  type="button"
                  value="Stuur mij een resetmail."
                />
              </form>
              <span id="feedbackspan"></span>
              <hr />
              <br />
              <a href="../new-account/index.html">
                <button>Nieuw account creëren</button>
              </a>
            </main>
          </div>
          <footer id="footer"></footer>
        </div>
      </body>
    `;
  }
};
L([
  a()
], P.prototype, "_hiddenElement", 2);
L([
  a()
], P.prototype, "currentPage", 2);
P = L([
  f("reset-password")
], P);
var F = Object.freeze, te = Object.defineProperty, Re = Object.getOwnPropertyDescriptor, U = (r, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Re(e, i) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && te(e, i, t), t;
}, Me = (r, e) => F(te(r, "raw", { value: F(e || r.slice()) })), W;
let x = class extends _ {
  constructor() {
    super(), this._hiddenElement = "hidden";
  }
  static get styles() {
    return y`
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
        foreground-color: var(--kpn-grijs);
        background-color: var(--kpn-grijs);
        required: invalid;
      }
      button {
        width: 66%;
        height: 2em;
      }
    `;
  }
  render() {
    return g(W || (W = Me([`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />

          <title>New Account</title>
          <!-- must be uppermost imported script due to const localhost global usage -->

          <script src="https://smtpjs.com/v3/smtp.js"><\/script>
        </head>

        <h1 class="header">Maak een nieuw account.</h1>

        <body>
          <div id="page-container">
            <div id="content-wrap">
              <main>
                <form autocomplete="on" id="newaccount-form">
                  <ol>
                    <li>
                      <label for="naam">Naam:</label>
                      <input
                        autocomplete="naam"
                        class="inputfield"
                        id="naam"
                        name="naam"
                        placeholder="Naam"
                        type="text"
                      />
                    </li>
                    <li>
                      <div class="tooltip">
                        <!-- omschrijvende lebel van bijbehorende inputveld -->
                        <label for="email">E-mail adres:</label>
                        <input
                          autocomplete="email"
                          class="inputfield"
                          id="email"
                          name="email"
                          onclick="switchIncompleteNormaleStijl('email')"
                          placeholder="jouwnaam@voorbeeld.com"
                          required
                          type="email"
                        />

                        <!-- tooltip tekst -->
                        <span class="tooltiptext-mail"
                          >Voer een geldig email adres in, bijvoorbeeld
                          jouwnaam@voorbeeld.com.</span
                        >
                      </div>
                    </li>

                    <br />
                    <li>
                      <div class="tooltip">
                        <!-- omschrijvende lebel van bijbehorende inputveld -->
                        <label for="password">Nieuw wachtwoord:</label>
                        <input
                          autocomplete="password"
                          class="inputfield"
                          id="password"
                          name="password"
                          onclick="switchIncompleteNormaleStijl('password')"
                          placeholder="Nieuw wachtwoord"
                          required
                          type="password"
                        /><br />
                        <!-- tooltip tekst -->
                        <span class="tooltiptext-ww"
                          >Voer een combinatie in van ten minste zes cijfers,
                          letters en leestekens (zoals ! en &).</span
                        >
                      </div>
                    </li>
                  </ol>
                  <input
                    id="toggle"
                    onclick="wwZichtbaarToggle()"
                    type="checkbox"
                  />
                  <label for="toggle">Toon wachtwoord</label><br /><br />

                  <!--    <input id="send_json" onclick="formulierCheck()" type="button" value="Registreren&#45;&#45; incl wachtwoordchecksend json"/>-->
                  <!--        <input id="send_formdata" onclick="sendFormData()" type="button" value="Registreren&#45;&#45;send formdata" />-->
                  <span id="postresponse"></span>
                </form>
                <input
                  id="createAccButton"
                  onclick="formulierCheck()"
                  type="button"
                  value="Creëer een account"
                />
                <input
                  id="wachtwoordvergeten"
                  onclick="window.location.assign('../home/index.html')"
                  type="button"
                  value="Wachtwoord vergeten"
                />
              </main>
            </div>
            <footer id="footer"></footer>
          </div>
        </body>
      </html>
    `])));
  }
};
U([
  a()
], x.prototype, "_hiddenElement", 2);
U([
  a()
], x.prototype, "currentPage", 2);
x = U([
  f("new-account")
], x);
var G = Object.freeze, ie = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, K = (r, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Ae(e, i) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && ie(e, i, t), t;
}, Le = (r, e) => G(ie(r, "raw", { value: G(e || r.slice()) })), Z;
let D = class extends _ {
  constructor() {
    super(), this._hiddenElement = "hidden";
  }
  static get styles() {
    return y`
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
        background-color: var(--kpn-grijs);
        required: invalid;
      }
      button {
        width: 66%;
        height: 2em;
      }
    `;
  }
  render() {
    return g(Z || (Z = Le([`
            <head>
                <meta charset="UTF-8">
                <title>README</title>
                <script
                        type="module"
                        src="/node_modules/zero-md"
                ><\/script>
            </head>
            <body>
            <main>
                <h1>README FILE</h1>
                <zero-md src="README.md"></zero-md>

            </main>

            </body>
            </html>
    `])));
  }
  _clickForSupport() {
    console.log("Click for support"), console.log(this._hiddenElement), this._hiddenElement = this._hiddenElement == "hidden" ? "" : "hidden";
  }
};
K([
  a()
], D.prototype, "_hiddenElement", 2);
K([
  a()
], D.prototype, "currentPage", 2);
D = K([
  f("readme-element")
], D);
var Ue = Object.defineProperty, Ke = Object.getOwnPropertyDescriptor, v = (r, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Ke(e, i) : e, n = r.length - 1, s; n >= 0; n--)
    (s = r[n]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && Ue(e, i, t), t;
};
let u = class extends re {
  constructor() {
    super(), this._homePageTemplateHidden = "", this._reisInvoerenTemplateHidden = "hidden", this._reisGeschiedenisTemplateHidden = "hidden", this._loginTemplateHidden = "hidden", this._logoutTemplateHidden = "hidden", this._accountInfoTemplateHidden = "hidden", this._overzichtTemplateHidden = "hidden", this._thermometerTemplateHidden = "hidden", this._supportTemplateHidden = "hidden", this._passwordResetTemplateHidden = "hidden", this._newAccountTemplateHidden = "hidden", this._readmeTemplateHidden = "hidden", this._reisWijzigenTemplateHidden = "hidden";
  }
  _onClick() {
    console.log("clicked event listener");
  }
  static get properties() {
    return {
      _currentPage: { type: String }
    };
  }
  static get styles() {
    return ne`
      :host {
        max-width: 100vw;
        margin: 0 auto;
        padding: 2rem;
      }
      
      body {
        padding: 10em;
      }

      #page-container {
        min-height: 100%;
        padding: 2em;        
      }

      footer-menu {
        width: 100vw;
        position: absolute;
        bottom: 0;
        height: 2.5rem; /* Footer height */
      }

      .hidden {
        display: none;
        pointer-events: none;
        color: lightgrey;
        foreground-color: grey;
        background-color: grey;
        required: invalid;
      }
      
    `;
  }
  render() {
    return b`
            <nav-menu @page-chosen=${this._onCurrentPageChanged}></nav-menu>
            ${this.headerTemplate()}
            <body>
            <div id="page-container">
                    <div class=${this._homePageTemplateHidden}>${this._homePageTemplate()}</div>
                    <div class=${this._reisInvoerenTemplateHidden}>${this._reisInvoerenTemplate()}</div>
                    <div class=${this._reisWijzigenTemplateHidden}>${this._reisWijzigenTemplate()}</div>
                    <div class=${this._reisGeschiedenisTemplateHidden}>${this._overzichtTemplate()}</div>
                    <div class=${this._loginTemplateHidden}>${this._loginTemplate()}</div>
                    <div class=${this._logoutTemplateHidden}>${this._loginTemplate()}</div>
                    <div class=${this._supportTemplateHidden}>${this._supportTemplate()}</div>
                    <div class=${this._thermometerTemplateHidden}>${this._thermometerTemplate()}</div>
                    <div class=${this._accountInfoTemplateHidden}>${this._accountInfoTemplate()}</div>
                    <div class=${this._passwordResetTemplateHidden}>${this._resetPasswordTemplate()}</div>
                    <div class=${this._readmeTemplateHidden}>${this._readmeTemplate()}</div>
                    <div class=${this._newAccountTemplateHidden}>${this._newAccountTemplate()}</div
            </div>
            </body>
                <footer-menu @page-chosen=${this._onCurrentPageChanged}></footer-menu>
        `;
  }
  _onCurrentPageChanged(r) {
    console.log("_onCurrentPageChanged()");
    const e = r.target;
    switch (this._currentPage = e.currentPage, this._currentPage) {
      case "home-page": {
        this.hideRest(), console.log("home case"), this._homePageTemplateHidden = "";
        break;
      }
      case "Reis Registreren": {
        this.hideRest(), console.log("reis registeren case"), this._reisInvoerenTemplateHidden = "";
        break;
      }
      case "Reisgeschiedenis": {
        this.hideRest(), console.log("reis registeren case"), this._reisGeschiedenisTemplateHidden = "";
        break;
      }
      case "Account": {
        this.hideRest(), console.log("Account"), this._accountInfoTemplateHidden = "";
        break;
      }
      case "Support": {
        this.hideRest(), console.log("Support"), this._supportTemplateHidden = "";
        break;
      }
      case "Logout": {
        this.hideRest(), console.log("Logout needs work in controller-template-REDUNDANT-due-to-VAADIN.ts"), this._logoutTemplateHidden = "";
        break;
      }
      case "Login": {
        this.hideRest(), console.log("Login"), this._loginTemplateHidden = "";
        break;
      }
      case "password-reset": {
        this.hideRest(), console.log("password-reset"), this._passwordResetTemplateHidden = "";
        break;
      }
      case "new-account": {
        this.hideRest(), console.log("new-account"), this._newAccountTemplateHidden = "";
        break;
      }
      case "Readme": {
        this.hideRest(), console.log("new-account"), this._readmeTemplateHidden = "";
        break;
      }
      case "nope":
        console.log("nope");
        break;
    }
  }
  hideRest() {
    this._homePageTemplateHidden = "hidden", this._reisInvoerenTemplateHidden = "hidden", this._reisGeschiedenisTemplateHidden = "hidden", this._loginTemplateHidden = "hidden", this._logoutTemplateHidden = "hidden", this._accountInfoTemplateHidden = "hidden", this._overzichtTemplateHidden = "hidden", this._thermometerTemplateHidden = "hidden", this._supportTemplateHidden = "hidden", this._passwordResetTemplateHidden = "hidden", this._newAccountTemplateHidden = "hidden", this._readmeTemplateHidden = "hidden", this._reisWijzigenTemplateHidden = "hidden";
  }
  _homePageTemplate() {
    return b` <home-page></home-page>`;
  }
  headerTemplate() {
    return b` <header>
      <title>KPN-222</title>
      <h1>${this._currentPage}</h1>
    </header>`;
  }
  _overzichtTemplate() {
    return b` <overzicht-reizen></overzicht-reizen>`;
  }
  _reisInvoerenTemplate() {
    return b` <invoeren-reizen id="invoeren-reizen"></invoeren-reizen>`;
  }
  _reisWijzigenTemplate() {
    return b` <invoeren-reizen-wijzigen id="invoeren-reizen"></invoeren-reizen-wijzigen>`;
  }
  _thermometerTemplate() {
    return b` <thermometer></thermometer>`;
  }
  _loginTemplate() {
    return b` <login-element
      @page-chosen=${this._onCurrentPageChanged}
    ></login-element>`;
  }
  _supportTemplate() {
    return b` <support-element></support-element>`;
  }
  _accountInfoTemplate() {
    return b` <account-element></account-element>`;
  }
  _newAccountTemplate() {
    return b` <new-account></new-account>`;
  }
  _resetPasswordTemplate() {
    return b` <reset-password></reset-password>`;
  }
  _readmeTemplate() {
    return b` <readme-element></readme-element>`;
  }
};
v([
  a()
], u.prototype, "_currentPage", 2);
v([
  a()
], u.prototype, "_homePageTemplateHidden", 2);
v([
  a()
], u.prototype, "_reisInvoerenTemplateHidden", 2);
v([
  a()
], u.prototype, "_reisGeschiedenisTemplateHidden", 2);
v([
  a()
], u.prototype, "_loginTemplateHidden", 2);
v([
  a()
], u.prototype, "_logoutTemplateHidden", 2);
v([
  a()
], u.prototype, "_accountInfoTemplateHidden", 2);
v([
  a()
], u.prototype, "_overzichtTemplateHidden", 2);
v([
  a()
], u.prototype, "_thermometerTemplateHidden", 2);
v([
  a()
], u.prototype, "_supportTemplateHidden", 2);
v([
  a()
], u.prototype, "_passwordResetTemplateHidden", 2);
v([
  a()
], u.prototype, "_newAccountTemplateHidden", 2);
v([
  a()
], u.prototype, "_readmeTemplateHidden", 2);
v([
  a()
], u.prototype, "_reisWijzigenTemplateHidden", 2);
v([
  de({ capture: !0 })
], u.prototype, "_onClick", 1);
u = v([
  f("compiled-templates")
], u);
