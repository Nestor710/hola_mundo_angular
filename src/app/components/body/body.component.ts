import { from } from 'rxjs';
import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class bodyComponent{

    mostrar = true;

    frase:any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    }

    personajes: string[] = ['Spiderman', 'Hulk', 'DeadPool', 'Winter Soldier'];

    ocultar = true;

    titulo:any = {
        pelicula: 'PELICULA',
        nombrePelicula:['Iron Man','Capitan america: el primer vengador','El increible Hulk']
    }
}

