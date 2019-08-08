import {NgForm,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'
 
 
 export class Customer {
    CustomerCode : string = "";
    Customername : String ="";
    CustomerAmount: number=0;
    formcustgroup : FormGroup = null;
    constructor() {
        var _builder= new FormBuilder();
        this.formcustgroup= _builder.group({});
        this.formcustgroup.addControl('CustomerNamevalidator',new FormControl('',Validators.required));

        var formgroupcollection = [];
        formgroupcollection.push(Validators.required);
        formgroupcollection.push(Validators.pattern('^[0-9]{4,4}$'));
        this.formcustgroup.addControl('CustomerCodevalidator',new FormControl('',Validators.compose(formgroupcollection)));



    }
    


    }
