import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {

  @Input() chartData: { data: Array<number>[], legend: string[], xLabels: string[] } = {
    data: [], 
    legend: [],
    xLabels: []}

  @Input() colors = ['#B8B8FF', '#7FF2CD', '#679fbb', '#FF9F40', '#F679A5', '#68BBFF',   '#89DCEB'];  

  @ViewChild('chartLine') chartLine!: ElementRef;
  data: any;
  options: any;

  ngAfterViewInit(){
    let datasets = [] 
    for(let i=0; i < this.chartData.data.length; i++){
      datasets.push({
        label: this.chartData.legend[i],
        data: this.chartData.data[i],
        borderColor: this.colors[i],
        backgroundColor : this.colors[i],
        tension: 0.25
      })
    }

    this.data = {
      labels: this.chartData.xLabels,
      datasets: datasets
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
            grid: {
              display: true,
              color: '#edf1f7',
            },
            ticks: {
              color: "#919db4" ,
            },
          },
        y:
          {
            grid: {
              display: true,
              color: '#edf1f7',
            },
            ticks: {
              color: "#919db4" ,
            },
          }
      },
      plugins:{
        legend: {
          position: 'top',
          labels: {
            fontColor: "#919db4",
          },
        }
      },
    };

    new Chart(this.chartLine?.nativeElement, {
      type: 'line', 
      data: this.data,
      options: this.options
    })

  }

}
