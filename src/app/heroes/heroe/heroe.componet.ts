import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.compoent.html'
})
export class HeroeComponent{

    nombre: string = "Bruce Waine";
    NombreHeroe: string = "BATMAN"

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    concatenar(): string{
        return `Por el dia es: ${this.nombre} Pero Por las noches es ${this.NombreHeroe}`;
    }

    cambiarNombre(): void{
        this.nombre = 'Peter Parker'
    }
    
    cambiarNomHeroe(): void{
        this.NombreHeroe = 'Spiderman'
    }
}