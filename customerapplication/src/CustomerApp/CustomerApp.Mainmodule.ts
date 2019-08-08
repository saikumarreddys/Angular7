import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {MainRoutes} from './Routing/CustomerApp.Mainrouting'

import { CustomerComponent } from './Customer/CustomerApp.Customercomponent'
import { HomeComponent } from './Home/CustomerApp.Homecomponent'
import { SupplierComponent } from './Supplier/CustomerApp.Suppliercomponent'
import { MasterComponent } from './Home/CustomerApp.Mastercomponent'

@NgModule({
  declarations: [
    CustomerComponent,HomeComponent,SupplierComponent,MasterComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
