import { Component } from '@angular/core';

import { SupplierComponent } from '../Supplier/CustomerApp.Suppliercomponent';


export const SupplierRoutes = [

    { path :"Home", loadchildren : '../Home/CustomerApp.Mainmodule#MainModule' },
    { path:"customer",loadchildren:'../Customer/CustomerApp.Customermodule#CustomerModule'},
    { path:"supplier",component:SupplierComponent}

]

