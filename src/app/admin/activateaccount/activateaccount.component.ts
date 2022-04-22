import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../data-api.service';
import { UserWService } from "../../user-w.service";
import { AccountInterface } from '../../models/account-interface'; 
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { isError } from "util";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    
    private FormGroup: FormGroup, 
    public dataApi:DataApiService
  ) { }
  public isError = false;
  public isLogged =false;


 public account : AccountInterface ={
    name:"",
    numberAccount:"",
    phone:"",
    status:"",
    type:"",
    address:"",
    userId:"",
    email:""
  };
  message = "";  
  get fval() {
    return this.ngFormActivateAccount.controls;
    }
    public activate (){
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
