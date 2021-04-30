import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  titulo = 'Calculadora';
  descricao = 'Digite um numero, escolha a operação, clique em Calcular e confira o resultado:';
  n1: number;
  n2: number;
  operador: string;
  resultado: number;  

  constructor() { }

  ngOnInit(): void {
  }

  getOperador(operador) {
    this.operador = operador;
    console.log(operador);
  }

  calcular() {
    switch(this.operador) {
      case '+' :
        this.resultado = this.n1 + this.n2;
        break;
      case '-' :
        this.resultado = this.n1 - this.n2;
        break;
      case '/' :
        this.resultado = this.n1 / this.n2;
        break;
      case '*' :
        this.resultado = this.n1 * this.n2;
        break;
    }
    return this.resultado;
  }
}