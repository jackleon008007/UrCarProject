import { Component, OnInit , AfterViewInit} from '@angular/core';
import {LessorsService} from "../../services/lessors.service";
import {Lessor} from "../../model/lessor";
@Component({
  selector: 'app-profile-a',
  templateUrl: './profile-a.component.html',
  styleUrls: ['./profile-a.component.css']
})
export class ProfileAComponent implements OnInit,AfterViewInit {

  nombre="01";
  CurrentUserLessor:Lessor;
  constructor(private lessorS:LessorsService) {
    this.CurrentUserLessor={}  as Lessor;
  }

  ngOnInit(): void {
    this.nombre=this.lessorS.CurrentdataLessor.name;
    this.CurrentUserLessor=this.lessorS.CurrentdataLessor;
  }
  ngAfterViewInit() {
    this.nombre=this.lessorS.CurrentdataLessor.name;
  }


}
