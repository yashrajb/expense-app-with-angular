import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddexpenseComponent } from './expenses/addexpense/addexpense.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { ProperdatePipe } from './pipes/properdate.pipe';
import { ExpenseDetailComponent } from './expenses/expense-detail/expense-detail.component';
import { ShowampmPipe } from './pipes/showampm.pipe';
import { NotfoundComponent } from './expenses/notfound/notfound.component';
import {NoexpenseComponent} from "./expenses/expenses-list/noexpense/noexpense.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpensesComponent,
    AddexpenseComponent,
    ExpensesListComponent,
    ProperdatePipe,
    ExpenseDetailComponent,
    ShowampmPipe,
    NotfoundComponent,
    NoexpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
