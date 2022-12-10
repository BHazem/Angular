import { Injectable } from '@angular/core';
import { listenerCount } from 'process';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {

  constructor() { }

  getNumberOf(list:any[], critiria:string, value:any){
    return list.filter((v)=> v[critiria] == value).length
 }
}
