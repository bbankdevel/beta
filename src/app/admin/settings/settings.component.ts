import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../data-api.service';
import { UserWService } from "../../user-w.service";
import { InfoInterface } from '../../models/info-interface'; 
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { isError } from "util";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  ngFormSettingsUpdate: FormGroup;
  submitted = false;

  constructor(
    public _uw:UserWService,
    public router: Router,
    private formBuilder: FormBuilder,
    public dataApi:DataApiService
  ) { }
  public isError = false;
  public isLogged =false;


  public info : InfoInterface;
  message = ""; 
  get fval() {
    return this.ngFormSettingsUpdate.controls;
    }
    onIsError(): void {
       
      this.isError = true;
      setTimeout(() => {
      this.isError = true;
        //this.isError = false;
      }, 4000);
    }
    activate(){}
  ngOnInit(): void {

    this.ngFormSettingsUpdate = this.formBuilder.group({
      adminEmail: ['', [Validators.required]]
      });
  }
}
