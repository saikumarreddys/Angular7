import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {SupplierRoutes} from '../Routing/CustomerApp.Supplierrouting'


import { SupplierComponent } from '../Supplier/CustomerApp.Suppliercomponent'

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    RouterModule.forRoot(SupplierRoutes),
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
