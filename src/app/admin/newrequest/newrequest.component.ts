import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../data-api.service';
import { UserWService } from "../../user-w.service";
import { AccountInterface } from '../../models/account-interface'; 
import { TransactionInterface } from '../../models/transaction-interface'; 
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { isError } from "util";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})

export class NewrequestComponent implements OnInit {
  submitted = false;
  public waiting = false;
  title = 'bbev';
  navSidebarClass: boolean = true;
  hamburgerClass: boolean = false;

  constructor(
      public _uw:UserWService,
      public router: Router,
      private formBuilder: FormBuilder,
      public dataApi:DataApiService
  ) { }

  public transaction : TransactionInterface={
    type:"one",
    beneficiaryId:"",
    status:"new",
    ammount: 0
  }; 
  public isError = false;
  public isLogged =false;
  ngFormOne: FormGroup;
  ngFormTwo: FormGroup;
  ngFormThree: FormGroup;
  ngFormFour: FormGroup;
  message = ""; 
  
  get fval() {
    return this.ngFormOne.controls;
  }

  public saveTransaction(transaction){
    return this.dataApi.saveTransaction(this.transaction)
       .subscribe(transaction => this.router.navigate(['/admin/index'])
        );
  }

  
  public go(){
    this.submitted = true;
    if (this.ngFormOne.valid){
      this.transaction.ammount=this.transaction.ammount;
      this.transaction.type="one";
      this.transaction.beneficiaryId="p"+this._uw.userActive.id;
      this.saveTransaction(this.transaction);
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
    this.isError = true;
    }, 4000);
  }

  ngOnInit(): void {
    this.ngFormOne = this.formBuilder.group({
      ammount: [0, [Validators.required]]
      });
  }

}
