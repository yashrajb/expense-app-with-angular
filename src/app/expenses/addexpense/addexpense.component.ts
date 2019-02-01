import { Component, OnInit,OnDestroy } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {FormGroup,FormControl,Validators,ValidationErrors} from "@angular/forms";
import * as moment from "moment";
import {ExpensesService} from "../expenses.service";
import { Expense } from 'src/app/models/expense.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit,OnDestroy {
 
  moment = moment();
  paramsSubscription:Subscription;
  isEdit:boolean = false;
  indexForEdit:number
  form:FormGroup;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private expensesService:ExpensesService) { }
 
  ngOnInit() {

    this.paramsSubscription = this.activatedRoute.params.subscribe((param) => {
      this.isEdit = param["id"]===undefined?false:true;
      this.indexForEdit = +param["id"];
    });
    
    var name = "";
    var date = this.moment.format(moment.HTML5_FMT.DATE);
    var time = this.moment.format(moment.HTML5_FMT.TIME);
    var expense=0;
    var desc = "";

    if(this.isEdit){
      let expenseEdit = this.expensesService.getExpense(this.indexForEdit);
      name = expenseEdit["name"];
      date = expenseEdit["date"];
      time = moment(expenseEdit["time"],"hh:mm").format("HH:MM");
      expense = expenseEdit["expense"];
      desc = expenseEdit["desc"];
    }

    this.form = new FormGroup({
      name:new FormControl(name,Validators.required),
      date:new FormControl(date,Validators.required),
      time:new FormControl(time,Validators.required),
      expense:new FormControl(expense,[Validators.required,this.validateNumber.bind(this)]),
      desc:new FormControl(desc,Validators.required)
    }); 
  }

  validateNumber(control:FormControl):ValidationErrors|null{
    return control.value>0?null:{
      "validatedNumber":false
    }
  }

  onSubmit(){

      if(this.isEdit){
        this.expensesService.updateExpense(this.indexForEdit,this.form.value);
      }else {
        let {name,date,time,expense,desc} = this.form.value;
        let newExpense = new Expense(name,date,time,expense,desc);
        this.expensesService.addExpense(newExpense);
      }
     this.isEdit = false;

     this.router.navigate(["/expenses"]);
  }

  onReset(){
    this.form.reset({
      date:this.moment.format(moment.HTML5_FMT.DATE),
      time:this.moment.format(moment.HTML5_FMT.TIME),
      expense:0
    });
    this.isEdit = false;
  }

  onCancel(){
    this.router.navigate(["../../"]);
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
