import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../data-api.service';
import { UserWService } from "../../user-w.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-activateaccount',
  templateUrl: './activateaccount.component.html',
  styleUrls: ['./activateaccount.component.css']
})
export class ActivateaccountComponent implements OnInit {
  ngFormLogin: FormGroup;
  submitted = false;
  constructor(
    public _uw:UserWService,
    public router: Router,
    public dataApi:DataApiService
  ) { }
  public isError = false;
  public isLogged =false;
 public user : UserInterface ={
    name:"",
    email:"",
    password:"",
    usertype:""
  };
  message = "";  
  get fval() {
    return this.ngFormLogin.controls;
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
