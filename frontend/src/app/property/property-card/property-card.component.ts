import { Component } from "@angular/core";

@Component({
selector:"app-property-card",
standalone: true,
// template:`<h1>I am a Card!!!!</h1>`
templateUrl:'property-card.component.html',
styleUrl:'property-card.component.css'
})

export class PropertyCardComponent{
  Property:any={
    "jsdd":"khsd",
    "id":1,
    "home":"My hOme",
    "price":6000
  }

}
