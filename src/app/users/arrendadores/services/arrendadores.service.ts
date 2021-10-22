import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Arrendador} from "../model/arrendador";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArrendadoresService {
  //carros points
  basePath='http://localhost:3000/api/v1/arrendadores'


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

  create(item:any):Observable<Arrendador>{
    return this.http.post<Arrendador>(this.basePath,JSON.stringify(item),this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));

  }

  getById(id:any):Observable<Arrendador>{
    return this.http.get<Arrendador>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  getAll():Observable<Arrendador>{
    return this.http.get<Arrendador>(this.basePath,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

  update(id:any, item: any): Observable<Arrendador>{
    return this.http.put<Arrendador>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  delete(id:any): Observable<Arrendador>{
    return this.http.delete<Arrendador>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
}
