import {css, html, LitElement, PropertyValueMap} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';
import '@vaadin/charts';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',];

const chartOptions = {
    xAxis: {crosshair: true}, yAxis: {min: 0},
};

@customElement('chart-element')
export class Example extends LitElement {
    @property() _root: Element | ShadowRoot;
    @query('#myChart') _myChart!: HTMLElement;


    static get styles() {
        return css`
          .title {
            font-size: var(--lumo-font-size-l);
            font-weight: 700;
            margin-block-end: var(--lumo-space-m);
          }
        `;
    }
    constructor() {
        super();
        this._root =this.createRenderRoot();

    }


    render() {
        return html`
            <div>
                <canvas id="myChart"></canvas>
            </div>

            chart
            <script>

            </script>
        `;
    }
async updated() {

    await this.updateComplete.then(() => {

        const ctx = this.shadowRoot.getElementById('myChart');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
}

    async firstUpdated() {
    }
}
