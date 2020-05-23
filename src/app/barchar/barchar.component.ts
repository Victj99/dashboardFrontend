import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-barchar',
  templateUrl: './barchar.component.html',
})
export class BarcharComponent implements OnInit, AfterViewInit {
  @Input() dataChart: any;
  @Input() chartTitle: string;
  @Input() type = 'bar';
  @Input() sort = true;
  @Input() order = 'asc';

  @ViewChild('canvasChart') canvas: ElementRef;

  pieChart: any = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.pieChart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: this.type,
      data: this.dataChart,
    });
  }
}
