import {css, html, LitElement, PropertyValueMap} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

import type { GridActiveItemChangedEvent } from '@vaadin/grid';
import {PreventAndRedirectCommands, PreventResult, RedirectResult, Router, RouterLocation} from "@vaadin/router";

import {firebaseService} from "../../services/firebaseService";
import {reisDTO} from "../../domain/reisDTO";

// // Your web app's Firebase configuration
// import { getDatabase, ref, get, set, child, update, remove } from "firebase/database";
// import { initializeApp } from "firebase/app";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('overzicht-reizen-element')
export class OverzichtReizen extends LitElement {
    @property() _app: any;
    @property() _db: any;
    @property() _currentPageTitle = 'Overzicht Reizen';
    @property() _vervoerMiddelDummyData = [];
    @property() _reizenData!: Map<string, reisDTO>[];
    private _unsavedData = false;
    @state()
    private selectedItems: unknown;
    private _thermometerInput: any;
    constructor() {
        super();
        sessionStorage.setItem('currentpagetitle',this._currentPageTitle);

        this._reizenData = this.selectAllData();

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
        align-content: center;

      }
      .tablecontainer {
        height: 70vh;
        overflow: auto;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 10px;
      }
      table {
        background: var(--kpn-zwart);
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

    connectedCallback() {
        super.connectedCallback();
        // // TODO insert ajax rsjx json file observer
        // //
        // fetch('/vervoermiddel-CO2.json')
        //     .then((response) => response.json())
        //     .then((json) => {
        //         this._vervoerMiddelDummyData = Array.from(json);
        //         console.log(this._vervoerMiddelDummyData);
        //     });

        this._reizenData = this.selectAllData();
    }

    /**
     * Called when an update was triggered, before rendering. Receives a Map of changed
     * properties, and their previous values. This can be used for modifying or setting
     * new properties before a render occurs.
     */
    update(changed: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
        super.update(changed);
        console.log('updated YAAY')
    }
    async firstUpdated() {
            this._reizenData = await fetch('/database/MOCK-REIZEN.json')
                .then((response) => response.json())
                .then((json) => {
                    return Array.from(json);
                });
            console.log(this._reizenData)

    }
    async selectAllData() {
        try {
            let data = await firebaseService.readReisDataAll();
            console.log(data)
            console.log('selectAllData success;')
            // @ts-ignore
            this._reizenData = data;
            this.selectedItems = data;

            return this._reizenData;
        } catch (e) {
            console.log('selectAllData failed; loading json')
            fetch('/dummydata-reizen.json')
                .then((response) => response.json())
                .then((json) => {
                    this._reizenData = Array.from(json);
                    console.log(this._reizenData);
                });
        }
    }


    render() {
        return html`
            <header>
                <h1 class="header">${this._currentPageTitle}</h1>
            </header>
            <body>
            <main>
            <hr/>
            <div class="tablecontainer">
                <vaadin-grid
                        .items="${this._reizenData}"
                             theme="row-stripes"
                             .selectedItems="${this.selectedItems}"
                             @active-item-changed="${(e: GridActiveItemChangedEvent<reisDTO>) => {
                                 const item = e.detail.value;
                                 this.selectedItems = item ? [item] : [];
                                 console.log(this.selectedItems)
                             }}"
                >
                    <vaadin-grid-column header="Project" path="project"></vaadin-grid-column>
                    <vaadin-grid-column header="Vervoertype" path="type"></vaadin-grid-column>
                    <vaadin-grid-column header="Begin" path="beginTijd"></vaadin-grid-column>
                    <vaadin-grid-column header="Eind" path="eindTijd"></vaadin-grid-column>
                    <vaadin-grid-column header="Vertrek" path="eindLocatie"></vaadin-grid-column>
                    <vaadin-grid-column header="Aankomst" path="beginLocatie"></vaadin-grid-column>
                    <vaadin-grid-column header="C02/km" path="uitstoot"></vaadin-grid-column>
                    <vaadin-grid-column header="Totale C02" path="uitstoot"></vaadin-grid-column>
                    <vaadin-grid-column header="Kosten" path="kosten"></vaadin-grid-column>
                    <vaadin-grid-column header="KM" path="km"></vaadin-grid-column>
                    <vaadin-grid-column header="Klasse" path="klasse"></vaadin-grid-column>
                    <vaadin-grid-column header="zakelijkOfPrive" path="zakelijk"></vaadin-grid-column>
                </vaadin-grid>
            </div>
                <p>Selected row:
                    ${JSON.stringify(this.selectedItems)}
                    ${this.selectedItems}</p>
                <button>Edit geselecteerde rij</button>
                <button>Exporteren als..</button>
<!--              <button @click="${this.tableToCSVDownloader}">download CSV</button> -->
                <button @click="${this.tableToJsonDownloader}">download JSON</button>
                <button @click="${this.filterColumnOnTerm('nobis')}">Filter on 'nobis'</button>
                <button onclick="print()">Print...</button>
            </main>
            </body>
        `;
    }

    wijzigDezeDataRij(event: Event) {
        // TODO collect data from the table #32
        //  Load invoeren-reizen with this data
        console.log('wijzigDezeDataRij')
        console.log(event.target)
        const target = event.target as any;
        const parent = target.parentElement as any;
        const grandParent = parent.parentElement as any;

        console.log(parent.parentElement)
        console.log(grandParent.previousSibling)

        //notify parent:
        this.dispatchEvent(new Event('page-chosen'));
        this.dispatchEvent(new Event('row-chosen'));
    }

    //
    // const dataToConvert = {
    //     data: this._reizenDummyData,
    //     filename: 'ip_addresses_report',
    //     delimiter: ',',
    //     headers: ['IP', "Full Name", "IP Address"]
    // }
    tableToCSVDownloader() {
        var dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(this.dataToConvert);
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    tableToJsonDownloader(exportObj: any, exportName: string){
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this._reizenData));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }


    // TODO: fix filter and sort:
    filterColumnOnTerm(filter: string) {
    //     console.log('sortColumnSimple');
    //     console.log(filter);
    //     // sort by value
    // }
    // headerClicked(e: Event) {
    //     console.log('headerClicked');
    //     console.log(this._reizenDummyData);
    //
    //     const event = e as any;
    //     const id = event.target.id;
    //     console.log('id= ' + id);
    //     this._feedback = 'Table column to be sorted: ' + id;
    //     // TODO: implement style sorter https://www.scaler.com/topics/javascript-sort-an-array-of-objects/
    //     switch (id) {
    //         case this.headers[0]: {
    //             // project
    //             console.log(this._sorted0);
    //             this._sorted0 = this._sorted0 === true ? false : true;
    //
    //             this._reizenDummyData = this._sorted0 === true ? this._reizenDummyData.sort((a: any, b: any) => {
    //                 const projectA = a.project.toUpperCase(); // ignore upper and lowercase
    //                 const projectB = b.project.toUpperCase(); // ignore upper and lowercase
    //                 // typeA - typeB
    //                 if (projectA > projectB) {
    //                     return -1;
    //                 }
    //                 if (projectA < projectB) {
    //                     return 1;
    //                 }
    //                 // names must be equal
    //                 return 0;
    //             }) : this._reizenDummyData.sort((a: any, b: any) => {
    //                 const projectB = a.project.toUpperCase(); // ignore upper and lowercase
    //                 const projectA = b.project.toUpperCase(); // ignore upper and lowercase
    //                 if (projectA > projectB) {
    //                     return -1;
    //                 }
    //                 if (projectA < projectB) {
    //                     return 1;
    //                 }
    //                 // names must be equal
    //                 return 0;
    //             });
    //             break;
    //         }
    //         case this.headers[1]: {
    //             //type
    //             console.log(this._sorted1);
    //             this._sorted1 = this._sorted1 === true ? false : true;
    //
    //             this._reizenDummyData = this._sorted1 === true ? this._reizenDummyData.sort((a: any, b: any) => {
    //                 const typeA = a.type.toUpperCase(); // ignore upper and lowercase
    //                 const typeB = b.type.toUpperCase(); // ignore upper and lowercase
    //
    //                 // typeA - typeB
    //                 if (typeA > typeB) {
    //                     return -1;
    //                 }
    //                 if (typeA < typeB) {
    //                     return 1;
    //                 }
    //                 // names must be equal
    //                 return 0;
    //             }) : this._reizenDummyData.sort((a: any, b: any) => {
    //                 const typeB = a.type.toUpperCase(); // ignore upper and lowercase
    //                 const typeA = b.type.toUpperCase(); // ignore upper and lowercase
    //                 if (typeA > typeB) {
    //                     return -1;
    //                 }
    //                 if (typeA < typeB) {
    //                     return 1;
    //                 }
    //                 // names must be equal
    //                 return 0;
    //             });
    //             break;
    //         }
    //         case this.headers[2]: {
    //             //begin
    //             console.log(this._sorted2);
    //
    //             this._sorted2 = this._sorted2 === true ? false : true;
    //
    //             this._reizenDummyData = this._sorted2 ? this._reizenDummyData.sort((x: any, y: any) => {
    //                 (x = new Date(x.begin)), (y = new Date(y.begin));
    //                 return x - y;
    //             }) : this._reizenDummyData.sort((x: any, y: any) => {
    //                 (x = new Date(x.begin)), (y = new Date(y.begin));
    //                 return x - y;
    //             });
    //             break;
    //         }
    //         case this.headers[3]: {
    //             //eind
    //             console.log(this._sorted3);
    //
    //             this._sorted3 = this._sorted3 === true ? false : true;
    //
    //             this._reizenDummyData = this._sorted3 ? this._reizenDummyData.sort((x: any, y: any) => {
    //                 (x = new Date(x.eind)), (y = new Date(y.eind));
    //                 return x - y;
    //             }) : this._reizenDummyData.sort((x: any, y: any) => {
    //                 (x = new Date(x.eind)), (y = new Date(y.eind));
    //                 return x - y;
    //             });
    //             break;
    //         }
    //         case this.headers[4]: {
    //             //km
    //
    //             console.log(this._sorted4);
    //
    //             this._sorted4 = this._sorted4 === true ? false : true;
    //             // @ts-ignore
    //             this._reizenDummyData = this._sorted4 ? this._reizenDummyData.sort((u1: any, u2: any) => u1.km - u2.km) : this._reizenDummyData.sort((u1: any, u2: any) => u2.km - u1.km);
    //             break;
    //         }
    //         case this.headers[5]: {
    //             //uitstoot
    //             console.log(this._sorted5);
    //
    //             this._sorted5 = this._sorted5 === true ? false : true;
    //             // @ts-ignore
    //             this._reizenDummyData = this._sorted5 ? this._reizenDummyData.sort((u1: any, u2: any) => u1.uitstoot - u2.uitstoot) : this._reizenDummyData.sort((u1: any, u2: any) => u2.uitstoot - u1.uitstoot);
    //             break;
    //         }
    //         case this.headers[6]: {
    //             //kosten
    //             console.log(this._sorted6);
    //
    //             this._sorted6 = this._sorted6 === true ? false : true;
    //             this._reizenDummyData = this._sorted6 ? this._reizenDummyData.sort((u1: any, u2: any) => u1.kosten - u2.kosten) : this._reizenDummyData.sort((u1: any, u2: any) => u2.kosten - u1.kosten);
    //             break;
    //         }
    //         case this.headers[7]: {
    //             //wijzig
    //             alert("'no sorting needed'");
    //         }
    //             break;
    //         default:
    //             break;
    //     }
    }
    public onChange() {
        this._unsavedData = true;
    }
    public onBeforeEnter(location: RouterLocation, commands: PreventAndRedirectCommands, router: Router): Promise<unknown> | RedirectResult | undefined {
        console.log('onBeforeEnter');
        if (!this.isAuthorized()) {
            // sync operation
            // return commands.redirect('/');
            window.addEventListener('mercury',
                (e: Event) => this._thermometerInput,
                true);
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
