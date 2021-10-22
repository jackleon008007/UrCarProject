import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {CarsService} from "../../../arrendadores/services/cars.service";
import {Car} from "../../../arrendadores/model/cars";

import {MatTableDataSource} from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';
import { NgForm } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { CarFormComponent } from '../car-form/car-form.component';
import { Params } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})



export class CarsComponent implements OnInit {

  dataList: Car[] = [];

  carData: Car;
  dataSource: MatTableDataSource<any>;

  @ViewChild( MatPaginator, { static : true })
  paginator!: MatPaginator;
  @ViewChild( MatSort)
  sort!: MatSort;

  constructor(private carService: CarsService) {
    this.dataList = {} as Car[];

    this.dataSource= new MatTableDataSource<any>();
    this.carData= {} as Car;
  }

  getAllCars(){
    this.carService.getAll().subscribe((response: any)=>{
      this.dataList = response;
      this.dataSource= response;
    })
  }
  addCar(i:number){
    this.carData.id = i;
    this.carData.image="../assets/cars/car8.png";
    this.carData.title="NUEVO AU";
    this.carData.price=600;
    this.carData.description="mejor auto de l mundo prar rod{pandnajdbsj,dvjav,jcahda";
    this.carService.create(this.carData).subscribe((response: any) =>{
      this.dataSource.data.push({...response });
      this.dataSource.data = this.dataSource.data.map((o: any) => {return o;});
    });
  }
  deleteItem(id: number){
    this.carService.delete(id).subscribe(()=>{
      this.dataSource.data = this.dataSource.data.filter((o: Car)=>{
        return o.id!==id ? o: false;
      });
    });
    console.log(this.dataSource.data);
  }
  ngOnInit() {
   this.getAllCars();
  }






 /* fetchElement(id: string){
    this.carService.getById(id)
    .subscribe(dataList=>{
      this.dataList[1] = dataList;
      });

  }

   createElement(){
     const newElement: Car = {
       id: '88',
       title: 'nuevo elemento',
       image: 'assets/cars/car4',
       price: 300,
       description: 'fasjbfkjajfshkjfhkjfhs'
     }

     this.carService.create(newElement)
     .subscribe(dataList=>{
       console.log(this.dataList);

     })
   }*/





}
