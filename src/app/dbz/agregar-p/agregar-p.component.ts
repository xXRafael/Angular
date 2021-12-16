import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Persona } from '../interface/dbz.interface';

@Component({
  selector: 'app-agregar-p',
  templateUrl: './agregar-p.component.html',
  styleUrls: ['./agregar-p.component.css']
})
export class AgregarPComponent {
  @Input()
  nuevo: Persona = {
    nombre: '',
    poder: 0
  }

  @Output() 
  onNewCharacter: EventEmitter<Persona> = new EventEmitter(); 

  agregar(): any{
    if(this.nuevo.nombre.trim().length==0){
      return 0;
    }
    this.onNewCharacter.emit(this.nuevo);
    this.nuevo = {
      nombre: '', 
      poder: 0
    }

  }
}
