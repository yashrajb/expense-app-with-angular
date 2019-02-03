import { NgModule } from '@angular/core';
import {ExpensesListComponent} from "./expenses/expenses-list/expenses-list.component";
import { AddexpenseComponent } from './expenses/addexpense/addexpense.component';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import {ExpenseDetailComponent} from "./expenses/expense-detail/expense-detail.component";
import { NotfoundComponent } from './expenses/notfound/notfound.component';
const routes:Routes = [
  {path:"",redirectTo:"/add",pathMatch:"full"},
  {path:"add",component:AddexpenseComponent},
  {path:"edit/:id",component:AddexpenseComponent},
  {path:"expenses",component:ExpensesListComponent,children:[
    {path:"",component:ExpenseDetailComponent},
    {path:":id",component:ExpenseDetailComponent}]},
  {path:"**",component:NotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
