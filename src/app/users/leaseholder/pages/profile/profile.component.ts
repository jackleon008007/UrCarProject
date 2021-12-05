import { Component, OnInit, AfterViewInit } from '@angular/core';
import {LeaseholderService} from "../../services/leaseholder.service";
import{Leaseholder} from "../../model/leaseholder";
import {Lessor} from "../../../lessors/model/lessor";
import {LessorsService} from "../../../lessors/services/lessors.service";
import {StorageService} from "../../../../services/storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {


  CurrentUserId:string;
  CurrentUserLeaseholder:Leaseholder;
  constructor(private leaseholderS:LeaseholderService, private storageSer:StorageService) {
    this.CurrentUserLeaseholder={}  as Leaseholder;
    this.CurrentUserId="";
  }
  obtenerCurrentLessor(){
    this.CurrentUserId=this.storageSer.getLh("leaseH")
  }

  ngOnInit(): void {
    this.obtenerCurrentLessor()
    console.log(this.CurrentUserId);
    this.getbyid(this.CurrentUserId)
  }
  ngAfterViewInit() {

  }
  getbyid(id:any){
    this.leaseholderS.getById(id).subscribe((response: any)=>{
      this.CurrentUserLeaseholder=response;


      console.log(response.content);
    });

  }

}
