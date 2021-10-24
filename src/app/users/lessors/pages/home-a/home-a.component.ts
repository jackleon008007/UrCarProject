import { Component, OnInit, AfterViewInit } from '@angular/core';
import {LessorsService} from "../../services/lessors.service";
import {Lessor} from "../../model/lessor";

@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.component.html',
  styleUrls: ['./home-a.component.css']
})
export class HomeAComponent implements OnInit,AfterViewInit {

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
