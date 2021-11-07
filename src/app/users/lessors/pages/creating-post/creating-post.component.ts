import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {Car} from "../../model/cars";
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LessorsService} from "../../services/lessors.service";

@Component({
  selector: 'app-creating-post',
  templateUrl: './creating-post.component.html',
  styleUrls: ['./creating-post.component.css']
})
export class CreatingPostComponent implements OnInit {

  carData: Car;
  dataList: Car[] = [];
  dataSource: MatTableDataSource<any>;

  public postCreateForm !:FormGroup

  constructor(private carService:CarsService,private formBuilder: FormBuilder, private lessorServ:LessorsService) {
    this.dataSource= new MatTableDataSource<any>();
    this.carData= {} as Car;
    this.dataList = {} as Car[];
  }

  ngOnInit(): void {
    this.postCreateForm=this.formBuilder.group({
      title: [''],
      price: [''],
      description: [''],
      fabricationYear: [''],
      idOwner: [''],
      modelCar: [''],
      numberSeats: [''],
      numberDoors: [''],
      bootType: [''],
      plate: [''],

    })

  }
  getAllCars(){
    this.carService.getAll().subscribe((response: any)=>{
      this.dataSource= response;
      this.dataList = response;
    })
  }
  addCar(){
    this.getAllCars();

    this.carData.id = this.dataList.length+1;
    this.carData.image="../assets/cars/car8.png";

    this.carData.title=this.postCreateForm.value.title;
    this.carData.price=this.postCreateForm.value.price;
    this.carData.description=this.postCreateForm.value.description;
    this.carData.likes=0;
    this.carData.fabricationYear=this.postCreateForm.value.fabricationYear;
    this.carData.idOwner=this.lessorServ.CurrentdataLessor.id;
    this.carData.modelCar=this.postCreateForm.value.modelCar;
    this.carData.numberSeats=this.postCreateForm.value.numberSeats;
    this.carData.numberDoors=this.postCreateForm.value.numberDoors;
    this.carData.bootType=this.postCreateForm.value.bootType;
    this.carData.plate=this.postCreateForm.value.plate;

    this.carService.create(this.carData).subscribe((response: any) =>{
      this.dataSource.data.push({...response });
      this.dataSource.data = this.dataSource.data.map((o: any) => {return o;});
    });
  }

}
