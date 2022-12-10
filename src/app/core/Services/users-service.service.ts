import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get("http://localhost:3000/listUsers");
  }

  

  getUserByTodoId(id : number):Observable<any>
  {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
  }

}
