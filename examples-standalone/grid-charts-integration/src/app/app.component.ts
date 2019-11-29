import {
    Component,
    ViewChild,
} from "@angular/core";

import { ContextMenuSelectEvent } from '@progress/kendo-angular-menu';
import { Stock, ChartConfig } from "./model";
import { stocksInPortfolio } from "./data";

import { ContextMenuComponent } from "@progress/kendo-angular-menu";
import { SelectableSettings, CellClickEvent } from "@progress/kendo-angular-grid";

import { menuItems } from "./data";
import { getChartStack, getChartType } from './utils';

@Component({
    selector: "app-root",
    template: `
      <h3>
        Select rows and right click the Grid in order to choose the desired Chart
        and generate it.
      </h3>
  
      <kendo-grid
        [data]="gridData"
        [selectable]="selectableSettings"
        [height]="500"
        [kendoGridSelectBy]="selectBy"
        [selectedKeys]="mySelection"
        (cellClick)="onCellClick($event)"
        (selectionChange)="onSelectionChange()"
      >
        <kendo-grid-checkbox-column
          [showSelectAll]="true"
        ></kendo-grid-checkbox-column>
        <kendo-grid-column field="symbol" title="Symbol"></kendo-grid-column>
        <kendo-grid-column field="price" title="Price"></kendo-grid-column>
        <kendo-grid-column field="pe" title="PE Ratio"></kendo-grid-column>
        <kendo-grid-column field="volume" title="Volume"></kendo-grid-column>
        <kendo-grid-column title="1 Day Price Chart">
          <ng-template kendoGridCellTemplate let-dataItem>
            <day-chart [data]="dataItem.intraday" [changePct]="dataItem.change_pct">
            </day-chart>
          </ng-template>
        </kendo-grid-column>
      </kendo-grid>
  
      <kendo-contextmenu #gridmenu [items]="items" (select)="onSelect($event)">
      </kendo-contextmenu>
  
      <kendo-window
        title="Stock Portfolio Details"
        *ngIf="opened"
        (close)="close()"
        [top]="100"
        [minWidth]="250"
        [width]="500"
        [height]="650"
      >
        <window 
          [data]="mySelection"
          [chartConfiguration]="chartConfiguration"
        ></window>
      </kendo-window>
    `
})
export class AppComponent {
    @ViewChild("gridmenu", { static: false }) public gridContextMenu: ContextMenuComponent;
    public items: Object[] = menuItems;
    public opened: boolean = false;
    public chartConfiguration: ChartConfig;

    public gridData: Stock[] = stocksInPortfolio;
    public selectableSettings: SelectableSettings = {
        checkboxOnly: false,
        mode: "multiple"
    };
    public mySelection: Stock[] = [];

    public onCellClick(e: CellClickEvent): void {
        if (e.type === "contextmenu") {
            const originalEvent = e.originalEvent;
            originalEvent.preventDefault();
            this.gridContextMenu.show({
                left: originalEvent.pageX,
                top: originalEvent.pageY
            });
        }
    }

    public selectBy(e: any) {
        return e.dataItem;
    }

    public onSelectionChange() {
        if (this.opened) {
            setTimeout(() => {
                this.mySelection = [...this.mySelection];
            })
        }
    }

    public onSelect(e: ContextMenuSelectEvent): void {

        this.gridContextMenu.hide();

        this.chartConfiguration = {
            chartName: e.item.text,
            seriesType: getChartType(e.item.text),
            stack: getChartStack(e.item.text)
        }

        if (!this.opened) {
            this.opened = true;
        }
    }

    public close() {
        this.opened = false;
    }
}
