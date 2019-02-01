import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    
  }

}
