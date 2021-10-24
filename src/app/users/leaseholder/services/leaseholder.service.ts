import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import {Leaseholder} from "../model/leaseholder";
import {catchError, retry} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class LeaseholderService {

  //leaseholder points
  basePath='http://localhost:3000/api/v1/arrendatarios'




  //leaseholder data User Current




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


  //para leaseholder

  create(item:any):Observable<Leaseholder>{
    return this.http.post<Leaseholder>(this.basePath,JSON.stringify(item),this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));

  }

  getById(id:any):Observable<Leaseholder>{
    return this.http.get<Leaseholder>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  getAll():Observable<Leaseholder>{
    return this.http.get<Leaseholder>(this.basePath,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

  update(id:any, item: any): Observable<Leaseholder>{
    return this.http.put<Leaseholder>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  delete(id:any): Observable<Leaseholder>{
    return this.http.delete<Leaseholder>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

}
