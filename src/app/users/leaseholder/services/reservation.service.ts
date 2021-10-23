import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Reservation} from "../model/reservation";
import {catchError, retry} from "rxjs/operators";
import{HomeComponent} from "../pages/home/home.component";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  //leaseholder points
  basePath='http://localhost:3000/reserva'


  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }


  constructor(private http:HttpClient) { }

  handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      //manejo errore por defecto
      console.log(`An error ocurred: ${error.error.message}`)
    }
    else{
      console.error(`Backend returned code ${error.status},body was:${error.error}`);
    }
    return throwError('something happened with request, try again later')
  }


  //para arrendat

  create(item:any):Observable<Reservation>{
    return this.http.post<Reservation>(this.basePath,JSON.stringify(item),this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));

  }

  getById(id:any):Observable<Reservation>{
    return this.http.get<Reservation>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  getAll():Observable<Reservation>{
    return this.http.get<Reservation>(this.basePath,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

  update(id:any, item: any): Observable<Reservation>{
    return this.http.put<Reservation>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  delete(id:any): Observable<Reservation>{
    return this.http.delete<Reservation>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }



}
