import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../user-w.service";
import { DataApiService } from '../../data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { isError } from "util";
import { UserInterface } from '../../models/user-interface'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { InfoInterface } from '../../models/info-interface';
import { AccountInterface } from '../../models/account-interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user : UserInterface ={
    name:"",
    email:"",
    usertype:"",
    password:"",
    status:"",
  };
    public info:InfoInterface;

  message = "";  
  ngFormSignup: FormGroup;
  submitted = false;
  politics = false;
  public isError = false;
  public waiting = false;
  public msgError = '';
  constructor(
    private formBuilder: FormBuilder,
    public _uw:UserWService,
    public dataApi: DataApiService,
    public router: Router,
    private authService: AuthService,
    private location: Location

  ) { }


  public accountSubmit : AccountInterface ={
    numberAccount:"",
    status:"new",
    userId:"",
     name:"",
    email:"",
    subjectEmail:"",
    address:"",
    message:"",
    images:[],
     usertype:"",
    phone:"",
    type:"default"
  }; 

  loadAPI = null;
  onRegister(){
    this.submitted = true;
    if (this.ngFormSignup.valid){
      this.isError = false;
      this.waiting=true;
      this.user.usertype='customer';
      this.user.status='new';
      this.accountSubmit.name=this.user.name;
      this.accountSubmit.images[0]="https://www.buckapiservices.com/developer.png";
      this.authService
        .registerUser(
          this.user.name, 
          this.user.email, 
          this.user.password, 
          this.user.usertype, 
          this.user.status)
        .subscribe(
          user => {    
            this._uw.account=user;
            this.accountSubmit.email=user.email;
            this.authService.setUser(user);
            const token = user.id;
            this.accountSubmit.userId='p'+token;
            this._uw.userId=this.accountSubmit.userId;  
            this.authService.setToken(token);
            this.accountSubmit.message="nuevo usuario registrado";
            this.accountSubmit.subjectEmail="nuevo usuario registrado";
            this.accountSubmit.adminEmail=this.info[0].adminEmail;
            this._uw.info=this.info;
          }, 
          error => {
                if(error.status==422){
                this.isError = true;
                this.message="La dirección de correo ya se encuentra registrada";
              }
          }
        );
      this.accountSubmit.usertype='customer';
      this.accountSubmit.status='new';
      setTimeout(() => {
        if (this.isError==false){  
            this.saveAccount(this.accountSubmit);
            this.sendMailNewCustomer(this.accountSubmit);
          }
        else{
          this.waiting=false;
        } 
      }, 5000);

    } 
    else {
      this.onIsError();
    }
  }

  public sendMailNewCustomer(usercard){
    return this.dataApi.sendMailNewCustomer(this.accountSubmit)
       .subscribe(
            accountSubmit => this.router.navigate(['/success'])
       );
       this.waiting=false;
  }

 
  
  public saveAccount(account){
    return this.dataApi.saveAccount(this.accountSubmit)
       .subscribe();
       this.waiting=false;
  }

  setPolitics(){
    if (this.politics==true){this.politics=false}else{this.politics=true}
  }

  public getInfo(){
    this.dataApi.getInfo()
    .subscribe((info: InfoInterface) => (this.info=info));
  }

  get fval() {
  return this.ngFormSignup.controls;
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

  ngOnInit() {
    this.getInfo();  
    if (this._uw.loaded==true){
      this.loadAPI = new Promise(resolve => {});
    }
    this._uw.loaded=true;
    this.ngFormSignup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });    
  }

}
