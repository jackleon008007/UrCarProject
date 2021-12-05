import {Component, OnInit, ViewChild} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Reservation} from "../../../leaseholder/model/reservation";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ReservationService} from "../../../leaseholder/services/reservation.service";
import {LessorsService} from "../../services/lessors.service";
import {StorageService} from "../../../../services/storage.service";

@Component({
  selector: 'app-reservations-a',
  templateUrl: './reservations-a.component.html',
  styleUrls: ['./reservations-a.component.css']
})
export class ReservationsAComponent implements OnInit {

  color: ThemePalette = 'accent';


  reservaData: Reservation;
  dataSource1: MatTableDataSource<any>;

  displayedColumns: string[] = ['id','title','price','ID-cars','actions'];

  @ViewChild( MatPaginator, { static : true })
  paginator!: MatPaginator;
  @ViewChild( MatSort)
  sort!: MatSort;


  currenUserLessor:string;
  constructor(private reservaService: ReservationService, private lessorserv:LessorsService,
              private storageserv:StorageService) {
    this.reservaData= {} as Reservation;
    this.dataSource1= new MatTableDataSource<any>();
    this.currenUserLessor="";
  }

  obtenerCurrentLessor(){
    this.currenUserLessor=this.storageserv.getLh("lessor")
  }
  getAllReservs(){
    this.obtenerCurrentLessor();
    this.reservaService.getAllByLessor(this.currenUserLessor).subscribe((response: any)=>{
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
