import { mundosInterface } from './../../shared/components/models/mundos.interface';
import { GamesService } from './../../shared/components/services/games.service';
import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';


@Component({
  selector: 'app-memori',
  templateUrl: './memori.component.html',
  styleUrls: ['./memori.component.scss']
})
export class MemoriComponent implements OnInit {
constructor (private gamesService : GamesService){}

mundos:any
planetas :mundosInterface[] = [
  {
    id: 1,
    name: "earth",
    img: "../../../assets/public/exercise-1/earth.svg",
    // univese : "../../../assets/public/exercise-1/universe.svg",
    // tick: "../../../assets/public/exercise-1/tick.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "../../../assets/public/exercise-1/jupiter.svg",
    // univese : "../../../assets/public/exercise-1/universe.svg",
    // tick: "../../../assets/public/exercise-1/tick.svg",


  },
  {
    id: 3,
    name: "mars",
    img: "../../../assets/public/exercise-1/mars.svg",
    // univese : "../../../assets/public/exercise-1/universe.svg",
    // tick: "../../../assets/public/exercise-1/tick.svg",


  },
  {
    id: 4,
    name: "mercury",
    img: "../../../assets/public/exercise-1/mercury.svg",
    // univese : "../../../assets/public/exercise-1/universe.svg",
    // tick: "../../../assets/public/exercise-1/tick.svg",


  },
  {
    id: 5,
    name: "saturn",
    img: "../../../assets/public/exercise-1/saturn.svg",
    // univese : "../../../assets/public/exercise-1/universe.svg",
    // tick: "../../../assets/public/exercise-1/tick.svg",


  },
  {
    id: 6,
    name: "uranus",
    img: "../../../assets/public/exercise-1/uranus.svg",
    // univese : "../../../assets/public/exercise-1/universe.svg",
    // tick: "../../../assets/public/exercise-1/tick.svg",


  },
  {
    id: 7,
    name: "earth",
    img: "../../../assets/public/exercise-1/earth.svg",
    // univese : "../../../assets/public/exercise-1/universe.svg",
    // tick: "../../../assets/public/exercise-1/tick.svg",


  },
  {
    id: 8,
    name: "jupiter",
    img: "../../../assets/public/exercise-1/jupiter.svg",
    // univese : "../../../assets/public/exercise-1/universe.svg",
    // tick: "../../../assets/public/exercise-1/tick.svg",


  },
  {
    id: 9,
    name: "mars",
    img: "../../../assets/public/exercise-1/mars.svg",
    // univese : "../../../assets/public/exercise-1/universe.svg",
    // tick: "../../../assets/public/exercise-1/tick.svg",


  },
  {
    id: 10,
    name: "mercury",
    img: "../../../assets/public/exercise-1/mercury.svg",
    // univese : "../../../assets/public/exercise-1/universe.svg",
    // tick: "../../../assets/public/exercise-1/tick.svg",


  },
  {
    id: 11,
    name: "saturn",
    img: "../../../assets/public/exercise-1/saturn.svg",
    // univese : "../../../assets/public/exercise-1/universe.svg",
    // tick: "../../../assets/public/exercise-1/tick.svg",


  },
  {
    id: 12,
    name: "uranus",
    img: "../../../assets/public/exercise-1/uranus.svg",
    // univese : "../../../assets/public/exercise-1/universe.svg",
    // tick: "../../../assets/public/exercise-1/tick.svg",


  },
];
ngOnInit(){

  // this.gamesService.getCards().subscribe((res:any)=>{
  //   console.log(res);
  //   this.mundos= res
    
  // })
}
}
