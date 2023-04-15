import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queen-componente',
  templateUrl: './queen-componente.component.html',
  styleUrls: ['./queen-componente.component.css']
})
export class QueenComponenteComponent implements OnInit{
  ngOnInit(){
    let num:number=30;
    let any:any="Las Rozas";
    let unknown:unknown="Softtek";
    console.log("Esto es un String");
    let nombre:string="Gonzalo";
    console.log(`Ejemplo backticks: mi nombre es ${nombre}`);
    console.log("Esta es mi edad: " + num);
    console.log("Dato de tipo booleano: " + true);
    console.log('Any: ' + "Vivo en : " + any);
    console.log("Unknown: " + "Hago prácticas en " + unknown);
  }



}
