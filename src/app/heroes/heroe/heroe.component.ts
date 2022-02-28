import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'

})

export class HeroeComponent{
    nombre:string = 'Ironman';
    edad:number=45

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(){
        return `${this.edad} - ${this.nombre}`
    }

    cambiarNombre(nombre:string):void{
        this.nombre = nombre;
    }

    cambiarEdad(edad:number):void{
        this.edad=edad;
    }

}