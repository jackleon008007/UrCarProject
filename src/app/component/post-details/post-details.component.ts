import { Component, OnInit } from '@angular/core';
import {PostdetailsService} from "../../services/postdetails.service";
import {CarsService} from "../../users/lessors/services/cars.service";
import {Car} from "../../users/lessors/model/cars";


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  DataCar:Car;
  constructor( public postDetails: PostdetailsService, private carsServe: CarsService) {
    this.DataCar= {}as Car;
  }
  dataId=0;


  ngOnInit(): void {
    this.dataId=this.postDetails.idPost;
    this.showPostDetails();
  }

  showPostDetails(){
    this.carsServe.getById(this.dataId).subscribe((response:any)=>{
      this.DataCar=response;
    })
  }

}
