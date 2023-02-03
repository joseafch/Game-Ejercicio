import { moleInterface } from './../../models/mole.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-g-mole',
  templateUrl: './g-mole.component.html',
  styleUrls: ['./g-mole.component.scss']
})
export class GMoleComponent implements OnInit{
@Input() mole:moleInterface []=[{
  img:"./assets/public/exercise-2/mole.png",
  check: false,
  selec:false,
}]
inicialMole?:moleInterface[]
time:any=60;
ngOnInit(){
this.score=0
}
score:any = 0
hit(){
  this.score++
}
stop(){
  this.time=0
}
boton(){
 if(this.time===0){
this.time=60
 }else{
  this.time--
  setTimeout(()=>
  this.mole = this.randormizer(this.mole)
    ,300)
    // setTimeout(()=>
    // this.mole = this.randormizer(this.mole)
    //   ,1000)
    


    setTimeout(()=>
    this.boton() //al llamar a la funcion dentro de la funcion haces un bucle infinito
    ,1000)
  }  
    
    
}
randormizer(randormizer:any){
  return randormizer.sort(()=> 0.5 - Math.random())
}

}