import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms"
import{HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LessorsService} from "../../users/lessors/services/lessors.service";
import {LeaseholderService} from "../../users/leaseholder/services/leaseholder.service";
import {Lessor} from "../../users/lessors/model/lessor";
import {Leaseholder} from "../../users/leaseholder/model/leaseholder";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  typeUserClient="";
  dataUserLessor:Lessor;
  dataUserLeaseholder:Leaseholder;

  constructor(private formBuilder:FormBuilder, private http: HttpClient,
              private router:Router, private lessorsS:LessorsService,
              private leaseholderS:LeaseholderService) {
    this.dataUserLessor={} as Lessor;
    this.dataUserLeaseholder={} as Leaseholder;

  }



  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login(){
    if(this.typeUserClient==="Arrendador"){
      this.http.get<any>("http://localhost:3000/arrendadores")
        .subscribe(res=>{
            const user =res.find((a:any)=>{
              this.dataUserLessor=a;
              return a.email===this.loginForm.value.email&&a.password===this.loginForm.value.password
            });
            if(user){
              alert("login successfully");
              this.loginForm.reset();
              this.lessorsS.CurrentdataLessor=this.dataUserLessor
              this.router.navigate(['lessors'])

            }
            else{
              alert("lessors not found");
            }
          },
          err=>{
            alert("something went wrong");
          })


    }
    else if(this.typeUserClient==="Arrendatario"){
      this.http.get<any>("http://localhost:3000/arrendatarios")
        .subscribe(res=>{
            const user =res.find((a:any)=>{
              this.dataUserLeaseholder=a;
              return a.email===this.loginForm.value.email&&a.password===this.loginForm.value.password
            });
            if(user){
              alert("login successfully");
              this.loginForm.reset();
              this.leaseholderS.CurrentLeaseHolder=this.dataUserLeaseholder;
              this.router.navigate(['leaseholder'])
            }
            else{
              alert("lessors not found");
            }
          },
          err=>{
            alert("something went wrong");
          })


    }

  }


}
