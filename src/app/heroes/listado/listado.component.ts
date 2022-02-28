import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

   heroes:string[]=['H1','H2','H3','H4','H5'];
   public heroeBorrado:string = '';

  borrarHeroe(indice:number){
    this.heroeBorrado = this.heroes[indice];
     this.heroes.splice(indice,1);

  }

  agregarHeroe(nombre:string){
   let indice: number = this.heroes.length;
   console.log(indice);
    this.heroes.push(nombre);
  }
}
