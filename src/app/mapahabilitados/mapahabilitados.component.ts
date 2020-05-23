import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mapahabilitados',
  templateUrl: './mapahabilitados.component.html',
  styleUrls: ['./mapahabilitados.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapahabilitadosComponent implements OnInit {

  html: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.html = this.http.get('./page/index.html');
  }

}
