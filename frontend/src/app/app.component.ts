import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PropertyCardComponent} from './property/property-card/property-card.component';
import {ProprtyListComponent} from './property/proprty-list/proprty-list.component';
import {MenuBarComponent} from  './menu-bar/menu-bar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,PropertyCardComponent,ProprtyListComponent , MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
}
