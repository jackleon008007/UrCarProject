import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

import {ReservationService} from "../../services/reservation.service";
import {Reservation} from "../../model/reservation";
import {LessorsService} from "../../../lessors/services/lessors.service";
import {LeaseholderService} from "../../services/leaseholder.service";
import {StorageService} from "../../../../services/storage.service";


@Component({
  selector: 'app-reservas',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit,AfterViewInit {


  color: ThemePalette = 'accent';


  reservaData: Reservation;
  dataSource1: MatTableDataSource<any>;

  displayedColumns: string[] = ['id','title','price','ID-cars','actions'];

  @ViewChild( MatPaginator, { static : true })
  paginator!: MatPaginator;
  @ViewChild( MatSort)
  sort!: MatSort;

  CurrentUserId:string;


  constructor(private reservaService: ReservationService, private leaseholderserv:LeaseholderService,
              private storageser:StorageService) {
    this.reservaData= {} as Reservation;
    this.dataSource1= new MatTableDataSource<any>();
    this.CurrentUserId="";
  }


  obtenerCurrentLessor(){
    this.CurrentUserId=this.storageser.getLh("leaseH")
  }
  getAllReservs(){
    this.obtenerCurrentLessor();
    this.reservaService.getAllByLeaseHolder(this.CurrentUserId).subscribe((response: any)=>{
      this.dataSource1.data=response.content;
    });
  }

  ngOnInit(): void {
    this.dataSource1.paginator = this.paginator;
    this.getAllReservs()

  }
  ngAfterViewInit(){
    this.dataSource1.sort = this.sort;
  }


  deleteItem(id: number, idpost:number){
    this.reservaService.delete(id,idpost).subscribe(()=>{
      this.dataSource1.data = this.dataSource1.data.filter((o: Reservation)=>{
        return o.id!==id ? o: false;
      });
    });
    console.log(this.dataSource1.data);
  }
}
