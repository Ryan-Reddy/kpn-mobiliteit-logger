var ne = Object.defineProperty;
var ae = (n, e, i) => e in n ? ne(n, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[e] = i;
var a = (n, e, i) => (ae(n, typeof e != "symbol" ? e + "" : e, i), i);
import "lit-html";
import { LitElement as se, css as le, html as _ } from "lit-element/lit-element.js";
import "lit-html/is-server.js";
import { LitElement as k, css as w, html as f } from "lit";
import { property as l, customElement as y, LitElement as de, css as pe, html as ce, eventOptions as he } from "lit-element";
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
    o(t);
  new MutationObserver((t) => {
    for (const r of t)
      if (r.type === "childList")
        for (const s of r.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(t) {
    const r = {};
    return t.integrity && (r.integrity = t.integrity), t.referrerpolicy && (r.referrerPolicy = t.referrerpolicy), t.crossorigin === "use-credentials" ? r.credentials = "include" : t.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function o(t) {
    if (t.ep)
      return;
    t.ep = !0;
    const r = i(t);
    fetch(t.href, r);
  }
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P = window, L = P.ShadowRoot && (P.ShadyCSS === void 0 || P.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Q = Symbol(), V = /* @__PURE__ */ new WeakMap();
let ue = class {
  constructor(e, i, o) {
    if (this._$cssResult$ = !0, o !== Q)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = i;
  }
  get styleSheet() {
    let e = this.o;
    const i = this.t;
    if (L && e === void 0) {
      const o = i !== void 0 && i.length === 1;
      o && (e = V.get(i)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), o && V.set(i, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const me = (n) => new ue(typeof n == "string" ? n : n + "", void 0, Q), ge = (n, e) => {
  L ? n.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : e.forEach((i) => {
    const o = document.createElement("style"), t = P.litNonce;
    t !== void 0 && o.setAttribute("nonce", t), o.textContent = i.cssText, n.appendChild(o);
  });
}, B = L ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let i = "";
  for (const o of e.cssRules)
    i += o.cssText;
  return me(i);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var S;
const T = window, I = T.trustedTypes, ve = I ? I.emptyScript : "", F = T.reactiveElementPolyfillSupport, H = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? ve : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, e) {
  let i = n;
  switch (e) {
    case Boolean:
      i = n !== null;
      break;
    case Number:
      i = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(n);
      } catch {
        i = null;
      }
  }
  return i;
} }, X = (n, e) => e !== n && (e == e || n == n), O = { attribute: !0, type: String, converter: H, reflect: !1, hasChanged: X };
class $ extends HTMLElement {
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
  static createProperty(e, i = O) {
    if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(e, i), !i.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const o = typeof e == "symbol" ? Symbol() : "__" + e, t = this.getPropertyDescriptor(e, o, i);
      t !== void 0 && Object.defineProperty(this.prototype, e, t);
    }
  }
  static getPropertyDescriptor(e, i, o) {
    return { get() {
      return this[i];
    }, set(t) {
      const r = this[e];
      this[i] = t, this.requestUpdate(e, r, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || O;
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
        i.unshift(B(t));
    } else
      e !== void 0 && i.push(B(e));
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
    return ge(i, this.constructor.elementStyles), i;
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
  _$EO(e, i, o = O) {
    var t;
    const r = this.constructor._$Ep(e, o);
    if (r !== void 0 && o.reflect === !0) {
      const s = (((t = o.converter) === null || t === void 0 ? void 0 : t.toAttribute) !== void 0 ? o.converter : H).toAttribute(i, o.type);
      this._$El = e, s == null ? this.removeAttribute(r) : this.setAttribute(r, s), this._$El = null;
    }
  }
  _$AK(e, i) {
    var o;
    const t = this.constructor, r = t._$Ev.get(e);
    if (r !== void 0 && this._$El !== r) {
      const s = t.getPropertyOptions(r), b = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((o = s.converter) === null || o === void 0 ? void 0 : o.fromAttribute) !== void 0 ? s.converter : H;
      this._$El = r, this[r] = b.fromAttribute(i, s.type), this._$El = null;
    }
  }
  requestUpdate(e, i, o) {
    let t = !0;
    e !== void 0 && (((o = o || this.constructor.getPropertyOptions(e)).hasChanged || X)(this[e], i) ? (this._$AL.has(e) || this._$AL.set(e, i), o.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, o))) : t = !1), !this.isUpdatePending && t && (this._$E_ = this._$Ej());
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
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, r) => this[r] = t), this._$Ei = void 0);
    let i = !1;
    const o = this._$AL;
    try {
      i = this.shouldUpdate(o), i ? (this.willUpdate(o), (e = this._$ES) === null || e === void 0 || e.forEach((t) => {
        var r;
        return (r = t.hostUpdate) === null || r === void 0 ? void 0 : r.call(t);
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
$.finalized = !0, $.elementProperties = /* @__PURE__ */ new Map(), $.elementStyles = [], $.shadowRootOptions = { mode: "open" }, F == null || F({ ReactiveElement: $ }), ((S = T.reactiveElementVersions) !== null && S !== void 0 ? S : T.reactiveElementVersions = []).push("1.5.0");
var be = Object.defineProperty, fe = Object.getOwnPropertyDescriptor, ee = (n, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? fe(e, i) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && be(e, i, t), t;
};
let R = class extends k {
  constructor() {
    super();
    a(this, "currentPage");
  }
  static get styles() {
    return w`
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
    return f`
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
  _clickMenu(e) {
    console.log("_dispatchPageLink()");
    const i = e.target.id;
    console.log("id= " + i), this.currentPage !== i && (this.currentPage = i, this.dispatchEvent(new Event("page-chosen")));
  }
};
ee([
  l()
], R.prototype, "currentPage", 2);
R = ee([
  y("footer-menu")
], R);
var _e = Object.defineProperty, ye = Object.getOwnPropertyDescriptor, ke = (n, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? ye(e, i) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && _e(e, i, t), t;
};
let W = class extends k {
  constructor() {
    super();
  }
  static get styles() {
    return w`
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
    return f`
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
W = ke([
  y("home-page")
], W);
var we = Object.defineProperty, ze = Object.getOwnPropertyDescriptor, j = (n, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? ze(e, i) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && we(e, i, t), t;
};
let z = class extends de {
  constructor() {
    super();
    a(this, "naamGebruiker", "Hans Fumphriehd");
    a(this, "kpnLogo", "/public/branding/kpn-logo2-jpeg.jpg");
    a(this, "currentPage", "");
    a(this, "_kpnHomePageUrl", "https://www.kpn.com/");
    this.onLoad();
  }
  static get styles() {
    return pe`
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
    let e = document.createElement("script");
    return e.onload = this.onLoad.bind(this), e.src = "https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js", e;
  }
  onLoad() {
  }
  render() {
    return ce`
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
  _clickMenu(e) {
    console.log("_dispatchPageLink()");
    const i = e.target.id;
    console.log("id= " + i), this.currentPage !== i && (this.currentPage = i, this.dispatchEvent(new Event("page-chosen")));
  }
  kpnHomePageUrl() {
    window.open(this._kpnHomePageUrl);
  }
};
j([
  l()
], z.prototype, "naamGebruiker", 2);
j([
  l()
], z.prototype, "kpnLogo", 2);
j([
  l()
], z.prototype, "currentPage", 2);
j([
  l()
], z.prototype, "_kpnHomePageUrl", 2);
z = j([
  y("nav-menu")
], z);
var $e = Object.defineProperty, je = Object.getOwnPropertyDescriptor, g = (n, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? je(e, i) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && $e(e, i, t), t;
};
let u = class extends k {
  constructor() {
    super();
    a(this, "titel", "Overzicht Reizen");
    a(this, "_vervoerMiddelDummyData", []);
    a(this, "_reizenDummyData", []);
    a(this, "headers", ["Project", "Type vervoer", "Begin", "Einde", "Km", "C02", "Kosten", "Wijzig"]);
    a(this, "_feedback", "");
    a(this, "_sorted0", !1);
    a(this, "_sorted1", !1);
    a(this, "_sorted2", !1);
    a(this, "_sorted3", !1);
    a(this, "_sorted4", !1);
    a(this, "_sorted5", !1);
    a(this, "_sorted6", !1);
    a(this, "_sorted7", !1);
    a(this, "sortsymboldown", "&#5167;");
    a(this, "sortsymbolUP", "&#11016;");
    fetch("/vervoermiddel-CO2.json").then((e) => e.json()).then((e) => {
      this._vervoerMiddelDummyData = Array.from(e), console.log(this._vervoerMiddelDummyData);
    }), fetch("/dummydata-reizen.json").then((e) => e.json()).then((e) => {
      this._reizenDummyData = Array.from(e), console.log(this._reizenDummyData);
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  static get styles() {
    return w`
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
  update(e) {
    super.update(e), console.log("updated YAAY");
  }
  tableToCSV() {
  }
  render() {
    return f`
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
      begin: e,
      eind: i,
      km: o,
      kosten: t,
      project: r,
      type: s,
      uitstoot: b
    }) => f`
                      <tr>
                          <th class="hiddensmolscreen">${r}</th>
                          <th>${s}</th>
                          <th>${e}</th>
                          <th class="hiddensmolscreen">${i}</th>
                          <th id=${o > 300 ? "errorKM" : "allGood"}>${o}</th>
                          <th class="hiddensmolscreen">${b}</th>
                          <th class="hiddensmolscreen">${t}</th>
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
  wijzigDezeDataRij(e) {
    console.log("wijzigDezeDataRij"), console.log(e.target);
    const o = e.target.parentElement, t = o.parentElement;
    console.log(o.parentElement), console.log(t.previousSibling), this.dispatchEvent(new Event("page-chosen")), this.dispatchEvent(new Event("row-chosen"));
  }
  filterColumnOnTerm(e) {
    console.log("sortColumnSimple"), console.log(e);
  }
  headerClicked(e) {
    console.log("headerClicked"), console.log(this._reizenDummyData);
    const o = e.target.id;
    switch (console.log("id= " + o), this._feedback = "Table column to be sorted: " + o, o) {
      case this.headers[0]: {
        console.log(this._sorted0), this._sorted0 = this._sorted0 !== !0, this._reizenDummyData = this._sorted0 === !0 ? this._reizenDummyData.sort((t, r) => {
          const s = t.project.toUpperCase(), b = r.project.toUpperCase();
          return s > b ? -1 : s < b ? 1 : 0;
        }) : this._reizenDummyData.sort((t, r) => {
          const s = t.project.toUpperCase(), b = r.project.toUpperCase();
          return b > s ? -1 : b < s ? 1 : 0;
        });
        break;
      }
      case this.headers[1]: {
        console.log(this._sorted1), this._sorted1 = this._sorted1 !== !0, this._reizenDummyData = this._sorted1 === !0 ? this._reizenDummyData.sort((t, r) => {
          const s = t.type.toUpperCase(), b = r.type.toUpperCase();
          return s > b ? -1 : s < b ? 1 : 0;
        }) : this._reizenDummyData.sort((t, r) => {
          const s = t.type.toUpperCase(), b = r.type.toUpperCase();
          return b > s ? -1 : b < s ? 1 : 0;
        });
        break;
      }
      case this.headers[2]: {
        console.log(this._sorted2), this._sorted2 = this._sorted2 !== !0, this._reizenDummyData = this._sorted2 ? this._reizenDummyData.sort((t, r) => (t = new Date(t.begin), r = new Date(r.begin), t - r)) : this._reizenDummyData.sort((t, r) => (t = new Date(t.begin), r = new Date(r.begin), t - r));
        break;
      }
      case this.headers[3]: {
        console.log(this._sorted3), this._sorted3 = this._sorted3 !== !0, this._reizenDummyData = this._sorted3 ? this._reizenDummyData.sort((t, r) => (t = new Date(t.eind), r = new Date(r.eind), t - r)) : this._reizenDummyData.sort((t, r) => (t = new Date(t.eind), r = new Date(r.eind), t - r));
        break;
      }
      case this.headers[4]: {
        console.log(this._sorted4), this._sorted4 = this._sorted4 !== !0, this._reizenDummyData = this._sorted4 ? this._reizenDummyData.sort((t, r) => t.km - r.km) : this._reizenDummyData.sort((t, r) => r.km - t.km);
        break;
      }
      case this.headers[5]: {
        console.log(this._sorted5), this._sorted5 = this._sorted5 !== !0, this._reizenDummyData = this._sorted5 ? this._reizenDummyData.sort((t, r) => t.uitstoot - r.uitstoot) : this._reizenDummyData.sort((t, r) => r.uitstoot - t.uitstoot);
        break;
      }
      case this.headers[6]: {
        console.log(this._sorted6), this._sorted6 = this._sorted6 !== !0, this._reizenDummyData = this._sorted6 ? this._reizenDummyData.sort((t, r) => t.kosten - r.kosten) : this._reizenDummyData.sort((t, r) => r.kosten - t.kosten);
        break;
      }
      case this.headers[7]:
        alert("'no sorting needed'");
        break;
    }
  }
};
g([
  l()
], u.prototype, "titel", 2);
g([
  l()
], u.prototype, "_vervoerMiddelDummyData", 2);
g([
  l()
], u.prototype, "_reizenDummyData", 2);
g([
  l()
], u.prototype, "headers", 2);
g([
  l()
], u.prototype, "_feedback", 2);
g([
  l()
], u.prototype, "_sorted0", 2);
g([
  l()
], u.prototype, "_sorted1", 2);
g([
  l()
], u.prototype, "_sorted2", 2);
g([
  l()
], u.prototype, "_sorted3", 2);
g([
  l()
], u.prototype, "_sorted4", 2);
g([
  l()
], u.prototype, "_sorted5", 2);
g([
  l()
], u.prototype, "_sorted6", 2);
g([
  l()
], u.prototype, "_sorted7", 2);
g([
  l()
], u.prototype, "sortsymboldown", 2);
g([
  l()
], u.prototype, "sortsymbolUP", 2);
u = g([
  y("overzicht-reizen")
], u);
var Pe = Object.defineProperty, Te = Object.getOwnPropertyDescriptor, c = (n, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Te(e, i) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && Pe(e, i, t), t;
};
let d = class extends k {
  constructor() {
    super();
    a(this, "currentPage", "invoeren-reizen");
    a(this, "eindTijdMin", "");
    a(this, "beginTijdMax", "");
    a(this, "_hidden", "true");
    a(this, "span_message", "");
    a(this, "visibility_hidden_reisklasse", "visibility-hidden");
    a(this, "visibility_hidden_zakelijkprive", "visibility-hidden");
    a(this, "_vertrekTijd", "");
    a(this, "_aankomstTijd", "");
    a(this, "_demoKM", "11");
    a(this, "_demoKosten", "111,11");
    a(this, "_demoVertrekLocatie", "Amsterdam");
    a(this, "_demoAankomstLocatie", "Utrecht");
    a(this, "inputfield", "inputfield");
    a(this, "_vervoerMiddelDummyData", []);
    a(this, "_gekozenC02");
    a(this, "_gekozenVoertuig");
    let i = new Date();
    i.setMinutes(i.getMinutes() - i.getTimezoneOffset()), i.setMilliseconds(0), i.setSeconds(0), this._vertrekTijd = i.toISOString().slice(0, -1);
    let o = new Date();
    o.setMinutes(i.getMinutes() - i.getTimezoneOffset() + 60), o.setMilliseconds(0), o.setSeconds(0), this._aankomstTijd = o.toISOString().slice(0, -1), this.eindTijdMin = this._vertrekTijd, this.beginTijdMax = this._aankomstTijd + 60;
  }
  connectedCallback() {
    super.connectedCallback(), fetch("/vervoermiddel-CO2.json").then((i) => i.json()).then((i) => {
      this._vervoerMiddelDummyData = Array.from(i), console.log(this._vervoerMiddelDummyData);
    });
  }
  static get styles() {
    return w`
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
    return f`
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
      ({ naam: i, uitstoot: o }) => f`
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
                                          id=${i}
                                          value=${o}
                                        >
                                          ${i}
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
  optionClicked(i) {
    console.log("optionClicked");
    const o = i.originalTarget.id, t = i.originalTarget.value;
    switch (this._gekozenVoertuig = o, this._gekozenC02 = t, console.log(o), console.log(t), o) {
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
  l()
], d.prototype, "currentPage", 2);
c([
  l()
], d.prototype, "eindTijdMin", 2);
c([
  l()
], d.prototype, "beginTijdMax", 2);
c([
  l()
], d.prototype, "_hidden", 2);
c([
  l()
], d.prototype, "span_message", 2);
c([
  l()
], d.prototype, "visibility_hidden_reisklasse", 2);
c([
  l()
], d.prototype, "visibility_hidden_zakelijkprive", 2);
c([
  l()
], d.prototype, "_vertrekTijd", 2);
c([
  l()
], d.prototype, "_aankomstTijd", 2);
c([
  l()
], d.prototype, "_demoKM", 2);
c([
  l()
], d.prototype, "_demoKosten", 2);
c([
  l()
], d.prototype, "_demoVertrekLocatie", 2);
c([
  l()
], d.prototype, "_demoAankomstLocatie", 2);
c([
  l()
], d.prototype, "inputfield", 2);
c([
  l()
], d.prototype, "_vervoerMiddelDummyData", 2);
c([
  l()
], d.prototype, "_gekozenC02", 2);
c([
  l()
], d.prototype, "_gekozenVoertuig", 2);
d = c([
  y("invoeren-reizen")
], d);
var xe = Object.defineProperty, De = Object.getOwnPropertyDescriptor, h = (n, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? De(e, i) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && xe(e, i, t), t;
};
let p = class extends k {
  constructor() {
    super();
    a(this, "currentPage", "invoeren-reizen");
    a(this, "eindTijdMin", "");
    a(this, "beginTijdMax", "");
    a(this, "_hidden", "true");
    a(this, "span_message", "");
    a(this, "visibility_hidden_reisklasse", "visibility-hidden");
    a(this, "visibility_hidden_zakelijkprive", "visibility-hidden");
    a(this, "_vertrekTijd", "");
    a(this, "_aankomstTijd", "");
    a(this, "_demoKM", "11");
    a(this, "_demoKosten", "111,11");
    a(this, "_demoVertrekLocatie", "Amsterdam");
    a(this, "_demoAankomstLocatie", "Utrecht");
    a(this, "inputfield", "inputfield");
    a(this, "_vervoerMiddelDummyData", []);
    a(this, "_gekozenC02");
    a(this, "_gekozenVoertuig");
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
    return w`
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
    return f`
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
      ({ naam: e, uitstoot: i }) => f`
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
h([
  l()
], p.prototype, "currentPage", 2);
h([
  l()
], p.prototype, "eindTijdMin", 2);
h([
  l()
], p.prototype, "beginTijdMax", 2);
h([
  l()
], p.prototype, "_hidden", 2);
h([
  l()
], p.prototype, "span_message", 2);
h([
  l()
], p.prototype, "visibility_hidden_reisklasse", 2);
h([
  l()
], p.prototype, "visibility_hidden_zakelijkprive", 2);
h([
  l()
], p.prototype, "_vertrekTijd", 2);
h([
  l()
], p.prototype, "_aankomstTijd", 2);
h([
  l()
], p.prototype, "_demoKM", 2);
h([
  l()
], p.prototype, "_demoKosten", 2);
h([
  l()
], p.prototype, "_demoVertrekLocatie", 2);
h([
  l()
], p.prototype, "_demoAankomstLocatie", 2);
h([
  l()
], p.prototype, "inputfield", 2);
h([
  l()
], p.prototype, "_vervoerMiddelDummyData", 2);
h([
  l()
], p.prototype, "_gekozenC02", 2);
h([
  l()
], p.prototype, "_gekozenVoertuig", 2);
p = h([
  y("invoeren-reizen-wijzigen")
], p);
var Ee = Object.defineProperty, Ce = Object.getOwnPropertyDescriptor, te = (n, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Ce(e, i) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && Ee(e, i, t), t;
};
let M = class extends k {
  constructor() {
    super();
    a(this, "currentPage");
  }
  static get styles() {
    return w`
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
    return f`
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
  _clickMenu(i) {
    const o = i.target.id;
    console.log("id= " + o), this.currentPage = o, this.currentPage = o, console.log("currentPage now: " + this.currentPage), this.dispatchEvent(new Event("page-chosen"));
  }
};
te([
  l()
], M.prototype, "currentPage", 2);
M = te([
  y("login-element")
], M);
var Se = Object.defineProperty, Oe = Object.getOwnPropertyDescriptor, ie = (n, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Oe(e, i) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && Se(e, i, t), t;
};
let A = class extends k {
  constructor() {
    super();
    a(this, "currentPage", "Reis Registreren");
  }
  static get styles() {
    return w`
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
    return f`
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
ie([
  l()
], A.prototype, "currentPage", 2);
A = ie([
  y("account-element")
], A);
var He = Object.defineProperty, Re = Object.getOwnPropertyDescriptor, U = (n, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Re(e, i) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && He(e, i, t), t;
};
let x = class extends k {
  constructor() {
    super();
    a(this, "_hiddenElement", "hidden");
    a(this, "currentPage");
  }
  static get styles() {
    return w`
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
    return f`
      <body>
        <main>
          <button @click=${this._clickForSupport}>
            Click here for support!
          </button>
          <br />
          <div class=${this._hiddenElement}>
            <img src="/Have-you-tried-turning-it-off-and-on-again.jpg" />
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
U([
  l()
], x.prototype, "_hiddenElement", 2);
U([
  l()
], x.prototype, "currentPage", 2);
x = U([
  y("support-element")
], x);
var Me = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, K = (n, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Ae(e, i) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && Me(e, i, t), t;
};
let D = class extends k {
  constructor() {
    super();
    a(this, "_hiddenElement", "hidden");
    a(this, "currentPage");
  }
  static get styles() {
    return w`
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
    return f`
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
K([
  l()
], D.prototype, "_hiddenElement", 2);
K([
  l()
], D.prototype, "currentPage", 2);
D = K([
  y("reset-password")
], D);
var G = Object.freeze, oe = Object.defineProperty, Le = Object.getOwnPropertyDescriptor, N = (n, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Le(e, i) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && oe(e, i, t), t;
}, Ue = (n, e) => G(oe(n, "raw", { value: G(e || n.slice()) })), Z;
let E = class extends k {
  constructor() {
    super();
    a(this, "_hiddenElement", "hidden");
    a(this, "currentPage");
  }
  static get styles() {
    return w`
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
    return f(Z || (Z = Ue([`
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
N([
  l()
], E.prototype, "_hiddenElement", 2);
N([
  l()
], E.prototype, "currentPage", 2);
E = N([
  y("new-account")
], E);
var Y = Object.freeze, re = Object.defineProperty, Ke = Object.getOwnPropertyDescriptor, q = (n, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Ke(e, i) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && re(e, i, t), t;
}, Ne = (n, e) => Y(re(n, "raw", { value: Y(e || n.slice()) })), J;
let C = class extends k {
  constructor() {
    super();
    a(this, "_hiddenElement", "hidden");
    a(this, "currentPage");
  }
  static get styles() {
    return w`
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
    return f(J || (J = Ne([`
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
q([
  l()
], C.prototype, "_hiddenElement", 2);
q([
  l()
], C.prototype, "currentPage", 2);
C = q([
  y("readme-element")
], C);
var qe = Object.defineProperty, Ve = Object.getOwnPropertyDescriptor, v = (n, e, i, o) => {
  for (var t = o > 1 ? void 0 : o ? Ve(e, i) : e, r = n.length - 1, s; r >= 0; r--)
    (s = n[r]) && (t = (o ? s(e, i, t) : s(t)) || t);
  return o && t && qe(e, i, t), t;
};
let m = class extends se {
  constructor() {
    super();
    a(this, "_currentPage");
    a(this, "_homePageTemplateHidden", "hidden");
    a(this, "_reisInvoerenTemplateHidden", "hidden");
    a(this, "_reisGeschiedenisTemplateHidden", "");
    a(this, "_loginTemplateHidden", "hidden");
    a(this, "_logoutTemplateHidden", "hidden");
    a(this, "_accountInfoTemplateHidden", "hidden");
    a(this, "_overzichtTemplateHidden", "hidden");
    a(this, "_thermometerTemplateHidden", "hidden");
    a(this, "_supportTemplateHidden", "hidden");
    a(this, "_passwordResetTemplateHidden", "hidden");
    a(this, "_newAccountTemplateHidden", "hidden");
    a(this, "_readmeTemplateHidden", "hidden");
    a(this, "_reisWijzigenTemplateHidden", "hidden");
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
    return le`
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
    return _`
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
  _onCurrentPageChanged(e) {
    console.log("_onCurrentPageChanged()");
    const i = e.target;
    switch (this._currentPage = i.currentPage, this._currentPage) {
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
        this.hideRest(), console.log("Logout needs work in controller-template.ts"), this._logoutTemplateHidden = "";
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
    return _` <home-page></home-page>`;
  }
  headerTemplate() {
    return _` <header>
      <title>KPN-222</title>
      <h1>${this._currentPage}</h1>
    </header>`;
  }
  _overzichtTemplate() {
    return _` <overzicht-reizen></overzicht-reizen>`;
  }
  _reisInvoerenTemplate() {
    return _` <invoeren-reizen id="invoeren-reizen"></invoeren-reizen>`;
  }
  _reisWijzigenTemplate() {
    return _` <invoeren-reizen-wijzigen id="invoeren-reizen"></invoeren-reizen-wijzigen>`;
  }
  _thermometerTemplate() {
    return _` <thermometer></thermometer>`;
  }
  _loginTemplate() {
    return _` <login-element
      @page-chosen=${this._onCurrentPageChanged}
    ></login-element>`;
  }
  _supportTemplate() {
    return _` <support-element></support-element>`;
  }
  _accountInfoTemplate() {
    return _` <account-element></account-element>`;
  }
  _newAccountTemplate() {
    return _` <new-account></new-account>`;
  }
  _resetPasswordTemplate() {
    return _` <reset-password></reset-password>`;
  }
  _readmeTemplate() {
    return _` <readme-element></readme-element>`;
  }
};
v([
  l()
], m.prototype, "_currentPage", 2);
v([
  l()
], m.prototype, "_homePageTemplateHidden", 2);
v([
  l()
], m.prototype, "_reisInvoerenTemplateHidden", 2);
v([
  l()
], m.prototype, "_reisGeschiedenisTemplateHidden", 2);
v([
  l()
], m.prototype, "_loginTemplateHidden", 2);
v([
  l()
], m.prototype, "_logoutTemplateHidden", 2);
v([
  l()
], m.prototype, "_accountInfoTemplateHidden", 2);
v([
  l()
], m.prototype, "_overzichtTemplateHidden", 2);
v([
  l()
], m.prototype, "_thermometerTemplateHidden", 2);
v([
  l()
], m.prototype, "_supportTemplateHidden", 2);
v([
  l()
], m.prototype, "_passwordResetTemplateHidden", 2);
v([
  l()
], m.prototype, "_newAccountTemplateHidden", 2);
v([
  l()
], m.prototype, "_readmeTemplateHidden", 2);
v([
  l()
], m.prototype, "_reisWijzigenTemplateHidden", 2);
v([
  he({ capture: !0 })
], m.prototype, "_onClick", 1);
m = v([
  y("compiled-templates")
], m);
