import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import {Arrendatario} from "../model/arrendatario";
import {catchError, retry} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ArrendatariosService {

  //arrendatarios points
  basePath='http://localhost:3000/api/v1/arrendatarios'


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
    return throwError('something happened with request, try again')
  }


  //para arrendatarios

  create(item:any):Observable<Arrendatario>{
    return this.http.post<Arrendatario>(this.basePath,JSON.stringify(item),this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));

  }

  getById(id:any):Observable<Arrendatario>{
    return this.http.get<Arrendatario>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  getAll():Observable<Arrendatario>{
    return this.http.get<Arrendatario>(this.basePath,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

  update(id:any, item: any): Observable<Arrendatario>{
    return this.http.put<Arrendatario>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  delete(id:any): Observable<Arrendatario>{
    return this.http.delete<Arrendatario>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

}
