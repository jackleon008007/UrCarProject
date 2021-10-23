import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostdetailsService {
  @Output() IdentificadorIdPost: EventEmitter<any> = new EventEmitter();
  idPost: number =0;
  constructor() { }
}
