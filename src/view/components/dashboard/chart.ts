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
          canvas {
            : brown;
            //background-color: brown;
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
            <script>

            </script>
        `;
    }
async updated() {

    await this.updateComplete.then(() => {

        const ctx = this.shadowRoot.getElementById('myChart');

        // @ts-ignore
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
                datasets: [{
                    label: 'Kilometers zonder uitstoot!',
                    data: [355, 310, 189, 196, 254, 280],
                    borderWidth: 1
                },
                {
                    label: 'Kilometers met uitstoot!',
                    data: [245, 265, 421, 404, 346, 320],
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
