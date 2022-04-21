import { Component, OnInit } from '@angular/core';
import { AccountInterface } from '../../models/account-interface'; 
import { DataApiService } from '../../data-api.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
public waiting = true;
public clear = true;
public clear2 = true;
public accounts:AccountInterface;
public newAccounts:AccountInterface;
  constructor(
public dataApi:DataApiService
    ) { }

  ngOnInit(): void {
    this.getActiveAccounts();
    this.getNewAccounts();
  }
    getActiveAccounts(){
        this.waiting=true;
        this.dataApi.getActiveAccountsReturn().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
        this.clear = true;
       }else{
        this.clear = false;
        this.accounts=res;            
        this.waiting=false;
        }
     });  
    }   
    getNewAccounts(){
        this.waiting=true;
        this.dataApi.getNewAccountsReturn().subscribe((res:any) => {
      if (res[0] === undefined){
        this.clear2 = true;
        console.log("hey");
       }else{
        this.clear2 = false;
        this.waiting=false;
        this.newAccounts=res;            
        }
     });  
    }
  
  checkUncheckAll(event) {
     var checkboxes = document.getElementsByTagName('input');
     if (event.target.checked) {
         for (var i = 0; i < checkboxes.length; i++) {
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = true;
             }
         }
     } else {
         for (var i = 0; i < checkboxes.length; i++) {
             // console.log(i)
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = false;
             }
         }
     }
 }
  
  
  

}
