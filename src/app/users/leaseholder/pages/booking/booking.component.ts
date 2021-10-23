import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

import {FormGroup, FormControl} from '@angular/forms';

import { NgForm } from '@angular/forms';
import {MatList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import {newArray} from "@angular/compiler/src/util";
import {ReservationService} from "../../services/reservation.service";
import {Reservation} from "../../model/reservation";
import {MatIcon} from "@angular/material/icon";
import {HomeComponent} from "../home/home.component";


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


  constructor(private reservaService: ReservationService) {
    this.reservaData= {} as Reservation;
    this.dataSource1= new MatTableDataSource<any>();
  }


  getAllReservs(){
    this.reservaService.getAll().subscribe((response: any)=>{
      this.dataSource1.data=response;
    });
  }

  ngOnInit(): void {
    this.dataSource1.paginator = this.paginator;
    this.getAllReservs()

  }
  ngAfterViewInit(){
    this.dataSource1.sort = this.sort;
  }

  addReserv(){
    this.reservaData.id = 0;
    this.reservaService.create(this.reservaData).subscribe((response: any) =>{
      this.dataSource1.data.push({...response });
      this.dataSource1.data = this.dataSource1.data.map((o: any) => {return o;});
    });
  }
  deleteItem(id: number){
    this.reservaService.delete(id).subscribe(()=>{
      this.dataSource1.data = this.dataSource1.data.filter((o: Reservation)=>{
        return o.id!==id ? o: false;
      });
    });
    console.log(this.dataSource1.data);
  }
}
