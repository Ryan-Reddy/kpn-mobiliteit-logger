import { LitElement as f, css as _, html as l } from "lit";
import { property as r, customElement as b, LitElement as U, css as I, html as B, eventOptions as F } from "lit-element";
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    i(e);
  new MutationObserver((e) => {
    for (const a of e)
      if (a.type === "childList")
        for (const s of a.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const a = {};
    return e.integrity && (a.integrity = e.integrity), e.referrerpolicy && (a.referrerPolicy = e.referrerpolicy), e.crossorigin === "use-credentials" ? a.credentials = "include" : e.crossorigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function i(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const a = n(e);
    fetch(e.href, a);
  }
})();
var W = Object.defineProperty, G = Object.getOwnPropertyDescriptor, A = (o, t, n, i) => {
  for (var e = i > 1 ? void 0 : i ? G(t, n) : t, a = o.length - 1, s; a >= 0; a--)
    (s = o[a]) && (e = (i ? s(t, n, e) : s(e)) || e);
  return i && e && W(t, n, e), e;
};
let T = class extends f {
  constructor() {
    super();
  }
  static get styles() {
    return _`
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
    return l`
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
  _clickMenu(o) {
    console.log("_dispatchPageLink()");
    const t = o.target.id;
    console.log("id= " + t), this.currentPage !== t && (this.currentPage = t, this.dispatchEvent(new Event("page-chosen")));
  }
};
A([
  r()
], T.prototype, "currentPage", 2);
T = A([
  b("footer-menu")
], T);
var Z = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, J = (o, t, n, i) => {
  for (var e = i > 1 ? void 0 : i ? Y(t, n) : t, a = o.length - 1, s; a >= 0; a--)
    (s = o[a]) && (e = (i ? s(t, n, e) : s(e)) || e);
  return i && e && Z(t, n, e), e;
};
let E = class extends f {
  constructor() {
    super();
  }
  static get styles() {
    return _`
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
    return l`
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
E = J([
  b("home-page")
], E);
var Q = Object.defineProperty, X = Object.getOwnPropertyDescriptor, y = (o, t, n, i) => {
  for (var e = i > 1 ? void 0 : i ? X(t, n) : t, a = o.length - 1, s; a >= 0; a--)
    (s = o[a]) && (e = (i ? s(t, n, e) : s(e)) || e);
  return i && e && Q(t, n, e), e;
};
let k = class extends U {
  constructor() {
    super(), this.naamGebruiker = "Hans Fumphriehd", this.kpnLogo = "/public/branding/kpn-logo2-jpeg.jpg", this.currentPage = "", this._kpnHomePageUrl = "https://www.kpn.com/", this.onLoad();
  }
  static get styles() {
    return I`
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
    let o = document.createElement("script");
    return o.onload = this.onLoad.bind(this), o.src = "https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js", o;
  }
  onLoad() {
  }
  render() {
    return B`
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
  _clickMenu(o) {
    console.log("_dispatchPageLink()");
    const t = o.target.id;
    console.log("id= " + t), this.currentPage !== t && (this.currentPage = t, this.dispatchEvent(new Event("page-chosen")));
  }
  kpnHomePageUrl() {
    window.open(this._kpnHomePageUrl);
  }
};
y([
  r()
], k.prototype, "naamGebruiker", 2);
y([
  r()
], k.prototype, "kpnLogo", 2);
y([
  r()
], k.prototype, "currentPage", 2);
y([
  r()
], k.prototype, "_kpnHomePageUrl", 2);
k = y([
  b("nav-menu")
], k);
var ee = Object.defineProperty, te = Object.getOwnPropertyDescriptor, g = (o, t, n, i) => {
  for (var e = i > 1 ? void 0 : i ? te(t, n) : t, a = o.length - 1, s; a >= 0; a--)
    (s = o[a]) && (e = (i ? s(t, n, e) : s(e)) || e);
  return i && e && ee(t, n, e), e;
};
let u = class extends f {
  constructor() {
    super(), this.titel = "Overzicht Reizen", this._vervoerMiddelDummyData = [], this._reizenDummyData = [], this.headers = ["Project", "Type vervoer", "Begin", "Einde", "Km", "C02", "Kosten", "Wijzig"], this._feedback = "", this._sorted0 = !1, this._sorted1 = !1, this._sorted2 = !1, this._sorted3 = !1, this._sorted4 = !1, this._sorted5 = !1, this._sorted6 = !1, this._sorted7 = !1, this.sortsymboldown = "&#5167;", this.sortsymbolUP = "&#11016;", fetch("/vervoermiddel-CO2.json").then((o) => o.json()).then((o) => {
      this._vervoerMiddelDummyData = Array.from(o), console.log(this._vervoerMiddelDummyData);
    }), fetch("/dummydata-reizen.json").then((o) => o.json()).then((o) => {
      this._reizenDummyData = Array.from(o), console.log(this._reizenDummyData);
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  static get styles() {
    return _`
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
  update(o) {
    super.update(o), console.log("updated YAAY");
  }
  tableToCSV() {
  }
  render() {
    return l`
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
      begin: o,
      eind: t,
      km: n,
      kosten: i,
      project: e,
      type: a,
      uitstoot: s
    }) => l`
                      <tr>
                          <th class="hiddensmolscreen">${e}</th>
                          <th>${a}</th>
                          <th>${o}</th>
                          <th class="hiddensmolscreen">${t}</th>
                          <th id=${n > 300 ? "errorKM" : "allGood"}>${n}</th>
                          <th class="hiddensmolscreen">${s}</th>
                          <th class="hiddensmolscreen">${i}</th>
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
  wijzigDezeDataRij(o) {
    console.log("wijzigDezeDataRij"), console.log(o.target);
    const n = o.target.parentElement, i = n.parentElement;
    console.log(n.parentElement), console.log(i.previousSibling), this.dispatchEvent(new Event("page-chosen")), this.dispatchEvent(new Event("row-chosen"));
  }
  filterColumnOnTerm(o) {
    console.log("sortColumnSimple"), console.log(o);
  }
  headerClicked(o) {
    console.log("headerClicked"), console.log(this._reizenDummyData);
    const n = o.target.id;
    switch (console.log("id= " + n), this._feedback = "Table column to be sorted: " + n, n) {
      case this.headers[0]: {
        console.log(this._sorted0), this._sorted0 = this._sorted0 !== !0, this._reizenDummyData = this._sorted0 === !0 ? this._reizenDummyData.sort((i, e) => {
          const a = i.project.toUpperCase(), s = e.project.toUpperCase();
          return a > s ? -1 : a < s ? 1 : 0;
        }) : this._reizenDummyData.sort((i, e) => {
          const a = i.project.toUpperCase(), s = e.project.toUpperCase();
          return s > a ? -1 : s < a ? 1 : 0;
        });
        break;
      }
      case this.headers[1]: {
        console.log(this._sorted1), this._sorted1 = this._sorted1 !== !0, this._reizenDummyData = this._sorted1 === !0 ? this._reizenDummyData.sort((i, e) => {
          const a = i.type.toUpperCase(), s = e.type.toUpperCase();
          return a > s ? -1 : a < s ? 1 : 0;
        }) : this._reizenDummyData.sort((i, e) => {
          const a = i.type.toUpperCase(), s = e.type.toUpperCase();
          return s > a ? -1 : s < a ? 1 : 0;
        });
        break;
      }
      case this.headers[2]: {
        console.log(this._sorted2), this._sorted2 = this._sorted2 !== !0, this._reizenDummyData = this._sorted2 ? this._reizenDummyData.sort((i, e) => (i = new Date(i.begin), e = new Date(e.begin), i - e)) : this._reizenDummyData.sort((i, e) => (i = new Date(i.begin), e = new Date(e.begin), i - e));
        break;
      }
      case this.headers[3]: {
        console.log(this._sorted3), this._sorted3 = this._sorted3 !== !0, this._reizenDummyData = this._sorted3 ? this._reizenDummyData.sort((i, e) => (i = new Date(i.eind), e = new Date(e.eind), i - e)) : this._reizenDummyData.sort((i, e) => (i = new Date(i.eind), e = new Date(e.eind), i - e));
        break;
      }
      case this.headers[4]: {
        console.log(this._sorted4), this._sorted4 = this._sorted4 !== !0, this._reizenDummyData = this._sorted4 ? this._reizenDummyData.sort((i, e) => i.km - e.km) : this._reizenDummyData.sort((i, e) => e.km - i.km);
        break;
      }
      case this.headers[5]: {
        console.log(this._sorted5), this._sorted5 = this._sorted5 !== !0, this._reizenDummyData = this._sorted5 ? this._reizenDummyData.sort((i, e) => i.uitstoot - e.uitstoot) : this._reizenDummyData.sort((i, e) => e.uitstoot - i.uitstoot);
        break;
      }
      case this.headers[6]: {
        console.log(this._sorted6), this._sorted6 = this._sorted6 !== !0, this._reizenDummyData = this._sorted6 ? this._reizenDummyData.sort((i, e) => i.kosten - e.kosten) : this._reizenDummyData.sort((i, e) => e.kosten - i.kosten);
        break;
      }
      case this.headers[7]:
        alert("'no sorting needed'");
        break;
    }
  }
};
g([
  r()
], u.prototype, "titel", 2);
g([
  r()
], u.prototype, "_vervoerMiddelDummyData", 2);
g([
  r()
], u.prototype, "_reizenDummyData", 2);
g([
  r()
], u.prototype, "headers", 2);
g([
  r()
], u.prototype, "_feedback", 2);
g([
  r()
], u.prototype, "_sorted0", 2);
g([
  r()
], u.prototype, "_sorted1", 2);
g([
  r()
], u.prototype, "_sorted2", 2);
g([
  r()
], u.prototype, "_sorted3", 2);
g([
  r()
], u.prototype, "_sorted4", 2);
g([
  r()
], u.prototype, "_sorted5", 2);
g([
  r()
], u.prototype, "_sorted6", 2);
g([
  r()
], u.prototype, "_sorted7", 2);
g([
  r()
], u.prototype, "sortsymboldown", 2);
g([
  r()
], u.prototype, "sortsymbolUP", 2);
u = g([
  b("overzicht-reizen")
], u);
var ie = Object.defineProperty, oe = Object.getOwnPropertyDescriptor, c = (o, t, n, i) => {
  for (var e = i > 1 ? void 0 : i ? oe(t, n) : t, a = o.length - 1, s; a >= 0; a--)
    (s = o[a]) && (e = (i ? s(t, n, e) : s(e)) || e);
  return i && e && ie(t, n, e), e;
};
let d = class extends f {
  constructor() {
    super(), this.currentPage = "invoeren-reizen", this.eindTijdMin = "", this.beginTijdMax = "", this._hidden = "true", this.span_message = "", this.visibility_hidden_reisklasse = "visibility-hidden", this.visibility_hidden_zakelijkprive = "visibility-hidden", this._vertrekTijd = "", this._aankomstTijd = "", this._demoKM = "11", this._demoKosten = "111,11", this._demoVertrekLocatie = "Amsterdam", this._demoAankomstLocatie = "Utrecht", this.inputfield = "inputfield", this._vervoerMiddelDummyData = [];
    let t = new Date();
    t.setMinutes(t.getMinutes() - t.getTimezoneOffset()), t.setMilliseconds(0), t.setSeconds(0), this._vertrekTijd = t.toISOString().slice(0, -1);
    let n = new Date();
    n.setMinutes(t.getMinutes() - t.getTimezoneOffset() + 60), n.setMilliseconds(0), n.setSeconds(0), this._aankomstTijd = n.toISOString().slice(0, -1), this.eindTijdMin = this._vertrekTijd, this.beginTijdMax = this._aankomstTijd + 60;
  }
  connectedCallback() {
    super.connectedCallback(), fetch("/vervoermiddel-CO2.json").then((t) => t.json()).then((t) => {
      this._vervoerMiddelDummyData = Array.from(t), console.log(this._vervoerMiddelDummyData);
    });
  }
  static get styles() {
    return _`
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
    return l`
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
      ({ naam: t, uitstoot: n }) => l`
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
                                          id=${t}
                                          value=${n}
                                        >
                                          ${t}
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
  optionClicked(t) {
    console.log("optionClicked");
    const n = t.originalTarget.id, i = t.originalTarget.value;
    switch (this._gekozenVoertuig = n, this._gekozenC02 = i, console.log(n), console.log(i), n) {
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
  r()
], d.prototype, "currentPage", 2);
c([
  r()
], d.prototype, "eindTijdMin", 2);
c([
  r()
], d.prototype, "beginTijdMax", 2);
c([
  r()
], d.prototype, "_hidden", 2);
c([
  r()
], d.prototype, "span_message", 2);
c([
  r()
], d.prototype, "visibility_hidden_reisklasse", 2);
c([
  r()
], d.prototype, "visibility_hidden_zakelijkprive", 2);
c([
  r()
], d.prototype, "_vertrekTijd", 2);
c([
  r()
], d.prototype, "_aankomstTijd", 2);
c([
  r()
], d.prototype, "_demoKM", 2);
c([
  r()
], d.prototype, "_demoKosten", 2);
c([
  r()
], d.prototype, "_demoVertrekLocatie", 2);
c([
  r()
], d.prototype, "_demoAankomstLocatie", 2);
c([
  r()
], d.prototype, "inputfield", 2);
c([
  r()
], d.prototype, "_vervoerMiddelDummyData", 2);
c([
  r()
], d.prototype, "_gekozenC02", 2);
c([
  r()
], d.prototype, "_gekozenVoertuig", 2);
d = c([
  b("invoeren-reizen")
], d);
var ne = Object.defineProperty, re = Object.getOwnPropertyDescriptor, h = (o, t, n, i) => {
  for (var e = i > 1 ? void 0 : i ? re(t, n) : t, a = o.length - 1, s; a >= 0; a--)
    (s = o[a]) && (e = (i ? s(t, n, e) : s(e)) || e);
  return i && e && ne(t, n, e), e;
};
let p = class extends f {
  constructor() {
    super(), this.currentPage = "invoeren-reizen", this.eindTijdMin = "", this.beginTijdMax = "", this._hidden = "true", this.span_message = "", this.visibility_hidden_reisklasse = "visibility-hidden", this.visibility_hidden_zakelijkprive = "visibility-hidden", this._vertrekTijd = "", this._aankomstTijd = "", this._demoKM = "11", this._demoKosten = "111,11", this._demoVertrekLocatie = "Amsterdam", this._demoAankomstLocatie = "Utrecht", this.inputfield = "inputfield", this._vervoerMiddelDummyData = [];
    let o = new Date();
    o.setMinutes(o.getMinutes() - o.getTimezoneOffset()), o.setMilliseconds(0), o.setSeconds(0), this._vertrekTijd = o.toISOString().slice(0, -1);
    let t = new Date();
    t.setMinutes(o.getMinutes() - o.getTimezoneOffset() + 60), t.setMilliseconds(0), t.setSeconds(0), this._aankomstTijd = t.toISOString().slice(0, -1), this.eindTijdMin = this._vertrekTijd, this.beginTijdMax = this._aankomstTijd + 60;
  }
  connectedCallback() {
    super.connectedCallback(), fetch("/vervoermiddel-CO2.json").then((o) => o.json()).then((o) => {
      this._vervoerMiddelDummyData = Array.from(o), console.log(this._vervoerMiddelDummyData);
    });
  }
  static get styles() {
    return _`
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
    return l`
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
      ({ naam: o, uitstoot: t }) => l`
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
                                          id=${o}
                                          value=${t}
                                        >
                                          ${o}
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
  optionClicked(o) {
    console.log("optionClicked");
    const t = o.originalTarget.id, n = o.originalTarget.value;
    switch (this._gekozenVoertuig = t, this._gekozenC02 = n, console.log(t), console.log(n), t) {
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
  r()
], p.prototype, "currentPage", 2);
h([
  r()
], p.prototype, "eindTijdMin", 2);
h([
  r()
], p.prototype, "beginTijdMax", 2);
h([
  r()
], p.prototype, "_hidden", 2);
h([
  r()
], p.prototype, "span_message", 2);
h([
  r()
], p.prototype, "visibility_hidden_reisklasse", 2);
h([
  r()
], p.prototype, "visibility_hidden_zakelijkprive", 2);
h([
  r()
], p.prototype, "_vertrekTijd", 2);
h([
  r()
], p.prototype, "_aankomstTijd", 2);
h([
  r()
], p.prototype, "_demoKM", 2);
h([
  r()
], p.prototype, "_demoKosten", 2);
h([
  r()
], p.prototype, "_demoVertrekLocatie", 2);
h([
  r()
], p.prototype, "_demoAankomstLocatie", 2);
h([
  r()
], p.prototype, "inputfield", 2);
h([
  r()
], p.prototype, "_vervoerMiddelDummyData", 2);
h([
  r()
], p.prototype, "_gekozenC02", 2);
h([
  r()
], p.prototype, "_gekozenVoertuig", 2);
p = h([
  b("invoeren-reizen-wijzigen")
], p);
var ae = Object.defineProperty, se = Object.getOwnPropertyDescriptor, K = (o, t, n, i) => {
  for (var e = i > 1 ? void 0 : i ? se(t, n) : t, a = o.length - 1, s; a >= 0; a--)
    (s = o[a]) && (e = (i ? s(t, n, e) : s(e)) || e);
  return i && e && ae(t, n, e), e;
};
let x = class extends f {
  constructor() {
    super();
  }
  static get styles() {
    return _`
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
    return l`
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
  _clickMenu(t) {
    const n = t.target.id;
    console.log("id= " + n), this.currentPage = n, this.currentPage = n, console.log("currentPage now: " + this.currentPage), this.dispatchEvent(new Event("page-chosen"));
  }
};
K([
  r()
], x.prototype, "currentPage", 2);
x = K([
  b("login-element")
], x);
var le = Object.defineProperty, de = Object.getOwnPropertyDescriptor, N = (o, t, n, i) => {
  for (var e = i > 1 ? void 0 : i ? de(t, n) : t, a = o.length - 1, s; a >= 0; a--)
    (s = o[a]) && (e = (i ? s(t, n, e) : s(e)) || e);
  return i && e && le(t, n, e), e;
};
let D = class extends f {
  constructor() {
    super(), this.currentPage = "Reis Registreren";
  }
  static get styles() {
    return _`
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
    return l`
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
N([
  r()
], D.prototype, "currentPage", 2);
D = N([
  b("account-element")
], D);
var pe = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, P = (o, t, n, i) => {
  for (var e = i > 1 ? void 0 : i ? ce(t, n) : t, a = o.length - 1, s; a >= 0; a--)
    (s = o[a]) && (e = (i ? s(t, n, e) : s(e)) || e);
  return i && e && pe(t, n, e), e;
};
let w = class extends f {
  constructor() {
    super(), this._hiddenElement = "hidden";
  }
  static get styles() {
    return _`
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
    return l`
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
P([
  r()
], w.prototype, "_hiddenElement", 2);
P([
  r()
], w.prototype, "currentPage", 2);
w = P([
  b("support-element")
], w);
var he = Object.defineProperty, ue = Object.getOwnPropertyDescriptor, H = (o, t, n, i) => {
  for (var e = i > 1 ? void 0 : i ? ue(t, n) : t, a = o.length - 1, s; a >= 0; a--)
    (s = o[a]) && (e = (i ? s(t, n, e) : s(e)) || e);
  return i && e && he(t, n, e), e;
};
let z = class extends f {
  constructor() {
    super(), this._hiddenElement = "hidden";
  }
  static get styles() {
    return _`
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
    return l`
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
H([
  r()
], z.prototype, "_hiddenElement", 2);
H([
  r()
], z.prototype, "currentPage", 2);
z = H([
  b("reset-password")
], z);
var R = Object.freeze, q = Object.defineProperty, me = Object.getOwnPropertyDescriptor, C = (o, t, n, i) => {
  for (var e = i > 1 ? void 0 : i ? me(t, n) : t, a = o.length - 1, s; a >= 0; a--)
    (s = o[a]) && (e = (i ? s(t, n, e) : s(e)) || e);
  return i && e && q(t, n, e), e;
}, ge = (o, t) => R(q(o, "raw", { value: R(t || o.slice()) })), M;
let j = class extends f {
  constructor() {
    super(), this._hiddenElement = "hidden";
  }
  static get styles() {
    return _`
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
    return l(M || (M = ge([`
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
C([
  r()
], j.prototype, "_hiddenElement", 2);
C([
  r()
], j.prototype, "currentPage", 2);
j = C([
  b("new-account")
], j);
var L = Object.freeze, V = Object.defineProperty, ve = Object.getOwnPropertyDescriptor, O = (o, t, n, i) => {
  for (var e = i > 1 ? void 0 : i ? ve(t, n) : t, a = o.length - 1, s; a >= 0; a--)
    (s = o[a]) && (e = (i ? s(t, n, e) : s(e)) || e);
  return i && e && V(t, n, e), e;
}, be = (o, t) => L(V(o, "raw", { value: L(t || o.slice()) })), S;
let $ = class extends f {
  constructor() {
    super(), this._hiddenElement = "hidden";
  }
  static get styles() {
    return _`
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
    return l(S || (S = be([`
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
O([
  r()
], $.prototype, "_hiddenElement", 2);
O([
  r()
], $.prototype, "currentPage", 2);
$ = O([
  b("readme-element")
], $);
var fe = Object.defineProperty, _e = Object.getOwnPropertyDescriptor, v = (o, t, n, i) => {
  for (var e = i > 1 ? void 0 : i ? _e(t, n) : t, a = o.length - 1, s; a >= 0; a--)
    (s = o[a]) && (e = (i ? s(t, n, e) : s(e)) || e);
  return i && e && fe(t, n, e), e;
};
let m = class extends f {
  constructor() {
    super(), this._homePageTemplateHidden = "hidden", this._reisInvoerenTemplateHidden = "hidden", this._reisGeschiedenisTemplateHidden = "", this._loginTemplateHidden = "hidden", this._logoutTemplateHidden = "hidden", this._accountInfoTemplateHidden = "hidden", this._overzichtTemplateHidden = "hidden", this._thermometerTemplateHidden = "hidden", this._supportTemplateHidden = "hidden", this._passwordResetTemplateHidden = "hidden", this._newAccountTemplateHidden = "hidden", this._readmeTemplateHidden = "hidden", this._reisWijzigenTemplateHidden = "hidden";
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
    return _`
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
    return l`
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
  _onCurrentPageChanged(o) {
    console.log("_onCurrentPageChanged()");
    const t = o.target;
    switch (this._currentPage = t.currentPage, this._currentPage) {
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
    return l` <home-page></home-page>`;
  }
  headerTemplate() {
    return l` <header>
      <title>KPN-222</title>
      <h1>${this._currentPage}</h1>
    </header>`;
  }
  _overzichtTemplate() {
    return l` <overzicht-reizen></overzicht-reizen>`;
  }
  _reisInvoerenTemplate() {
    return l` <invoeren-reizen id="invoeren-reizen"></invoeren-reizen>`;
  }
  _reisWijzigenTemplate() {
    return l` <invoeren-reizen-wijzigen id="invoeren-reizen"></invoeren-reizen-wijzigen>`;
  }
  _thermometerTemplate() {
    return l` <thermometer></thermometer>`;
  }
  _loginTemplate() {
    return l` <login-element
      @page-chosen=${this._onCurrentPageChanged}
    ></login-element>`;
  }
  _supportTemplate() {
    return l` <support-element></support-element>`;
  }
  _accountInfoTemplate() {
    return l` <account-element></account-element>`;
  }
  _newAccountTemplate() {
    return l` <new-account></new-account>`;
  }
  _resetPasswordTemplate() {
    return l` <reset-password></reset-password>`;
  }
  _readmeTemplate() {
    return l` <readme-element></readme-element>`;
  }
};
v([
  r()
], m.prototype, "_currentPage", 2);
v([
  r()
], m.prototype, "_homePageTemplateHidden", 2);
v([
  r()
], m.prototype, "_reisInvoerenTemplateHidden", 2);
v([
  r()
], m.prototype, "_reisGeschiedenisTemplateHidden", 2);
v([
  r()
], m.prototype, "_loginTemplateHidden", 2);
v([
  r()
], m.prototype, "_logoutTemplateHidden", 2);
v([
  r()
], m.prototype, "_accountInfoTemplateHidden", 2);
v([
  r()
], m.prototype, "_overzichtTemplateHidden", 2);
v([
  r()
], m.prototype, "_thermometerTemplateHidden", 2);
v([
  r()
], m.prototype, "_supportTemplateHidden", 2);
v([
  r()
], m.prototype, "_passwordResetTemplateHidden", 2);
v([
  r()
], m.prototype, "_newAccountTemplateHidden", 2);
v([
  r()
], m.prototype, "_readmeTemplateHidden", 2);
v([
  r()
], m.prototype, "_reisWijzigenTemplateHidden", 2);
v([
  F({ capture: !0 })
], m.prototype, "_onClick", 1);
m = v([
  b("compiled-templates")
], m);
