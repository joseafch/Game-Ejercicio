import { NgStyle } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-g-whos-is-it',
  templateUrl: './g-whos-is-it.component.html',
  styleUrls: ['./g-whos-is-it.component.scss']
})
export class GWhosIsItComponent {
@Input() people:any
 man=false
 woman=false
 //hair color
 hairBlonde=false
 hairRed=false
 hairPink=false
 hairBrown=false
 hairWhite=false
 hairBlack=false
 //bigote
 moustacheSi=false
moustacheNo=false
 //lentes
 glassesSi=false
 glassesNo=false
 //hat o cap
 hatSi=false
 hatNo=false
 //ropa
 clothesRed=false
 clothesOrange=false
 clothesGreen=false
 clothesWhite=false
 clothesBlack=false
 clothesPink=false
  //skin color
  skinColorLigth=false
  skinColorDarck=false
 //long Hair
 longHairYes=false
 longHairNO=false

youHave(question:any){
question=Boolean
}
}
