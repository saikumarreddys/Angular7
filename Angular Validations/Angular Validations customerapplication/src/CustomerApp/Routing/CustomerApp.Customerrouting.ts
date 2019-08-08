import { Component } from '@angular/core';

import { CustomerComponent } from '../Customer/CustomerApp.Customercomponent';



export const CustomerRoutes = [

    { path :"Home", loadchildren: '../Home/CustomerApp.Mainmodule#MainModule' },
    { path:"customer",component:CustomerComponent},
    { path:"supplier",loadchildren: '../Supplier/CustomerApp.Suppliermodule#SupplierModule'}

]

