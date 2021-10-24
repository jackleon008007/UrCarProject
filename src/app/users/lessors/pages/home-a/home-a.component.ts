import { Component, OnInit, AfterViewInit } from '@angular/core';
import {LessorsService} from "../../services/lessors.service";

@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.component.html',
  styleUrls: ['./home-a.component.css']
})
export class HomeAComponent implements OnInit,AfterViewInit {

  nombre="";
  constructor(private lessorS:LessorsService) {
    this.nombre=this.lessorS.CurrentdataLessor.name;
  }

  ngOnInit(): void {
    this.nombre=this.lessorS.CurrentdataLessor.name;
  }
  ngAfterViewInit() {
    this.nombre=this.lessorS.CurrentdataLessor.name;
  }


}
