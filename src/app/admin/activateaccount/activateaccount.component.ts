import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../data-api.service';
import { UserWService } from "../../user-w.service";
import { AccountInterface } from '../../models/account-interface'; 
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { isError } from "util";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-activateaccount',
  templateUrl: './activateaccount.component.html',
  styleUrls: ['./activateaccount.component.css']
})
export class ActivateaccountComponent implements OnInit {
  ngFormActivateAccount: FormGroup;
  submitted = false;

  constructor(
    public _uw:UserWService,
    public router: Router,
    private formBuilder: FormBuilder,
    public dataApi:DataApiService
  ) { }
  public isError = false;
  public isLogged =false;


 public account : AccountInterface;
  message = "";  
  get fval() {
    return this.ngFormActivateAccount.controls;
    }
    public activate (){
      this.submitted = true;
      if (this.ngFormActivateAccount.invalid) {
      return;
        } 
        let id = this._uw.accountToEdit.id;
        console.log("id : "+id);
      this.dataApi.updateAccount(this.account.numberAccount,id)
      .subscribe(
        // tix => this.router.navigate(['/succesConfig'])
    );
      console.log("hola");
    }
  onIsError(): void {
       
      this.isError = true;
      setTimeout(() => {
      this.isError = true;
        //this.isError = false;
      }, 4000);
    }
  ngOnInit(): void {
    this.ngFormActivateAccount = this.formBuilder.group({
      numberAccount: ['', [Validators.required]]
      });
  }

}
