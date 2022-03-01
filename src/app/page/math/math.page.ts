import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.page.html',
  styleUrls: ['./math.page.scss'],
})
export class MathPage implements OnInit {
  numberOne: string;
  numberTwo: string;

  addResult: string;

  headerTitle: string;
  subTitle: string;

  constructor(

  ) { }

  ngOnInit() {
    this.headerTitle="Operaciones Matemáticas";
    this.subTitle="sub titulo 3"
  }

  addNumbers() {
    this.addResult = null;

    this.numberOne =
      this.numberOne != undefined && this.numberOne != ''
        ? this.numberOne
        : '0';
    this.numberTwo =
      this.numberTwo != undefined && this.numberTwo != ''
        ? this.numberTwo
        : '0';

    if (
      this.numberOne.match(/^[0-9]+(\.[0-9]+)?$/) &&
      this.numberTwo.match(/^[0-9]+(\.[0-9]+)?$/)
    ) {
      this.addResult =
        'La suma es: ' +
        (parseFloat(this.numberOne) + parseFloat(this.numberTwo)).toString();
    } else {
      this.addResult = 'Operación incorrecta';
    }
  }

  removeNumbers() {
    this.addResult = null;

    this.numberOne =
      this.numberOne != undefined && this.numberOne != ''
        ? this.numberOne
        : '0';
    this.numberTwo =
      this.numberTwo != undefined && this.numberTwo != ''
        ? this.numberTwo
        : '0';

    if (
      this.numberOne.match(/^[0-9]+(\.[0-9]+)?$/) &&
      this.numberTwo.match(/^[0-9]+(\.[0-9]+)?$/)
    ) {
      this.addResult =
        'La resta es: ' +
        (parseFloat(this.numberOne) - parseFloat(this.numberTwo)).toString();
    } else {
      this.addResult = 'Operación incorrecta';
    }
  }

  multiplyNumbers() {
    this.addResult = null;

    this.numberOne =
      this.numberOne != undefined && this.numberOne != ''
        ? this.numberOne
        : '0';
    this.numberTwo =
      this.numberTwo != undefined && this.numberTwo != ''
        ? this.numberTwo
        : '0';

    if (
      this.numberOne.match(/^[0-9]+(\.[0-9]+)?$/) &&
      this.numberTwo.match(/^[0-9]+(\.[0-9]+)?$/)
    ) {
      this.addResult =
        'La multiplic. es: ' +
        (parseFloat(this.numberOne) * parseFloat(this.numberTwo)).toString();
    } else {
      this.addResult = 'Operación incorrecta';
    }
  }

  divideNumbers() {
    this.addResult = null;

    this.numberOne =
      this.numberOne != undefined && this.numberOne != ''
        ? this.numberOne
        : '0';
    this.numberTwo =
      this.numberTwo != undefined && this.numberTwo != ''
        ? this.numberTwo
        : '0';

    if (
      this.numberOne.match(/^[0-9]+(\.[0-9]+)?$/) &&
      this.numberTwo.match(/^[0-9]+(\.[0-9]+)?$/)
    ) {
      if (parseFloat(this.numberTwo) == 0) {
        this.addResult = 'Divisor incorrecto';
      } else {
        this.addResult =
          'La división es: ' +
          (parseFloat(this.numberOne) / parseFloat(this.numberTwo)).toString();
      }
    } else {
      this.addResult = 'Operación incorrecta';
    }
  }
}
