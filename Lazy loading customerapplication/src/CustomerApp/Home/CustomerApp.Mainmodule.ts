import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {MainRoutes} from '../Routing/CustomerApp.Mainrouting'


import { HomeComponent } from '../Home/CustomerApp.Homecomponent'

import { MasterComponent } from '../Home/CustomerApp.Mastercomponent'

@NgModule({
  declarations: [
    HomeComponent,MasterComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class MainModule { }
