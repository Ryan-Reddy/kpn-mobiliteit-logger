import {css, html, LitElement, PropertyValueMap} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {InvoerenReizen} from "./invoeren-reizen";

import type { GridActiveItemChangedEvent } from '@vaadin/grid';
import {PreventAndRedirectCommands, PreventResult, RedirectResult, Router, RouterLocation} from "@vaadin/router";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('overzicht-reizen-element')
export class OverzichtReizen extends LitElement {
    @property() _currentPageTitle = 'Overzicht Reizen';
    @property() _vervoerMiddelDummyData = [];
    @property() _reizenDummyData = [];
    private _unsavedData = false;
    @state()
    private selectedItems: unknown;
    constructor() {
        super();
        sessionStorage.setItem('currentpagetitle',this._currentPageTitle);

        fetch('/database/vervoermiddel-CO2.json')
            .then((response) => response.json())
            .then((json) => {
                this._vervoerMiddelDummyData = Array.from(json);
                console.log(this._vervoerMiddelDummyData);
            });

        fetch('/database/MOCK-REIZEN.json')
            .then((response) => response.json())
            .then((json) => {
                this._reizenDummyData = Array.from(json);
                console.log(this._reizenDummyData);
            });
        //TODO implement AJAX observable

        // const obs$ = ajax('https://api.github.com/users?per_page=5').pipe(map(userResponse => console.log('users: ', userResponse)), catchError(error => {
        //     console.log('error: ', error);
        //     return of(error);
        // }));
        //
        // obs$.subscribe({
        //     next: value => console.log(value), error: err => console.log(err)
        // });

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
        // fetch('/dummydata-reizen.json')
        //     .then((response) => response.json())
        //     .then((json) => {
        //         this._reizenDummyData = Array.from(json);
        //         console.log(this._reizenDummyData);
        //     });
    }
    async firstUpdated() {
        this._reizenDummyData = await fetch('/database/MOCK-REIZEN.json')
            .then((response) => response.json())
            .then((json) => {
                return Array.from(json);
            });
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

    //TODO: make tableToCSV work with lit
    // https://www.geeksforgeeks.org/how-to-export-html-table-to-csv-using-javascript/
    tableToCSV() {
        //   console.log('tableToCSV');
        //   // Variable to store the final csv data
        //   var csv_data = [];
        //   // Get each row data
        //   var rows = document.getElementsByTagName('tr');
        //   for (var i = 0; i < rows.length; i++) {
        //     // Get each column data
        //     var cols = rows[i].querySelectorAll('td,th');
        //     // Stores each csv row data
        //     var csvrow = [];
        //     for (var j = 0; j < cols.length; j++) {
        //       // Get the text data of each cell of a row and push it to csvrow
        //       csvrow.push(cols[j].innerHTML);
        //     }
        //     csv_data.push(csvrow.join(","));
        //   }
        //   csv_data = csv_data.join('\n');
        // }
        //
        // downloadCSVFile(csv_data) {
        //
        //   // Create CSV file object and feed our
        //   // csv_data into it
        //   let CSVFile = new Blob([csv_data], { type: "text/csv" });
        //
        //   // Create to temporary link to initiate
        //   // download process
        //   var temp_link = document.createElement('a');
        //
        //   // Download csv file
        //   temp_link.download = "GfG.csv";
        //   var url = window.URL.createObjectURL(CSVFile);
        //   temp_link.href = url;
        //
        //   // This link should not be displayed
        //   temp_link.style.display = "none";
        //   document.body.appendChild(temp_link);
        //
        //   // Automatically click the link to trigger download
        //   temp_link.click();
        //   document.body.removeChild(temp_link);
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
                <vaadin-grid .items="${this._reizenDummyData}" 
                             .selectedItems="${this.selectedItems}"
                             @active-item-changed="${(e: GridActiveItemChangedEvent<reisDTO>) => {
                                 const item = e.detail.value;
                                 this.selectedItems = item ? [item] : [];
                                 console.log(this.selectedItems)
                             }}"
                >
                    <vaadin-grid-column header="Project" path="Project"></vaadin-grid-column>
                    <vaadin-grid-column header="Vervoertype" path="type"></vaadin-grid-column>
                    <vaadin-grid-column header="Begin" path="beginTijd"></vaadin-grid-column>
                    <vaadin-grid-column header="Eind" path="eindTijd"></vaadin-grid-column>
                    <vaadin-grid-column header="Vertrek"" path="vertrekLocatie"></vaadin-grid-column>
                    <vaadin-grid-column header="Aankomst" path="aankomstLocatie"></vaadin-grid-column>
                    <vaadin-grid-column header="Totale C02" path="C02"></vaadin-grid-column>
                    <vaadin-grid-column header="Kosten" path="Kosten"></vaadin-grid-column>
                    <vaadin-grid-column header="KM" path="km"></vaadin-grid-column>
                    <vaadin-grid-column header="Klasse" path="klasse"></vaadin-grid-column>
                    <vaadin-grid-column header="zakelijkOfPrive" path="zakelijkOfPrive"></vaadin-grid-column>
                </vaadin-grid>
            </div>
                <p>Selected row:
                    ${JSON.stringify(this.selectedItems)}</p>
                <button>Edit geselecteerde rij</button>
                <button>Exporteren als..</button>
                <button @click="${this.tableToCSV}">download CSV</button>
                <button @click="${this.filterColumnOnTerm('nobis')}">Filter on 'nobis'</button>
                <button onclick="print()">Print...</button>
            </main>
            </body>
            <span id="feedbackspan"> ${this._feedback} </span>
            
        `;
    }
    wijzigDezeDataRij(event: Event) {
        // TODO collect data from the table #32
        console.log('wijzigDezeDataRij')
        console.log(event.target)
        const target = event.target as InvoerenReizen;
        const parent = target.parentElement as any;
        const grandParent = parent.parentElement as any;

        console.log(parent.parentElement)
        console.log(grandParent.previousSibling)

        //notify parent:
        this.dispatchEvent(new Event('page-chosen'));
        this.dispatchEvent(new Event('row-chosen'));
    }

    // TODO: fix filter and sort:
    filterColumnOnTerm(filter: string) {
        console.log('sortColumnSimple');
        console.log(filter);
        // sort by value
    }
    headerClicked(e: Event) {
        console.log('headerClicked');
        console.log(this._reizenDummyData);

        const event = e as any;
        const id = event.target.id;
        console.log('id= ' + id);
        this._feedback = 'Table column to be sorted: ' + id;
        // TODO: implement style sorter https://www.scaler.com/topics/javascript-sort-an-array-of-objects/
        switch (id) {
            case this.headers[0]: {
                // project
                console.log(this._sorted0);
                this._sorted0 = this._sorted0 === true ? false : true;

                this._reizenDummyData = this._sorted0 === true ? this._reizenDummyData.sort((a: any, b: any) => {
                    const projectA = a.project.toUpperCase(); // ignore upper and lowercase
                    const projectB = b.project.toUpperCase(); // ignore upper and lowercase
                    // typeA - typeB
                    if (projectA > projectB) {
                        return -1;
                    }
                    if (projectA < projectB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                }) : this._reizenDummyData.sort((a: any, b: any) => {
                    const projectB = a.project.toUpperCase(); // ignore upper and lowercase
                    const projectA = b.project.toUpperCase(); // ignore upper and lowercase
                    if (projectA > projectB) {
                        return -1;
                    }
                    if (projectA < projectB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });
                break;
            }
            case this.headers[1]: {
                //type
                console.log(this._sorted1);
                this._sorted1 = this._sorted1 === true ? false : true;

                this._reizenDummyData = this._sorted1 === true ? this._reizenDummyData.sort((a: any, b: any) => {
                    const typeA = a.type.toUpperCase(); // ignore upper and lowercase
                    const typeB = b.type.toUpperCase(); // ignore upper and lowercase

                    // typeA - typeB
                    if (typeA > typeB) {
                        return -1;
                    }
                    if (typeA < typeB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                }) : this._reizenDummyData.sort((a: any, b: any) => {
                    const typeB = a.type.toUpperCase(); // ignore upper and lowercase
                    const typeA = b.type.toUpperCase(); // ignore upper and lowercase
                    if (typeA > typeB) {
                        return -1;
                    }
                    if (typeA < typeB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });
                break;
            }
            case this.headers[2]: {
                //begin
                console.log(this._sorted2);

                this._sorted2 = this._sorted2 === true ? false : true;

                this._reizenDummyData = this._sorted2 ? this._reizenDummyData.sort((x: any, y: any) => {
                    (x = new Date(x.begin)), (y = new Date(y.begin));
                    return x - y;
                }) : this._reizenDummyData.sort((x: any, y: any) => {
                    (x = new Date(x.begin)), (y = new Date(y.begin));
                    return x - y;
                });
                break;
            }
            case this.headers[3]: {
                //eind
                console.log(this._sorted3);

                this._sorted3 = this._sorted3 === true ? false : true;

                this._reizenDummyData = this._sorted3 ? this._reizenDummyData.sort((x: any, y: any) => {
                    (x = new Date(x.eind)), (y = new Date(y.eind));
                    return x - y;
                }) : this._reizenDummyData.sort((x: any, y: any) => {
                    (x = new Date(x.eind)), (y = new Date(y.eind));
                    return x - y;
                });
                break;
            }
            case this.headers[4]: {
                //km

                console.log(this._sorted4);

                this._sorted4 = this._sorted4 === true ? false : true;
                // @ts-ignore
                this._reizenDummyData = this._sorted4 ? this._reizenDummyData.sort((u1: any, u2: any) => u1.km - u2.km) : this._reizenDummyData.sort((u1: any, u2: any) => u2.km - u1.km);
                break;
            }
            case this.headers[5]: {
                //uitstoot
                console.log(this._sorted5);

                this._sorted5 = this._sorted5 === true ? false : true;
                // @ts-ignore
                this._reizenDummyData = this._sorted5 ? this._reizenDummyData.sort((u1: any, u2: any) => u1.uitstoot - u2.uitstoot) : this._reizenDummyData.sort((u1: any, u2: any) => u2.uitstoot - u1.uitstoot);
                break;
            }
            case this.headers[6]: {
                //kosten
                console.log(this._sorted6);

                this._sorted6 = this._sorted6 === true ? false : true;
                this._reizenDummyData = this._sorted6 ? this._reizenDummyData.sort((u1: any, u2: any) => u1.kosten - u2.kosten) : this._reizenDummyData.sort((u1: any, u2: any) => u2.kosten - u1.kosten);
                break;
            }
            case this.headers[7]: {
                //wijzig
                alert("'no sorting needed'");
            }
                break;
            default:
                break;
        }
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
