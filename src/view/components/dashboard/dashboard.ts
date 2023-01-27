import {css, html, LitElement, PropertyValueMap, render} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {PreventAndRedirectCommands, PreventResult, RedirectResult, Router, RouterLocation} from "@vaadin/router";

import '@vaadin/grid';
import '@vaadin/grid/vaadin-grid-selection-column.js';

import './indicator';
import './chart';
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {fromFetch} from "rxjs/internal/observable/dom/fetch";


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('dashboard-element')
export class OverzichtReizen extends LitElement {
    @property() _currentPageTitle = 'Overzicht Reizen';
    @property() _vervoerMiddelDummyData = [];
    @property() _reizenDummyData = [];
    // @property() items: Person[] = [];
    @state() @property() data$: Observable<any> | undefined;
    // @state()
    @property() _unsavedData = false;
    @property() _totaleC02= 500;
    @property() _totaleKM= 34703;
    @property() _persoonlijkeKM=200;
    private _persoonlijkeC02= 20;

    constructor() {
        super();
        sessionStorage.setItem('currentpagetitle', this._currentPageTitle);
        // this.classList.add('basic-board');

        fetch('/database/vervoermiddel-CO2.json')
            .then((response) => response.json())
            .then((json) => {
                this._vervoerMiddelDummyData = Array.from(json);
                console.log(this._vervoerMiddelDummyData);
            });

        console.log(this._vervoerMiddelDummyData)

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

    connectedCallback() {
        super.connectedCallback();
    }

    /**
     * Called when an update was triggered, before rendering. Receives a Map of changed
     * properties, and their previous values. This can be used for modifying or setting
     * new properties before a render occurs.
     */
    update(changed: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
        super.update(changed);

    }

    async firstUpdated() {
        this.data$ = fromFetch('/database/MOCK-REIZEN.json').pipe(switchMap(response => {
            if (response.ok) {
                // OK return data
                return response.json();
            } else {
                // Server is returning a status requiring the client to try something else.
                return of({error: true, message: `Error ${response.status}`});
            }
        }), catchError(err => {
            // Network or other error, handle appropriately
            console.error(err);
            return of({error: true, message: err.message})
        }));

        this.data$.subscribe({
            next: result => console.log(result), complete: () => console.log('done')
        })
    }

    render() {
        return html`
            <head>
                <style>
                    .filter0 {
                        grid-area: filter0;
                    }

                    .filter1 {
                        grid-area: filter1;
                    }

                    .filter2 {
                        grid-area: filter2;
                    }

                    .filter3 {
                        grid-area: filter3;
                    }

                    .filter4 {
                        grid-area: filter4;
                    }

                    .filter5 {
                        grid-area: filter5;
                    }

                    .item1 {
                        grid-area: header;
                    }

                    .item2 {
                        grid-area: menu;
                    }

                    .chart {
                        grid-area: chart;
                    }

                    .item4 {
                        grid-area: right;
                    }

                    .item5 {
                        grid-area: footer;
                    }

                    .grid-container {
                        display: grid;
                        grid-template-areas:
                        'filter0    filter1 filter2 filter3 filter4 filter5'
                        'menu       header  header  header  header  right'
                        'menu       chart    chart    chart    chart   right'
                        'menu       footer  footer  footer  footer  right';
                        gap: 10px;
                        /*background-color:var(--kpn-zwart);*/
                        padding: 10px;
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .grid-container > div {
                        background-color: var(--kpn-blauw);
                        color: var(--kpn-wit);

                        text-align: center;
                        padding: 20px 10%;
                        font-size: 30px;
                    }
                </style>
            </head>
            <body>

            <h1>KPN dashboard</h1>

            <div class="grid-container">
                <div class="item00">
                    <example-indicator current="745" change="+33.7" title="Current users"></example-indicator>
                </div>
                <div class="item01">
                    <example-indicator
                            current="${this._totaleKM} km"
                            change="-112.45"
                            title="Totalen gereisd"
                    ></example-indicator>
                </div>
                <div class="item02">
                    <example-indicator
                            current="${this._persoonlijkeKM} km"
                            change="-3.9"
                            title="Persoonlijke km"
                    ></example-indicator>
                </div>
                <div class="item03">
                    <example-indicator
                            current="${this._totaleC02}kg C02"
                            change="-112.45"
                            title="Totalen C02"
                    ></example-indicator>
                </div>
                <div class="item04">
                    <example-indicator
                            current="${this._persoonlijkeC02}kg C02"
                            change="-112.45 "
                            title="Totalen C02"
                    </example-indicator>
                </div>
                <div class="item05">
                    <example-indicator current="-123.45" title="Custom metric"></example-indicator>
                </div>
                <div class="item1"></div>
                <div class="item2"></div>
                <div class="chart" style="background-color: transparent">
                    <chart-element></chart-element>
                </div>
                <div class="item4"></div>
                <div class="item5"></div>
            </div>


            <!--            <example-chart></example-chart>-->

            </body>
        `;
    }

    public onChange() {
        this._unsavedData = true;
    }

    public onBeforeEnter(location: RouterLocation, commands: PreventAndRedirectCommands, router: Router): Promise<unknown> | RedirectResult | undefined {
        console.log('onBeforeEnter');
        if (!this.isAuthorized()) {
            // sync operation
            // return commands.redirect('/');

            // async operation
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('Not authorized, redirect to home page');
                    resolve(commands.redirect('/login'));
                }, 2000);
            });
        }

        console.log('You can see this page');
    }

    public onBeforeLeave(location: RouterLocation, commands: PreventAndRedirectCommands, router: Router): PreventResult | undefined {
        if (this._unsavedData) {

            console.log('onBeforeLeave');

            const leave = window.confirm('Weet je zeker dat je deze pagina wil verlaten? \nUw ingevoerde gegevens zijn nog niet verzonden!');
            if (!leave) {
                console.log('onBeforeLeave commands.prevent()');
                return commands.prevent();
            }
        }
    }


    private isAuthorized() {
        return !!sessionStorage.getItem('userID');
    }
}
