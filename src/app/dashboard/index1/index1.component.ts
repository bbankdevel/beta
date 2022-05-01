import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../data-api.service';
import { UserWService } from "../../user-w.service";
import { AccountInterface } from '../../models/account-interface';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { isError } from "util";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'info',
    message: 'example text',
  }
];


@Component({
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.css']
})
export class Index1Component implements OnInit {
  ngFormCompleteAccount: FormGroup;
  submitted = false;
   alerts: Alert[];
  constructor(    
    public _uw:UserWService,
    public router: Router,
    private formBuilder: FormBuilder,
    public dataApi:DataApiService
  ) { 
  this.reset();
  }
  public isError = false;
  public fullProfile = false;
  public zero = false;
  public one = false;
  public two = false;
  public three = false;
  public four = false;
  public accountId = "";
  public isLogged =false;
  public accounts : AccountInterface ;
  public account : AccountInterface ={
    numberBankAccount:"",
    bankEntity:"",
    address:"",
    phone:""
  };
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    this._uw.alerts=this.alerts;
  }

  reset() {
    this.alerts = Array.from(this._uw.alerts);
  }


 public loadAccount(){

   

  if (this._uw.userActiveId!==undefined &&  this._uw.usertype=='customer' ){
      this.dataApi.getAccountByUserd2(this._uw.userActiveId)
      .subscribe(
        (account: AccountInterface) => (
          this.accounts=account,
           // console.log(""+this.accounts[0].fullProfile),
           this.accountId=this.accounts[0].id,
          this.fullProfile=this.accounts[0].fullProfile,
          this.zero=this.accounts[0].zero,
          this.one=this.accounts[0].one,
          this.two=this.accounts[0].two,
          this.three=this.accounts[0].three,
          this.four=this.accounts[0].four,
          this.account=this.accounts[0]
          )
        );
    }
    setTimeout(() => {
        if(!this.fullProfile){this.router.navigate(['/admin/acc'])}
      }, 4000);

  }

  ngOnInit(): void {
    // this,alerts=this._uw.alerts;
    // this.alerts = Array.from(this._uw.alerts);
    this.loadAccount();
    this.ngFormCompleteAccount = this.formBuilder.group({
      numberBankAccount: ['', [Validators.required]],
      address: ['', [Validators.required]],
      bankEntity: ['', [Validators.required]],
      phone: ['', [Validators.required]]
      });
  }
  public complete(){
      this.submitted = true;
      if (this.ngFormCompleteAccount.invalid) {
      return;
        } 
      this.account.fullProfile=true;
      this.account.zero=true;
      this.account.one=true;
      this.account.two=false;
      this.account.three=true;
      this.account.four=true;
      this.fullProfile=true;
      this.dataApi.updateAccount(this.account, this.accountId)
      .subscribe((account)=>(
        // this.router.navigate(['/admin/index']),
         this.reset(),
          this._uw.alerts.push({
            type: "info",
            message: "Los datos de la cuenta han sido actualizados con éxito"
          })
        )
      );
  }
   get fval() {
    return this.ngFormCompleteAccount.controls;
    }
  onIsError(): void {
       
      this.isError = true;
      setTimeout(() => {
      this.isError = true;
        //this.isError = false;
      }, 4000);
    }
  public newRequest(type){
    let t = type;
    this._uw.transactionType=t;
     this.router.navigate(['/admin/newrequest'])

  }
  quickTransfer = [
        {
          name: "Samuel",
          username: "@sam224",
          image: "assets/images/contacts/1.jpg",
        },
        {
          name: "Cindy",
          username: "@cindyss",
          image: "assets/images/contacts/2.jpg",
        },
        {
          name: "David",
          username: "@davidxc",
          image: "assets/images/contacts/3.jpg",
        },
        {
          name: "Martha",
          username: "@marthaa",
          image: "assets/images/contacts/4.jpg",
        },
        {
          name: "Olivia",
          username: "@oliv62",
          image: "assets/images/contacts/5.jpg",
        },
  ];

}
