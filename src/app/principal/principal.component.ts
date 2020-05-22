import { Component, OnInit } from '@angular/core';
declare function require(text: string);

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  color = require('randomcolor');
  showConc = false;
  showDep = false;

  pieOne = {
    datasets: [{
      data: [37934, 142584],
      backgroundColor: this.color.randomColor({ count: 2, format: 'rgb', seed: 27 }),
    }],
    labels: [
      'Callao',
      'Lima',
    ]
  };
  pieTwo = {
    datasets: [{
      data: [6927],
      backgroundColor: this.color.randomColor({ count: 1, format: 'rgb', seed: 27 }),
    }],
    labels: [
      'Ica',
    ]
  };
  pieThree = {
    datasets: [{
      data: [518, 710, 26],
      backgroundColor: this.color.randomColor({ count: 3, format: 'rgb', seed: 8 }),
    }],
    labels: [
      'Arequipa', 'Moquegua', 'Tacna'
    ]
  };
  pieFour = {
    datasets: [{
      data: [6213, 20424, 27848, 11318],
      backgroundColor: this.color.randomColor({ count: 4, format: 'rgb', seed: 13 }),
    }],
    labels: [
      'Cajamarca', 'Lambayeque', 'La Libertad', 'Ancash'
    ]
  };

  dataConc = [{ Concesionaria: 'Calida', Cantidad: 180518 }, { Concesionaria: 'Contugas', Cantidad: 6927 },
  { Concesionaria: 'Naturgy', Cantidad: 1114 }, { Concesionaria: 'Quavii', Cantidad: 65803 }];
  titlesConc = ['Concesionaria', 'Cantidad'];

  barConcesionaria = {
    datasets: [{
      label: 'Concesionaria',
      barThickness: 'flex',
      data: [180518, 6927, 1114, 65803],
      backgroundColor: this.color.randomColor({ count: 4, format: 'rgb', seed: 23 }),
    }],
    labels: [
      'Calida', 'Contugas', 'Naturgy', 'Quavii'
    ]
  };

  dataDep = [{ Departamento: 'Ancash', Cantidad: 11316 }, { Departamento: 'Arequipa', Cantidad: 518 },
  { Departamento: 'Cajamarca', Cantidad: 6213 }, { Departamento: 'Callao', Cantidad: 37934 }, { Departamento: 'Ica', Cantidad: 6927 },
  { Departamento: 'La', Cantidad: 27848 }, { Departamento: 'Lambayeque', Cantidad: 20424 }, { Departamento: 'Lima', Cantidad: 142586 },
  { Departamento: 'Moquegua', Cantidad: 570 }, { Departamento: 'Tacna', Cantidad: 26 }];
  titlesDep = ['Departamento', 'Cantidad'];

  barDepartamento = {
    datasets: [{
      label: 'Departamento',
      data: [11316, 518, 6213, 37934, 6927, 27848, 20424, 142586, 570, 26],
      backgroundColor: this.color.randomColor({ count: 10, format: 'rgb', seed: 13 }),
    }],
    labels: [
      'Ancash', 'Arequipa', 'Cajamarca', 'Callao', 'Ica', 'La', 'Lambayeque', 'Lima', 'Moquegua', 'Tacna'
    ]
  };


  constructor() { }

  ngOnInit(): void {
  }
}
