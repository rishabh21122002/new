import { Component, Input } from "@angular/core";
import { Stock, ChartConfig } from "../model";
import { series, seriesTypes } from "../data";
import { getTitle, getChartType } from "../utils";

@Component({
    selector: "pie-donut-stocks",
    template: `
    <kendo-chart>
      <kendo-chart-title
        [text]="getTitle(selectedSeries) + ' per stock'"
      ></kendo-chart-title>
      <kendo-chart-series>
        <kendo-chart-series-item
          [type]="chartConfiguration.seriesType"
          [data]="data"
          [field]="selectedSeries"
          [name]="selectedSeries"
          [categoryField]="'symbol'"
        >
          <kendo-chart-series-item-tooltip>
            <ng-template let-dataItem="dataItem" let-value="value">
              {{ dataItem.symbol + " " + getTitle(selectedSeries) + ": " + value }}
            </ng-template>
          </kendo-chart-series-item-tooltip>
        </kendo-chart-series-item>
      </kendo-chart-series>
      <kendo-chart-legend position="right" orientation="vertical">
      </kendo-chart-legend>
    </kendo-chart>

    <div style="width: 100%; padding-top: 10px">
      <span>Select series:</span>
      <kendo-dropdownlist
        [data]="series"
        [valuePrimitive]="true"
        [textField]="'title'"
        [valueField]="'field'"
        [(value)]="selectedSeries"
      >
      </kendo-dropdownlist>
    </div>

    <select-chart-type
      [data]="seriesTypes"
      [chartName]="chartConfiguration.chartName"
      (valueChange)="onValueChange($event)"
    ></select-chart-type>
    
  `
})
export class PieDonutStockComponent {
    @Input() public data: Stock[];
    @Input() public chartConfiguration: ChartConfig;
    
    public selectedSeries: string = "price";
    public series: Object[] = series;
    public seriesTypes: string[] = seriesTypes.circularSeries;
    public getTitle = getTitle;

    public onValueChange(chartName) {
        this.chartConfiguration.seriesType = getChartType(chartName);
    }
}
