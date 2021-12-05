import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms"
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {LessorsService} from "../../users/lessors/services/lessors.service";
import {LeaseholderService} from "../../users/leaseholder/services/leaseholder.service";
import {Lessor} from "../../users/lessors/model/lessor";
import {Leaseholder} from "../../users/leaseholder/model/leaseholder";
import {LoginService} from "../../services/login.service";
import {parse} from "@angular/compiler/src/render3/view/style_parser";
import {StorageService} from "../../services/storage.service";

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
  idLessor:number=0;
  idleaseholder:number=0;
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private formBuilder:FormBuilder, private http: HttpClient,
              private router:Router, private lessorsS:LessorsService,
              private leaseholderS:LeaseholderService,
              private loginservice:LoginService,private localstorage: StorageService) {
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
      this.loginservice.getByemailLessor(this.loginForm.value.email,this.loginForm.value.password).subscribe((response: any)=>{
        if(response){
          this.dataUserLessor=response;
          this.idLessor=this.dataUserLessor.content[0].id;
          this.localstorage.setLs("lessor",this.idLessor);
          alert("login successfully");
          //this.grabar_currentLessor(this.dataUserLessor.password);
          this.loginForm.reset();
          //this.lessorsS.CurrentdataLessor=this.dataUserLessor
          console.log(this.dataUserLessor);
          this.router.navigate(['lessors'])
        }
        else{
          alert("lessors not found");
        }

      });

    }
    else if(this.typeUserClient==="Arrendatario"){
      this.loginservice.getByemailLeaseHolder(this.loginForm.value.email,this.loginForm.value.password).subscribe((response:any)=>{
        if(response){
          this.dataUserLeaseholder=response;
          this.idleaseholder=this.dataUserLeaseholder.content[0].id;
          console.log(this.idleaseholder);
          console.log(JSON.stringify(this.dataUserLeaseholder));
          this.localstorage.setLh("leaseH",this.idleaseholder);
          //this.grabar_currentLeaseHolder(this.dataUserLessor.password);
          alert("login successfully");
          this.loginForm.reset();
          //this.leaseholderS.CurrentLeaseHolder=this.dataUserLeaseholder
          console.log(this.dataUserLeaseholder);
          this.router.navigate(['leaseholder'])

        }
        else{
          alert("leaseholder not found");
        }
      });

    }

  }

  grabar_currentLessor(){

    //let idLs:string =idless;
   // localStorage.setItem("nombre",idLs);

  }
  grabar_currentLeaseHolder(){
    //let idLh:string =idleaseholder;
    //localStorage.setItem("nombre",idLh);
  }

}
