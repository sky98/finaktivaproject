import { Component } from '@angular/core';
import { NumberInterface } from './interfaces/number.interface';
import { opcionesSelect } from './interfaces/opcionesSelect.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'finaktivaProject';

  controlButton: boolean = true
  numeroNuevo!: number;
  valorInput!: number 
  arrayNumeros: NumberInterface[] = []

  listaOpciones: opcionesSelect[] = [
    { id: 1, texto: 'Ordenar de mayor a menor' },
    { id: 2, texto: 'Ordernar de menor a mayor' },
    { id: 3, texto: 'Sumar Todos' },
    { id: 4, texto: 'Multiplicar' }
  ]

  controlValorinput(event: any){    
    if(event.target.value != ''){
      this.controlButton = false
    }
    else{
      this.controlButton = true
    }
    this.numeroNuevo = event.target.value
  }

  controlInput(event: any){
    return event.charCode >= 48 && event.charCode <= 57
  }

  valorSelect(valor: any){
    this.limpiarArray()
    switch (valor){
      case '1': this.ordenarMayorAMenor(); break;
      case '2': this.ordenarMenorAMayor(); break;
      case '3': this.sumatoria(); break;
      case '4': this.multiplicar(); break;
    } 
  }

  agregarNumeroArray(){
    this.arrayNumeros.push({ id: this.numeroNuevo, descripcion: `${this.numeroNuevo}`, numero: this.numeroNuevo, accion: '' })
    this.numeroNuevo = Number('}qweqwewq')
    this.controlButton = true
  }

  sumatoria(){
    let sumatoria = 0;
    this.arrayNumeros.forEach(element => {
      sumatoria = Number(sumatoria) + Number(element.numero)
    }); 
    this.arrayNumeros.push({ id: Number('asd'), descripcion: `Sumatoria`, numero: Number('asjhas'), accion: `${sumatoria}` })
  }
  
  limpiarArray(){
    this.arrayNumeros = this.arrayNumeros.filter(x => x.descripcion!='Sumatoria')
    this.arrayNumeros.forEach(element => {
      element.accion = ''
    });
  }

  multiplicar(){
    this.arrayNumeros.forEach(element => {
        element.accion = `${element.numero*element.numero}`
    });    
  }

  ordenarMenorAMayor(){
    this.arrayNumeros.sort((a,b) => a.numero - b.numero)
  }

  ordenarMayorAMenor(){
    this.arrayNumeros.sort((a,b) => b.numero - a.numero)
  }

}
