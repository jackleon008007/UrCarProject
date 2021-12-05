import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {CarsService} from "../../../lessors/services/cars.service";
import {Car} from "../../../lessors/model/cars";
import {Leaseholder} from "../../model/leaseholder";
import {LeaseholderService} from "../../services/leaseholder.service";
import {MatTableDataSource} from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';

import {ReservationService} from "../../services/reservation.service";
import { NgForm } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import {MatList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import {newArray} from "@angular/compiler/src/util";
import {Reservation} from "../../model/reservation";
import {Router} from "@angular/router";
import {PostdetailsService} from "../../../../services/postdetails.service";
import {StorageService} from "../../../../services/storage.service";


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

  weith:string ="";

  carData: Car;

  @ViewChild( MatPaginator, { static : true })
  paginator!: MatPaginator;
  @ViewChild( MatSort)
  sort!: MatSort;

  dataList: Array<any>;
  public listCars: any =[];
  reservNew: Reservation;
  reservDataSource: MatTableDataSource<any>;
  DataCarSource:MatTableDataSource<any>;

  CurrentUserId:string;
  constructor(private carService: CarsService,private reservService: ReservationService,
              private router: Router, private postDetails: PostdetailsService,
              private leaseholderserv: LeaseholderService,
              private storageservice:StorageService) {
    this.carData= {} as Car;
    this.dataList= new Array<any>();
    this.reservNew={}as Reservation;
    this.reservDataSource= new MatTableDataSource<any>();
    this.DataCarSource= new MatTableDataSource<any>();
    this.CurrentUserId="";
  }
  obtenerCurrentLessor(){
    this.CurrentUserId=this.storageservice.getLh("leaseH")
  }

  getAllCars(){
    this.obtenerCurrentLessor();
    this.carService.getAll().subscribe((response: any)=>{
      this.dataList=response.content;
      this.listCars=response.content;
      console.log(this.listCars);
      console.log(JSON.stringify(response));
      this.DataCarSource=response.content;
    });

  }

  searchCarPost(title:string){


  }
  getAllReserv(){
    this.obtenerCurrentLessor()
    this.reservService.getAllByLeaseHolder(this.CurrentUserId).subscribe((response: any)=>{
      this.reservDataSource=response.content;
      console.log(JSON.stringify(response));
    });
  }

  addNewReserve(id:number,title:string,price:number, idlessor:number){
    this.reservNew.title=title;
    this.reservNew.price=price;
    this.reservNew.lessorId=idlessor;
    this.reservNew.leaseHolderId=parseInt(this.CurrentUserId);
    this.reservNew.postId=id;
    this.reservService.create(this.reservNew,id).subscribe((response: any)=>{
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
    this.router.navigate(['leaseholder/PostDetails']);
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
