import { Component, OnInit,OnDestroy } from '@angular/core';
import {ExpensesService} from "../expenses.service";
import {Expense} from "../../models/expense.model";
import {Router,ActivatedRoute} from "@angular/router";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit,OnDestroy {

  expenses:Expense[];
  viewExpense:Expense;
  isSelected:boolean = false;
  Subscribe:Subscription;
  constructor(private expenseService:ExpensesService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.expenses = this.expenseService.getExpenses();
    this.Subscribe = this.expenseService.expensesChanged.subscribe((data:Expense[]) => {
      this.expenses = data;
    });
  }

  onSelect(index:string){
    this.router.navigate([index],{relativeTo:this.activatedRoute});
  }

  ngOnDestroy(){
    this.Subscribe.unsubscribe();
  }

  
}
