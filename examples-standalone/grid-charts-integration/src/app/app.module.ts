import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ContextMenuModule } from '@progress/kendo-angular-menu';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TooltipModule } from '@progress/kendo-angular-tooltip';

import { ScatterBubbleChartComponent } from './components/charts/scatter-bubble/scatter-bubble-chart.component';
import { PieDonutStockComponent } from './components/charts/pie-donut/pie-donut-chart.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StocksChartComponent } from './components/charts/common/stocks-chart.component';
import { DayChartComponent } from './components/charts/day/day-chart.component';
import { WindowComponent } from './components/common/window/window.component';
import { SelectSeriesComponent } from './components/common/select-series/select-series.component';
import { SelectChartTypeComponent } from './components/common/select-chart-type/select-chart-type.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

import { NumberFormatPipe } from './pipes/number-format.pipe';

import 'hammerjs';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        GridModule,
        ChartsModule,
        WindowModule,
        DropDownsModule,
        PopupModule,
        ContextMenuModule,
        InputsModule,
        ButtonsModule,
        ExcelModule,
        LayoutModule,
        TooltipModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        StocksChartComponent,
        PieDonutStockComponent,
        ScatterBubbleChartComponent,
        DayChartComponent,
        WindowComponent,
        SelectSeriesComponent,
        SelectChartTypeComponent,
        NumberFormatPipe,
        StockListComponent,
        ActionButtonsComponent
    ],
    entryComponents: [
        StocksChartComponent,
        PieDonutStockComponent,
        ScatterBubbleChartComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
