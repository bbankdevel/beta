import { Component, OnInit, ViewChild } from '@angular/core';

import {ChartComponent, ApexNonAxisChartSeries, ApexPlotOptions, ApexChart,  ApexFill, ApexStroke,  ApexResponsive } from "ng-apexcharts";

 
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  responsive: ApexResponsive[];
};



@Component({
  selector: 'app-graph-seconds',
  templateUrl: './graph-seconds.component.html',
  styleUrls: ['./graph-seconds.component.css']
})
export class GraphSecondsComponent implements OnInit {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

      constructor() {
        this.chartOptions = {
          series: [31],
          chart: {
            height: 150,
            type: "radialBar",
            zoom: {
                enabled: true,
            },
            toolbar: {
                show: false
            }
          },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '75%',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 10,
                    opacity: 0.1
                  }
                },
                track: {
                  background: '#efefef',
                  strokeWidth: '100%',
                  margin: 0, // margin is in pixels
                },
            
                dataLabels: {
                  show: true,
                  value: {
                    offsetY:-7,
                    color: '#111',
                    fontSize: '20px',
                    show: true,
                  }
                }
              }
            },
            fill: {
                colors: ['#1dc624'],
            },
            stroke: {
            },
            labels: [''],
            responsive: [{
                breakpoint: 575,
                options: {
                    chart: {
                        height: 150,
                    }
                }
            }]
        };
      }

  ngOnInit(): void {
  }

}
