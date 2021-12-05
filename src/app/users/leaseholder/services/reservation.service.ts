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
  //basePathlessor='https://appurcargroup.herokuapp.com/api/v1/lessor/'
  //basePathleasehoolder='https://appurcargroup.herokuapp.com/api/v1/leaseHolder/'
  //basePathreservation='https://appurcargroup.herokuapp.com/api/v1/post/'


  basePathlessor='https://appurcargroup.herokuapp.com/api/v1/lessor'
  basePathleasehoolder='https://appurcargroup.herokuapp.com/api/v1/leaseHolder'
  basePathreservation='https://appurcargroup.herokuapp.com/api/v1/post'

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

  create(item:any, idpost:number):Observable<Reservation>{
    return this.http.post<Reservation>(`${this.basePathreservation}/${idpost}/reservation`,JSON.stringify(item),this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));

  }


  //getById(id:any):Observable<Reservation>{
  //  return this.http.get<Reservation>(`${this.basePath}/${id}`,this.httpOptions)
  //    .pipe(retry(2),catchError(this.handleError))
 // }
  getAllByLessor(id:string):Observable<Reservation>{
    return this.http.get<Reservation>(`${this.basePathlessor}/${id}/reservation`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  getAllByLeaseHolder(id:string):Observable<Reservation>{
    return this.http.get<Reservation>(`${this.basePathleasehoolder}/${id}/reservation`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

  update(id:any,idpost:any, item: any): Observable<Reservation>{
    return this.http.put<Reservation>(`${this.basePathreservation}/${idpost}/reservation/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  delete(id:any, idpost:any): Observable<Reservation>{
    return this.http.delete<Reservation>(`${this.basePathreservation}/${idpost}/reservation/${id}`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }



}
