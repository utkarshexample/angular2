import {Component, OnInit } from '@angular/core'    
import { NgForm } from '@angular/forms';
import { Age } from '../employee/age.component'
import { Education } from '../employee/age.component'
@Component({

    selector : 'my-employee' ,
    templateUrl : 'employee.component.html',
    styleUrls:['employee.component.css']
    
})

export class EmployeeComponent {
      
    fullName:string;
    Email:string;
    erMsg1:string;
    erMsg2:string;
    num:number;
    Educations :Education[]=[{id:"B.Tech", name:"B.Tech"},{id:"BCA", name:"BCA"}, {id:"BSc", name:"BSc"}];
    x:number=0;
    age:Age[]=[{id:20, name:20},{id:21, name:21},{id:22, name:22}
        ,{id:23, name:23},{id:24, name:24}
        ,{id:25, name:25},{id:26, name:26}
        ,{id:27, name:27},{id:28, name:28}
        ,{id:29, name:29},{id:30, name:30}
    
    ];
    

    

    Validate(empForm: NgForm){

        console.log(empForm.value); 
        if( this.Email!==null && this.fullName!==null)
        {
          this.erMsg1="";
          this.erMsg2="";
        }
        if( this.Email==null && this.fullName==null)
        {
          this.erMsg1="*Please Enter Your Name";
          this.erMsg2="*Email Can not be empty";
        }
        if(this.Email==null || this.Email=="")
        {
            this.erMsg2="*Email Can not be empty";
        }
        if(this.fullName==null || this.fullName=="" )
        {
            this.erMsg1="*Name Can not be empty";
        }

        
        
      
}
}
