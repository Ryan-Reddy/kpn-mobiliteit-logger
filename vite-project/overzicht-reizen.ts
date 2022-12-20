import {css, html, LitElement} from 'lit';
import {property} from "lit-element";

// import * as Rx from 'rx-dom';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class OverzichtReizen extends LitElement {
    @property() titel = 'Overzicht Reizen';
    @property() _vervoerMiddelDummyData = [];
    @property() _reizenDummyData = [];
    @property() headers = ['Project', 'Type vervoer', 'Begin', 'Einde', 'Km', 'C02', 'Kosten', 'Wijzig',];

    constructor() {
        super();
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
        main {       
        }
        .tablecontainer {
          height: 60vh;
          overflow: auto
        }
        table {
        background: slateblue;
        max-height: 100%;
        }
          th {
          padding: .6em;
          border-bottom: 1px dotted #ddd;
          border-collapse: collapse;
        }
        tr:hover {background-color: coral;}

    @media (max-width: 858px) {
    .hiddensmolscreen {
      display: none;
    }
        
    `;
    }

    connectedCallback() {
        super.connectedCallback();
        // TODO insert ajax rsjx json file observer
        //
        fetch('/vervoermiddel-CO2.json')
            .then((response) => response.json())
            .then((json) => {
                this._vervoerMiddelDummyData = Array.from(json);
                console.log(this._vervoerMiddelDummyData);
            });
        // }
        fetch('/dummydata-reizen.json')
            .then((response) => response.json())
            .then((json) => {
                this._reizenDummyData = Array.from(json);
                console.log(this._reizenDummyData);
            });
        // }
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
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        return html`
          <header>
          <H1 class="header">${this.titel}</H1>
          </header>
          
            <body>
            <main>
    <span class="span">
                        <hr/>

        <div class="tablecontainer">
    <table class="full">
    <caption hidden>${this.titel}</caption>
    <thead>
    <tr>
        <th class="hiddensmolscreen">${this.headers[0]}</th>
        <th>${this.headers[1]}</th>
        <th>${this.headers[2]}</th>
        <th class="hiddensmolscreen">${this.headers[3]}</th>
        <th>${this.headers[4]}</th>
        <th class="hiddensmolscreen">${this.headers[5]}</th>
        <th class="hiddensmolscreen">${this.headers[6]}</th>
        <th>${this.headers[7]}</th>
        <th class="hiddensmolscreen"></th>
                
    </tr>

    </thead>
    <tbody>
    ${this._reizenDummyData.map(({begin, eind, km, kosten, project, type, uitstoot}) => html`
        <tr>
            <th class="hiddensmolscreen">${project}</th>
            <th>${type}</th>
            <th>${begin}</th>
            <th class="hiddensmolscreen">${eind}</th>
            <th>${km}</th>
            <th class="hiddensmolscreen">${uitstoot}</th>
            <th class="hiddensmolscreen">${kosten}</th>
            <th><a href="#">Wijzig</a></th>
        </tr>
    `)}
    </tbody>
    </table>
                
        </div>
        </span>
                <button>Exporteren als..</button>
                <button @click="${this.tableToCSV}">download CSV</button>
                <button onclick="print()">Print...</button>
            </main>
            </body>
        `;
    }
}

window.customElements.define('overzicht-reizen', OverzichtReizen);
