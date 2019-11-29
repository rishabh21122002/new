import {
    Component,
    Input
} from "@angular/core";


@Component({
    selector: "day-chart",
    template: `
            <kendo-chart
              style="height: 50px"
              [transitions]="false"
              [renderAs]="'svg'"
              [chartArea]="{ background: 'transparent' }"
            >
              <kendo-chart-value-axis>
                <kendo-chart-value-axis-item
                  [visible]="false"
                  [majorGridLines]="{ visible: false }"
                >
                </kendo-chart-value-axis-item>
              </kendo-chart-value-axis>
              <kendo-chart-category-axis>
                <kendo-chart-category-axis-item
                  [visible]="false"
                  [majorGridLines]="{ visible: false }"
                >
                </kendo-chart-category-axis-item>
              </kendo-chart-category-axis>
              <kendo-chart-series>
                <kendo-chart-series-item
                  [type]="'line'"
                  [data]="data"
                  [markers]="{ visible: false }"
                  [color]="changePct > 0 ? 'green' : 'red'"
                >
                </kendo-chart-series-item>
                <kendo-chart-series-item
                  [type]="'area'"
                  [data]="data"
                  [markers]="{ visible: false }"
                  [color]="changePct > 0 ? 'green' : 'red'"
                  [opacity]="0.2"
                >
                </kendo-chart-series-item>
              </kendo-chart-series>
              <kendo-chart-tooltip></kendo-chart-tooltip>
            </kendo-chart>
    `
})
export class DayChartComponent {
    @Input() public data: number[];
    @Input() public changePct: number;

}
