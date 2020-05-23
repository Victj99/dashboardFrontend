import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.css']
})
export class CalloutComponent implements OnInit {

  @Input() type: string;
  @Input() color: string;
  @Input() icon = false;
  @Input() iname = 'home';
  @Input() title = 'Titulo';
  @Input() content = 'Contenido';

  constructor() { }

  ngOnInit(): void {
  }

}
