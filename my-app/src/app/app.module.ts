import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {component1} from "./component1";
import { HeroesComponent } from './heroes/heroes.component'



@NgModule({
  declarations: [
    AppComponent,
    component1,
    HeroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
