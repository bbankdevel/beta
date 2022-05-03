import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../data-api.service';
import { UserWService } from "../../user-w.service";
import { TransactionInterface } from '../../models/transaction-interface'; 
import { AccountInterface } from '../../models/account-interface'; 
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { isError } from "util";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transactionview',
  templateUrl: './transactionview.component.html',
  styleUrls: ['./transactionview.component.css']
})
export class TransactionviewComponent implements OnInit {

  constructor(
    public _uw:UserWService,
    public router: Router,
    private formBuilder: FormBuilder,
    public dataApi:DataApiService
  ) { }
  public isError = false;
  public transactionToEdit : TransactionInterface ;
  public transactionToAdd : TransactionInterface ={
        ammount:0,
        type:"five",
        email:"",
        userId:""
      };
  public account : AccountInterface  ;
  public accounts : AccountInterface  ;
  public ok (){
    this._uw.transactionToEdit.status="complete";
    let id = this._uw.transactionToEdit.id;
    this._uw.alerts.push({
          type: "info",
          message: "Transaccion procesada con exito"
      });
     if(this._uw.transactionToEdit.type==='three'){
        this.transactionToAdd.ammount= this._uw.transactionToEdit.ammount;
        this.transactionToAdd.type="five";
        this.transactionToAdd.email=this._uw.accountForTransfer.email;
        this.transactionToAdd.userId=this._uw.transactionToEdit.beneficiaryId;
        this.dataApi.saveTransaction(this.transactionToAdd).subscribe();
      }
         
    this.dataApi.updateTransaction(this._uw.transactionToEdit,id)
      .subscribe(
         transaction => this.router.navigate(['/admin/index'])
      );
  }

  onIsError(): void {
       
      this.isError = true;
      setTimeout(() => {
      this.isError = true;
        //this.isError = false;
      }, 4000);
    }

  ngOnInit(): void {
    
    
  }

}
