import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
})
export class ExamenPage implements OnInit {
  alertButtons = ['OK'];
  constructor(private router: Router, private location: Location) {

  }
  // objetos
  preguntas = [
    {
      id: 1,
      enunciado: "¿Cuál es el color del cielo?",
      opciones: ["azul", "verde", "rojo", "amarillo"],
    },
    {
      id: 2,
      enunciado: "¿Cuál es la capital de Francia?",
      opciones: ["París", "Londres", "Madrid", "Roma"],
    },
    {
      id: 3,
      enunciado: "¿Cuál es el número más grande?",
      opciones: ["1", "2", "3", "4"],
    },
    {
      id: 4,
      enunciado: "¿Cuál es el día de la semana?",
      opciones: ["lunes", "martes", "miércoles", "jueves"],
    },
    {
      id: 5,
      enunciado: "¿Cuál es la letra más grande?",
      opciones: ["A", "B", "C", "D"],
    },
  ];
  aux: number = 0;
  canti: number = this.preguntas.length - 1;
  alertOpen = false;
  auxPregunta = this.preguntas[this.aux];
  // ion-sheets-button
  public actionSheet = [
    {
      text: 'abandonar Desafio Teorico',
      handler: () => {
        this.location.back();
      }
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancelar',
      },
    },
  ];

  // avanzar y retroceder
  avanzar() {
    this.aux = this.aux + 1;
    this.auxPregunta = this.preguntas[this.aux];
  }

  retroceder() {
    this.aux = this.aux - 1;
    this.auxPregunta = this.preguntas[this.aux];
  }
  finalizar() {
    this.alertOpen = true;
  }
  seleccionarOpcion(opcion: string) { }

  ngOnInit() {
    this.aux
  }
}
