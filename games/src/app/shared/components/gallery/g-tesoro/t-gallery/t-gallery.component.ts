import { tesoroInterface } from './../../../models/tesoro.imterface';
import { Component, Input, OnInit } from '@angular/core';
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-t-gallery',
  templateUrl: './t-gallery.component.html',
  styleUrls: ['./t-gallery.component.scss']
})
export class TGalleryComponent implements OnInit{
@Input() tabla:tesoroInterface [] =[{
  id:1,
  imgX:"./assets/public/exercise-4/x.png"
}
]
win = false
count:any = 0
seledCard?: tesoroInterface;
ngOnInit(): void {
  this.tabla= this.random(this.tabla)
  
}
random(array : any){
  return array.sort(() => 0.5 - Math.random());
}
buscar(cards : tesoroInterface){
if(cards.id){
 
cards.check=true
this.count ++
setTimeout(()=>{
  this.win= true
},600)
// this.win= true
  

}else{
  this.seledCard = cards
  cards.selec = true
this.count ++

}
}
recarga(){
  location.reload()
}

}
