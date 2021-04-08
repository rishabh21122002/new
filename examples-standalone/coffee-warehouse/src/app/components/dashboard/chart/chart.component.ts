import { Component, ViewEncapsulation } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { orders } from '../../../data/orders';

@Component({
    selector: 'chart-component',
    encapsulation: ViewEncapsulation.None,
    templateUrl:'./chart.component.html',
    styleUrls:['./chart.component.scss']
})
export class ChartComponent {
    public selectedChart: 'Trend' | 'Volume' = 'Trend';
    public orders = orders;

    public dateRange: any = {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 4, 1)
    };

    public categories = this.orders.map((dataItem) => {
        return dataItem.orderDate;
    });

    public series: any[] = [
        {
            name: 'Tiger Team',
            data: this.fetchData(1),
            color: '#FF6358'
        },
        {
            name: 'Lemon Team',
            data: this.fetchData(2),
            color: '#F7C62F'
        },
        {
            name: 'Organic Team',
            data: this.fetchData(3),
            color: '#55AB1D'
        },
        {
            name: 'Ocean Team',
            data: this.fetchData(4),
            color: '#28B4C8'
        }
    ];

    constructor(public intl: IntlService) {}

    public fromDate(date: Date) {
        this.dateRange.start = date;
        this.updateSeries();
    }

    public toDate(date: Date) {
        this.dateRange.end = date;
        this.updateSeries();
    }

    public updateSeries() {
        this.series.map((series, index) => {
            return (series.data = this.fetchData(index + 1));
        });
    }

    public fetchData(team) {
        return this.orders.map((dataItem) => {
            if (dataItem.teamID === team && dataItem.orderDate >= this.dateRange.start && dataItem.orderDate < this.dateRange.end) {
                return dataItem.orderTotal;
            }
        });
    }
}
