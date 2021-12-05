import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  setLs(key:string, data:any) {
    try{
      localStorage.setItem(key,JSON.stringify(data))
    }catch (e) {
      console.log(e);
    }
  }
  setLh(key:string, data:any){
    try{
      localStorage.setItem(key,JSON.stringify(data))
    }catch (e) {
      console.log(e);
    }
  }

  getLh(key:string){
    return <string>localStorage.getItem(key);
  }
  getLs(key:string){
      return <string>localStorage.getItem(key);
  }
}
