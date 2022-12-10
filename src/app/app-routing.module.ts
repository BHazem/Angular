import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', redirectTo:"Users",pathMatch:'full'},
  {path:'TodoList' , component: TodoListComponent},
  {path:'Users' , component: UsersComponent},
  {path:'TodoDetails/:id' , component: TodoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
