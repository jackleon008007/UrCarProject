import { Component, OnInit } from '@angular/core';
import {LessorsService} from "../../services/lessors.service";

@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.component.html',
  styleUrls: ['./home-a.component.css']
})
export class HomeAComponent implements OnInit {

  nombre="";
  constructor(private lessorS:LessorsService) { }

  ngOnInit(): void {
    this.nombre=this.lessorS.CurrentdataLessor.name;
  }

}
