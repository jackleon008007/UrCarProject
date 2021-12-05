import { Injectable } from '@angular/core';
import {Lessor} from "../users/lessors/model/lessor";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Leaseholder} from "../users/leaseholder/model/leaseholder";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  //carros points
  //private basePath2='https://appurcargroup.herokuapp.com/api/v1/leaseHolder'

  //private basePath1='https://appurcargroup.herokuapp.com/api/v1/lessor'

  basePath2='https://appurcargroup.herokuapp.com/api/v1/leaseHolder'
  basePath1='https://appurcargroup.herokuapp.com/api/v1/lessor'

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }


  constructor(private http:HttpClient) {
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


  getByemailLessor(email:string, password:string):Observable<Lessor>{
    return this.http.get<Lessor>(`${this.basePath1}/?=/${email}&&${password}`);
  }
  getByemailLeaseHolder(email:string,password:string):Observable<Leaseholder>{
    return this.http.get<Leaseholder>(`${this.basePath2}/?=/${email}&&${password}`);
  }
}
