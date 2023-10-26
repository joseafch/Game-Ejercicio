import { mundosInterface } from './../models/mundos.interface';
import {
  Component,
  ElementRef,
  Input,
  makeEnvironmentProviders,
  Renderer2,
  ViewChild,
  OnInit,
} from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() planets: mundosInterface[] = [
    {
      id: 1,
      name: 'earth',
      img: './assets/public/exercise-1/earth.svg',
    },
  ]; // accinarle nustra interface a las variables que contengas los elementos de nuestra interface

  inicialPlanet?: mundosInterface[]; // guardamos el array inicial para poder usarlo para resetear los valores del las cartas
  selectedPlanet?: mundosInterface; //almacenamos los datos en una variable para luego compararlos con el segundo click

  intentos = 0;

  sucesoscount = 0;
  ngOnInit(): void {
    this.inicialPlanet =this.planets
    this.planets = this.randomizer(this.planets); // con esto se hace un ramdon de los objectos cada vez que se le hace un reloadin a la pagina
  } // el sort dependiendo del numero que tu devulvas sea positivo o negativo al poner 0.5 te hace un 50%  pa ponerlo antes o despues con el random
  randomizer(randomizer :any){
return randomizer.sort(() => 0.5 - Math.random()) // utilizamos esta funcion apra reutilizar el ramdonmizer
  }
  memori(planet: mundosInterface) {
    if (this.selectedPlanet) {
      // este elemento existe ?
      if (this.selectedPlanet.name === planet.name) {
        // aqui comparamos el segundo click si el nomre de la primera carta que seleccionamos es igual ala del segundo click
        planet.check = true;
        this.selectedPlanet.check = true;
        this.selectedPlanet.selec = false; // pasamos el selected a false para que se esconda el planeta ya q el solo se mostrata si el valor es verdadero
        this.selectedPlanet = undefined; //la comprobacion la pasamos a nul ya q no queremos que se pase ninguna otra compracion
        this.intentos++;
        this.sucesoscount++;
      } else {
        planet.selec = true;
        setTimeout(() => {
          planet.selec = false;
          this.selectedPlanet!.selec = false;
          this.selectedPlanet = undefined;
        }, 600);
        this.intentos++;
      }
    } else {
      this.selectedPlanet = planet; // pones la carta acomo estaba
      planet.selec = true; // a la carta se le agrega un selecte true para marcar que se quede marcao con el check
    }
  }
recarga(){
  location.reload()
}
  reset() {
    this.sucesoscount = 0;
    this.randomizer(this.inicialPlanet)
  }
}

// this.render2.setAttribute(this.imgcard.nativeElement,'src', datos.img);
// this.render2.setAttribute(this.imgcard.nativeElement,'src', "../../../assets/public/exercise-1/tick.svg");

// console.log(this.img1,'primer elemento');
// console.log(this.img2,'segundo elemento elemento');
// if(this.img1===this.img2){

//  this.image = document.querySelector('.img_card')
//   this.image.setAttribute('src',datos.img)

// image:any = this.imgcard.nativeElement

//   this.cardArray.push(datos.name)

// console.log(this.image);

//     this.img1=this.cardArray[0]
//     this.img2=this.cardArray[1]

//   console.log(this.cardArray,'planeta');
//   if(this.img2 && this.img1===this.img2){
//     for (const iterator of this.cardArray ) {
//   this.render2.setAttribute(this.imgcard.nativeElement,'src', "../../../assets/public/exercise-1/tick.svg");

//     }

//   this.cardArray=[]
//    console.log('son iguaales')
// }else if (this.img2 && this.img1!==this.img2){
//   console.log('no son iguaales')
//   this.cardArray=[]

// }
// @ViewChild('imgCard') imgcard!:ElementRef
// img2:any
// img1:any
