import {css, html, LitElement, PropertyValueMap} from 'lit';
import {customElement, property} from 'lit-element';
import {InvoerenReizen} from "./invoeren-reizen";

// import * as Rx from 'rx-dom';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('overzicht-reizen')
export class OverzichtReizen extends LitElement {
    @property() titel = 'Overzicht Reizen';
    @property() _vervoerMiddelDummyData = [];
    @property() _reizenDummyData = [];
    @property() headers = ['Project', 'Type vervoer', 'Begin', 'Einde', 'Km', 'C02', 'Kosten', 'Wijzig',];
    @property() _feedback = '';
    @property() _sorted0 = false;
    @property() _sorted1 = false;
    @property() _sorted2 = false;
    @property() _sorted3 = false;
    @property() _sorted4 = false;
    @property() _sorted5 = false;
    @property() _sorted6 = false;
    @property() _sorted7 = false;
    @property() sortsymboldown = '&#5167;';
    @property() sortsymbolUP = '&#11016;';

    constructor() {
        super();
        fetch('/vervoermiddel-CO2.json')
            .then((response) => response.json())
            .then((json) => {
                this._vervoerMiddelDummyData = Array.from(json);
                console.log(this._vervoerMiddelDummyData);
            });
        fetch('/dummydata-reizen.json')
            .then((response) => response.json())
            .then((json) => {
                this._reizenDummyData = Array.from(json);
                console.log(this._reizenDummyData);
            });
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
                  <tr @click=${this.headerClicked}>
                    <th
                            class="columnHeads"
                            id=${this.headers[0]}
                            class="hiddensmolscreen"
                    >
                      ${this.headers[0]} &#5167;&#5169;
                    </th>
                    <th class="columnHeads" id=${this.headers[1]}>
                      ${this.headers[1]} &#5167;&#5169;
                    </th>
                    <th class="columnHeads" id=${this.headers[2]}>
                      ${this.headers[2]} &#5167;&#5169;
                    </th>
                    <th
                            class="columnHeads"
                            id=${this.headers[3]}
                            class="hiddensmolscreen"
                    >
                      ${this.headers[3]} &#5167;&#5169;
                    </th>
                    <th class="columnHeads" id=${this.headers[4]}>
                      ${this.headers[4]} &#5167;&#5169;
                    </th>
                    <th
                            class="columnHeads"
                            id=${this.headers[5]}
                            class="hiddensmolscreen"
                    >
                      ${this.headers[5]} &#5167;&#5169;
                    </th>
                    <th
                            class="columnHeads"
                            id=${this.headers[6]}
                            class="hiddensmolscreen"
                    >
                      ${this.headers[6]} &#5167;&#5169;
                    </th>
                    <th class="columnHeads" id=${this.headers[7]}>
                      ${this.headers[7]} &#5167;&#5169;
                    </th>
                  </tr>
                </thead>
                <tbody>
                  ${this._reizenDummyData.map(({
                                                   begin, eind, km, kosten, project, type, uitstoot,
                                               }) => html`
                      <tr>
                          <th class="hiddensmolscreen">${project}</th>
                          <th>${type}</th>
                          <th>${begin}</th>
                          <th class="hiddensmolscreen">${eind}</th>
                          <th id=${km > 300 ? 'errorKM' : 'allGood'}>${km}</th>
                          <th class="hiddensmolscreen">${uitstoot}</th>
                          <th class="hiddensmolscreen">${kosten}</th>
                          <th @click=${this.wijzigDezeDataRij}><a href="#" >Wijzig</a></th>
                      </tr>
                  `)}
                </tbody>
              </table>
            </div>
          </span>
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
}
