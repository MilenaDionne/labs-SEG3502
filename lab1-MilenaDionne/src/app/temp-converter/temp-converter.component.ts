import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent implements OnInit {
  fahrenheitValue: number;
  valeur1: number;
  valeur2: number;
  valeur3: number;

  constructor() { }

  ngOnInit(): void {
  }

  convertCelsius(value: string): void {
    this.valeur1 = Number(value);
    this.fahrenheitValue = ((this.valeur1 * 9) / 5) + 32;
  }

  convertFahrenheit(value: string): void {
    this.fahrenheitValue = Number(value);
    this.valeur1 = ((this.fahrenheitValue - 32) * 5) / 9;
  }

  addition(value: string, value2: string): void {
    this.valeur1 = Number(value);
    this.valeur2 = Number(value2);
    this.valeur3 = this.valeur1 + this.valeur2;
  }

  soustraction(value: string, value2: string): void {
    this.valeur1 = Number(value);
    this.valeur2 = Number(value2);
    this.valeur3 = this.valeur1 - this.valeur2;
  }

  multiplication(value: string, value2: string): void {
    this.valeur1 = Number(value);
    this.valeur2 = Number(value2);
    this.valeur3 = this.valeur1 * this.valeur2;
  }

  division(value: string, value2: string): void {
    this.valeur1 = Number(value);
    this.valeur2 = Number(value2);
    this.valeur3 = this.valeur1 / this.valeur2;
  }
}
