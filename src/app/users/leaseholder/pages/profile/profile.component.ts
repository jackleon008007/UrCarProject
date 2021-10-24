import { Component, OnInit, AfterViewInit } from '@angular/core';
import {LeaseholderService} from "../../services/leaseholder.service";
import{Leaseholder} from "../../model/leaseholder";
import {Lessor} from "../../../lessors/model/lessor";
import {LessorsService} from "../../../lessors/services/lessors.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  nombre="01";
  CurrentUserLeaseholder:Leaseholder;
  constructor(private leaseholderS:LeaseholderService) {
    this.CurrentUserLeaseholder={}  as Leaseholder;
  }

  ngOnInit(): void {
    this.nombre=this.leaseholderS.CurrentLeaseHolder.name;
    this.CurrentUserLeaseholder=this.leaseholderS.CurrentLeaseHolder;
  }
  ngAfterViewInit() {
    this.nombre=this.leaseholderS.CurrentLeaseHolder.name;
  }

}
