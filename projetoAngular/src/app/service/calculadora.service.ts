import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  public contas = [];
  constructor() { }

  somar(a, b) {
    // adicionar nos calculos
    return a + b;
  }

  subtrair(a, b) {
    // adicionar nos calculos
    return a - b;
  }

  dividir(a, b) {
    // adicionar nos calculos
    return a/b;
  }

  multiplicar(a,b) {
    // adicionar nos calculos
    return a * b;
  }


}