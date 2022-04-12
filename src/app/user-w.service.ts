import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserWService {
	admin:boolean;
	adminName:string;
	allLoaded:boolean=false;
	buttonDisabled:boolean=false;
	card:any={};
	usercard:any={};
	cardsResult:any[]=[];
	errorFormUpdateUsercard:boolean;
	file:any[]=[];st
	filter:boolean=false;
	foredit:any={};
	idCard:string;
	images:any[]=[];
	info:any={};
	isLogged:boolean=false;
	loginError:boolean=false;
	loaded:boolean=false;
	method:string;
	name:string;
	total:number=0;
	type:string;
	usertype:string;
	user:any={};
	userActiveId:string;
	userId:string;
	userW:any={};
	appointmentUsercard:string;
  constructor() { }
}


