import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AccountInterface } from '../../../models/account-interface'; 
import { DataApiService } from '../../../data-api.service';
import { UserWService } from "../../../user-w.service";
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-stepper-vertical',
  templateUrl: './stepper-vertical.component.html',
  styleUrls: ['./stepper-vertical.component.css']
})
export class StepperVerticalComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
public _uw:UserWService,
    public router: Router,
    public dataApi:DataApiService
    ) {}
  public fail=false;
public waiting = false;
public clear = true;
public message = "";
public firstCtrl="";
public clear2 = true;
public accounts:AccountInterface;
public account:AccountInterface;

// goAmount(stepper: MatStepper){
//     stepper.next();
// }
public goAmount(stepper: MatStepper){
  if (this._uw.userActiveId!==undefined &&  this._uw.usertype=='customer' ){
        this.waiting=true;
      this.dataApi.getAccountByEmail(this.firstCtrl)
      .subscribe((res:any) => {
      if (res[0] === undefined){
        this.clear = true;
        this.message="Email no registrado!";
        this.fail=true;
        this.waiting=false;
        // console.log("hey");
       }else{
        this.fail=false;
        this.clear = false;
        this.waiting=false;
        this._uw.accountDestin=res;
         stepper.next();            
        }
     });  
    }
  }

  ngOnInit() {
    this.isLinear = !this.isLinear;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
