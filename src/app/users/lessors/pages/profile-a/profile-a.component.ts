import { Component, OnInit , AfterViewInit} from '@angular/core';
import {LessorsService} from "../../services/lessors.service";
import {Lessor} from "../../model/lessor";
import {StorageService} from "../../../../services/storage.service";
@Component({
  selector: 'app-profile-a',
  templateUrl: './profile-a.component.html',
  styleUrls: ['./profile-a.component.css']
})
export class ProfileAComponent implements OnInit,AfterViewInit {

  nombre="01";
  CurrentUserLessor:Lessor
  CurrentUserId:string;
  constructor(private lessorS:LessorsService, private storageSer: StorageService) {
    this.CurrentUserLessor={}  as Lessor;
    this.CurrentUserId="";
  }
  obtenerCurrentLessor(){
    this.CurrentUserId=this.storageSer.getLh("lessor")
  }
  getbyid(id:any){
    this.lessorS.getById(id).subscribe((response: any)=>{
      this.CurrentUserLessor=response;


      console.log(response.content);
    });

  }
  ngOnInit(): void {
    this.obtenerCurrentLessor();
    this.getbyid(this.CurrentUserId);

  }
  ngAfterViewInit() {
    this.nombre=this.lessorS.CurrentdataLessor.name;
  }


}
