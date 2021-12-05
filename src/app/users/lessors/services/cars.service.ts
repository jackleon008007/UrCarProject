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
  //basePath='http://localhost:3000/cars_x'
  basePath='https://appurcargroup.herokuapp.com/api/v1/post'

  basePath1='https://appurcargroup.herokuapp.com/api/v1/lessor'

  //basePath='http://localhost:8080/api/v1/post'
  //basePath1='http://localhost:8080/api/v1/lessor'

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

  create(item:any, lessorid:any):Observable<Car>{
    return this.http.post<Car>(`${this.basePath1}/${lessorid}/post`,JSON.stringify(item),this.httpOptions)
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
    return this.http.get<Car>(`${this.basePath1}/${userid}/post`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

  update(id:any, item: any): Observable<Car>{
    return this.http.put<Car>(`${this.basePath1}/post/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  delete(id:any, lessorId:any): Observable<Car>{
    return this.http.delete<Car>(`${this.basePath1}/${lessorId}/post/${id}`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

  //--------------------------
}
