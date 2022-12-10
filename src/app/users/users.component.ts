import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../core/model/Utilisateur';
import { CalculServiceService } from '../core/Services/calcul-service.service';
import { UsersServiceService } from '../core/Services/users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers:any[] = [];
  inputValue!: string;
 
  test : boolean = false;
  test2:boolean = false;
  nbrOfUsers!: Number;
  constructor(private todoS : CalculServiceService,private UsersSer :UsersServiceService) { }

  
  Calcul(){
    this.nbrOfUsers = this.todoS.getNumberOf(this.listUsers,"username",this.inputValue);
   }
   affiche(){
    this.test = true;
  }
  affiche2(){
    this.test2 = true;
  }

  
  ngOnInit(): void {
    this.UsersSer.getUsers().subscribe(
      data => {
        this.listUsers = data
      }
    )
  }

}
