import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../service/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  titulo: string;
  descricao: string;
  n1: number;
  n2: number;
  operador: string;
  resultado: number;
  contas = [];

  constructor(private calculadoraService: CalculadoraService) { 
    this.contas = calculadoraService.contas;
  }

  ngOnInit(): void {
    this.titulo = 'Calculadora';
    this.descricao = 'Digite os valores, escolha a operação, clique em Calcular e veja o resultado!';
  }

  getOperador(operador) {
    this.operador = operador;
  }

  calcular() {
    let isValido = true;
    // validar as entradas
    if(this.n1 === undefined || this.n2 === undefined) {
      alert('Por favor digite os dois valores para poder calcular.');
      isValido = false;
    } else if(this.operador == '/' && this.n2 == 0) {
      alert('Não pode fazer divisão por 0. Por favor digite outro valor.');
      isValido = false;
    } else if (this.operador == undefined) {
      alert('Por Favor clique em um operador.');
      isValido = false;
    } 

    if(isValido) {
      // calcular
    switch(this.operador) {
      case '+' :
        this.resultado = this.calculadoraService.somar(this.n1, this.n2);
        break;
      case '-' :
        this.resultado = this.calculadoraService.subtrair(this.n1, this.n2);
        break;
      case '/' :
        this.resultado = this.calculadoraService.dividir(this.n1, this.n2);
        break;
      case '*' :
        this.resultado = this.calculadoraService.multiplicar(this.n1, this.n2);
        break;
    }
   
    this.calculadoraService.contas.push(this.n1 + ' ' + this.operador + ' ' + this.n2 + ' = ' + this.resultado);

    
    this.calculadoraService.contas.reverse();
    }
  }

  limparValores() {
    this.n1 = undefined;
    this.n2 = undefined;
    this.operador = '';
    this.resultado = undefined;
  }
}