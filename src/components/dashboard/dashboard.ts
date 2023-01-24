import {css, html, LitElement, PropertyValueMap} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

import {ajax} from 'rxjs/ajax';
import {map, catchError, of} from 'rxjs';
import {PreventAndRedirectCommands, PreventResult, RedirectResult, Router, RouterLocation} from "@vaadin/router";

import '@vaadin/grid';
import '@vaadin/grid/vaadin-grid-selection-column.js';
// import '@vaadin/vaadin-grid';
// import '@vaadin/grid/vaadin-grid-selection-column.js';
// import '@vaadin/select';
// import '@vaadin/notification';
// import { getPeople } from 'Frontend/demo/domain/DataService.java';
// import type Person from 'Frontend/generated/com/vaadin/demo/domain/Person';


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
    private _unsavedData = false;
    // @state()
    // @property() items: Person[] = [];

    constructor() {
        super();
        sessionStorage.setItem('currentpagetitle',this._currentPageTitle);
        // this.classList.add('basic-board');

        fetch('/database/vervoermiddel-CO2.json')
            .then((response) => response.json())
            .then((json) => {
                this._vervoerMiddelDummyData = Array.from(json);
                console.log(this._vervoerMiddelDummyData);
            });

        // fetch('/database/dummydata-reizen.json')
        //     .then((response) => response.json())
        //     .then((json) => {
        //         this._reizenDummyData = Array.from(json);
        //         console.log(this._reizenDummyData);
        //     });
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

    /**
     * Called when an update was triggered, before rendering. Receives a Map of changed
     * properties, and their previous values. This can be used for modifying or setting
     * new properties before a render occurs.
     */
    update(changed: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
        super.update(changed);
    }
    async firstUpdated() {
        this._reizenDummyData = await fetch('/database/MOCK-REIZEN.json')
            .then((response) => response.json())
            .then((json) => {
                return Array.from(json);
            });
        // const { people } = await getPeople();
        // this.items = people;
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
                test
                <vaadin-grid .items="${this._reizenDummyData}">
                    <vaadin-grid-selection-column auto-select>
                    </vaadin-grid-selection-column>
                    <vaadin-grid-column path="Project"></vaadin-grid-column>
                    <vaadin-grid-column path="type"></vaadin-grid-column>
                    <vaadin-grid-column path="beginTijd"></vaadin-grid-column>
                    <vaadin-grid-column path="eindTijd"></vaadin-grid-column>
                    <vaadin-grid-column path="vertrekLocatie"></vaadin-grid-column>
                    <vaadin-grid-column path="aankomstLocatie"></vaadin-grid-column>
                    <vaadin-grid-column path="C02"></vaadin-grid-column>
                    <vaadin-grid-column path="Kosten"></vaadin-grid-column>
                    <vaadin-grid-column path="km"></vaadin-grid-column>
                    <vaadin-grid-column path="klasse"></vaadin-grid-column>
                    <vaadin-grid-column path="zakelijkOfPrive"></vaadin-grid-column>
                </vaadin-grid>
            </main>
            </body>
            <script>
                addEventListener('WebComponentsReady', function() {
                    Polymer({
                        is: 'dataprovider-select-all',

                        properties: {
                            inverted: {
                                type: Boolean,
                                value: false
                            },
                            indeterminate: {
                                type: Boolean,
                                value: false
                            }
                        },

                        observers: ['_resetSelection(inverted)'],

                        _resetSelection: function(inverted) {
                            this.$.grid.selectedItems = [];
                            this.updateStyles();
                            this.indeterminate = false;
                        },

                        _invert: function(e) {
                            this.inverted = !this.inverted;
                        },

                        // iOS needs indeterminated + checked at the same time
                        _isChecked: function(inverted, indeterminate) {
                            return indeterminate || inverted;
                        },

                        _selectItem: function(e) {
                            if (e.target.checked === this.inverted) {
                                this.$.grid.deselectItem(e.model.item);
                            } else {
                                this.$.grid.selectItem(e.model.item);
                            }
                            this.indeterminate = this.$.grid.selectedItems.length > 0;
                        },

                        _isSelected: function(inverted, selected) {
                            return inverted != selected;
                        }
                    });
                });
            </script>
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
