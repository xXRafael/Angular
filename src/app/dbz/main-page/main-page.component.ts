import { Component, Output } from '@angular/core';
import { Persona } from '../interface/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  personajes: Persona[] = [
    {
      nombre: 'Krillin',
      poder: 800
    },
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    },
  ]

  nuevo: Persona = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje( event: Persona){
    this.personajes.push(event)
  }
}
