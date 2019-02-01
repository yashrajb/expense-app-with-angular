import { Injectable } from '@angular/core';
import {Expense} from "../models/expense.model";
import {Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  expenses:Expense[] = JSON.parse(localStorage.getItem("expenses"));
  expensesChanged = new Subject<Expense[]>();
  expenseEdit = new Subject<number>();
  getExpenses(){
   if(localStorage.getItem("expenses")){
    return JSON.parse(localStorage.getItem("expenses")).slice();
   }
    return JSON.parse(localStorage.getItem("expenses"));
  }

  addExpense(value:Expense){
    this.expenses.push(value);
    localStorage.setItem("expenses",JSON.stringify(this.expenses));
  }

  getExpense(index:number){
    return this.expenses[index];
  }

  removeExpense(index:number){
    this.expenses.splice(index,1);
    localStorage.setItem("expenses",JSON.stringify(this.expenses));
    this.expensesChanged.next(this.getExpenses());
  }

  updateExpense(index:number,updatedValues:Expense){
    this.expenses[index] = updatedValues;
    localStorage.setItem("expenses",JSON.stringify(this.expenses));
    this.expensesChanged.next(this.getExpenses());
  }
  constructor() {
    
   }

  
}
