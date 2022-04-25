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
  ngFormActivateSettingsUpdate: FormGroup;
  submitted = false;
  constructor(
    public _uw:UserWService,
    public router: Router,
    private formBuilder: FormBuilder,
    public dataApi:DataApiService

  ) { }
  public info : InfoInterface;
  public isError = false;
  public isLogged =false;
  get fval() {
    return this.ngFormActivateSettingsUpdate.controls;
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

    this.ngFormActivateSettingsUpdate = this.formBuilder.group({
      adminEmail: ['', [Validators.required]]
      });
  }
  
    
  
 //  checkUncheckAll(event) {
 //     var checkboxes = document.getElementsByTagName('input');
 //     if (event.target.checked) {
 //         for (var i = 0; i < checkboxes.length; i++) {
 //             if (checkboxes[i].type == 'checkbox') {
 //                 checkboxes[i].checked = true;
 //             }
 //         }
 //     } else {
 //         for (var i = 0; i < checkboxes.length; i++) {
 //             // console.log(i)
 //             if (checkboxes[i].type == 'checkbox') {
 //                 checkboxes[i].checked = false;
 //             }
 //         }
 //     }
 // }
  
  
  

}
