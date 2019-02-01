import { Component, OnInit,OnDestroy } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {Expense} from "../../models/expense.model";
import { ExpensesService} from "../expenses.service"
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {

  indexForDetail:number;
  expense:Expense;
  paramSubscription:Subscription;
  constructor(private  expenseService:ExpensesService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscription = this.activatedRoute.params.subscribe((data) => {
      this.indexForDetail = +data.id;
      this.expense = this.expenseService.getExpense(this.indexForDetail);
    })
  }

  onDelete(){
    this.expenseService.removeExpense(this.indexForDetail);
    this.router.navigate(["/expenses"]);
  }

  onEdit(){
    this.router.navigate(['edit',this.indexForDetail]);
  }
  
}
