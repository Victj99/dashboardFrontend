import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input() columns;
  @Input() dataSource;
  @Input() colTitle;

  constructor() { }

  ngOnInit(): void {
  }

}
