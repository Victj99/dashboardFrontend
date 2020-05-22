import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
})
export class PiechartComponent implements OnInit, AfterViewInit {

  @Input() dataChart: any;
  @Input() chartTitle: string;

  @ViewChild('canvasChart') canvas: ElementRef;

  pieChart: any = [];

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.pieChart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'pie',
      data: this.dataChart,
      options: {
        responsive: true
      }
    });
  }
}
