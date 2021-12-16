import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../interface/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{
  @Input()
  personajes: Persona[] = [];
}
