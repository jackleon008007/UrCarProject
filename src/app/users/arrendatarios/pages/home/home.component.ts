import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
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
import {Router} from "@angular/router";
import {PostdetailsService} from "../../../../services/postdetails.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  color: ThemePalette = 'accent';
  @Input() dataIdcurrent: any;

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
  DataCarSource:MatTableDataSource<any>;


  constructor(private carService: CarsService,private reservService: ReservaService,
              private router: Router, private postDetails: PostdetailsService ) {
    this.carData= {} as Car;
    this.dataList= new Array<any>();
    this.reservNew={}as Reserva;
    this.reservDataSource= new MatTableDataSource<any>();
    this.DataCarSource= new MatTableDataSource<any>();
  }


  getAllCars(){
    this.carService.getAll().subscribe((response: any)=>{
      this.dataList=response;
      this.DataCarSource=response;
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
  navigateToPostDetails(currentId:number){
    this.postDetails.IdentificadorIdPost.emit({
      data:currentId
    })
    this.postDetails.idPost=currentId;
    this.router.navigate(['arrendatarios/PostDetails']);
  }



  UpdateCar(idCarPost:number){
    this.carService.getById(idCarPost).subscribe((response:any)=>{
      this.carData=response;
    })
  }
  Addlike(idCarPost:number){
    this.UpdateCar(idCarPost);
    this.carData.likes= this.carData.likes+1;
    this.carService.update(this.carData.id, this.carData).subscribe((response: any)=>{
      this.dataList = this.dataList.map((o: Car)=>{
        if(o.id === response.id){
          o = response;
        }
        return o;
      });
    });
  }

}
