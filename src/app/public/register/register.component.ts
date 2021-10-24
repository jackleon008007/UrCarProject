import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public signupForm !:FormGroup
  constructor(private formBuilder: FormBuilder) { }

  typeOfUser="";


  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name:[''],
      lastName:[''],
      years:[''],
      email:[''],
      phone:[''],
      password:[''],

    })
  }


  signUp(){
    if(this.typeOfUser=="Arrendador"){

    }
    else if(this.typeOfUser=="Arrendatario"){

    }
  }
}
