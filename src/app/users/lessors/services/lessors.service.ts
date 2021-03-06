import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Lessor} from "../model/lessor";
import {catchError, retry} from "rxjs/operators";
import {LessorsComponent} from "../pages/lessors/lessors.component";

@Injectable({
  providedIn: 'root'
})
export class LessorsService {
  //carros points
  //basePath='https://appurcargroup.herokuapp.com/api/v1/lessor/'
  basePath='https://appurcargroup.herokuapp.com/api/v1/lessor'

//data current lessor

  public CurrentdataLessor:Lessor;
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }


  constructor(private http:HttpClient) {
    this.CurrentdataLessor={} as Lessor;
  }

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

  create(item:any):Observable<Lessor>{
    return this.http.post<Lessor>(this.basePath,JSON.stringify(item),this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));

  }

  getById(id:any):Observable<Lessor>{
    return this.http.get<Lessor>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  getAll():Observable<Lessor>{
    return this.http.get<Lessor>(this.basePath,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

  update(id:any, item: any): Observable<Lessor>{
    return this.http.put<Lessor>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  delete(id:any): Observable<Lessor>{
    return this.http.delete<Lessor>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
}
