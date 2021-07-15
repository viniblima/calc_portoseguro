import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  item1 = null;
  item2 = null;
  funcao = null;
  result = null;
  constructor() { }

  setarValor(valor: any) {
    this.result = null;
    if (this.item1 != null) {
      this.item2 = valor;
    } else {
      this.item1 = valor;
    }
  }

  limparValor() {
    this.item1 = null;
    this.item2 = null;
    this.funcao = null;
    this.result = null;
  }

  setarFuncao(funcaoValor) {
    if (this.item1 == null) {
      return;
    }
    this.funcao = funcaoValor;
  }

  calc() {
    if (this.item1 != null && this.item2 != null) {
      let calc = {
        '/': this.item1 / this.item2,
        '*': this.item1 * this.item2,
        '-': this.item1 - this.item2,
        '+': this.item1 + this.item2
      }
      this.result = calc[this.funcao];
      this.item1 = null;
      this.item2 = null;
      this.funcao = null;
    } else {
      return;
    }
  }
}
