import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {CarsService} from "../../../arrendadores/services/cars.service";
import {Car} from "../../../arrendadores/model/cars";
import {Arrendatario} from "../../model/arrendatario";
import {ArrendatariosService} from "../../services/arrendatarios.service";
import {MatTableDataSource} from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';

import {ReservaService} from "../../services/reserva.service";
import { NgForm } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import {MatList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import {newArray} from "@angular/compiler/src/util";
import {Reserva} from "../../model/reserva";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  color: ThemePalette = 'accent';


  barato = false;
  estandar = false;
  lujoso=false;
  Cerca=false;
  opcion1=false;
  opcion2=false;


  carData: Car;

  @ViewChild( MatPaginator, { static : true })
  paginator!: MatPaginator;
  @ViewChild( MatSort)
  sort!: MatSort;


  dataList: Array<any>
  reservNew: Reserva;
  reservDataSource: MatTableDataSource<any>;



  constructor(private carService: CarsService,private reservService: ReservaService ) {
    this.carData= {} as Car;
    this.dataList= new Array<any>();
    this.reservNew={}as Reserva;
    this.reservDataSource= new MatTableDataSource<any>();
  }


  getAllCars(){
    this.carService.getAll().subscribe((response: any)=>{
      this.dataList=response;
    });
  }
  getAllReserv(){
    this.reservService.getAll().subscribe((response: any)=>{
      this.reservDataSource=response;
    });
  }

  addNewReserve(id:number,title:string,price:number){
    this.reservNew.title=title;
    this.reservNew.price=price;
    this.reservNew.idCar=id;
    this.reservService.create(this.reservNew).subscribe((response: any)=>{
      this.reservDataSource.data.push({...response});
      this.reservDataSource.data = this.reservDataSource.data.map((o: any) => {return o;});
    })
  }



  ngOnInit(): void {
    this.getAllCars()
    this.getAllReserv()
  }
  ngAfterViewInit(){

  }


}
