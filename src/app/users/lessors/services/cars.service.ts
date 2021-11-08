import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

import {Car} from "../model/cars";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  //carros points
  basePath='http://localhost:3000/cars_x'


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
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('something happened with request, try again')
  }


  //para arrendador

  create(item:any):Observable<Car>{
    return this.http.post<Car>(this.basePath,JSON.stringify(item),this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));

  }

  getById(id:any):Observable<Car>{
    return this.http.get<Car>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  getAll():Observable<Car>{
    return this.http.get<Car>(this.basePath,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  getAllByUser(userid:any):Observable<Car>{
    return this.http.get<Car>(`${this.basePath}?idOwner=${userid}`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

  update(id:any, item: any): Observable<Car>{
    return this.http.put<Car>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  delete(id:any): Observable<Car>{
    return this.http.delete<Car>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
}
