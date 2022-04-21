import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UsercardInterface } from './models/usercard-interface';
import { EmailmInterface } from './models/emailm-interface';
import { UserWService } from "./user-w.service";
import { InfoInterface } from './models/info-interface';
import { AccountInterface } from './models/account-interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {	
	usercard: Observable<any>;
	emailm: Observable<any>;
	usercards: Observable<any>;
	accounts: Observable<any>;
	cards: Observable<any>;
	info: Observable<any>;
  constructor(
  	public _uw:UserWService,
  	private http: HttpClient, 
  	private authService:AuthService
  	) {} 
  	headers : HttpHeaders = new HttpHeaders({
  		"Content-Type":"application/json"
  		});
		getInfo(){
		const url_api=`https://db.bbevolutionbank.com:3025/api/infos/`;
		this.info = this.http.get(url_api);
		return (this.info);
	}

	getAllUsercardsReturn(){
		const url_api = 'https://db.bbevolutionbank.com:3025/api/usercard?filter[where][status]=activated';
		return (this.usercards = this.http.get(url_api));
	}
	getActiveAccountsReturn(){
		const url_api = 'https://db.bbevolutionbank.com:3025/api/account?filter[where][status]=active';
		return (this.accounts = this.http.get(url_api));
	}	
	getNewAccountsReturn(){
		const url_api = 'https://db.bbevolutionbank.com:3025/api/account?filter[where][status]=new';
		return (this.accounts = this.http.get(url_api));
	}
	getActiveCardsReturn(){
		const url_api = 'https://db.bbevolutionbank.com:3025/api/card?filter[where][status]=active';
		return (this.cards = this.http.get(url_api));
	}
	
	sendMailNewCustomer(emailm){
		const url_api='https://zqqvy9pk23.execute-api.us-east-1.amazonaws.com/production/newcustomer';
		return this.http
		.post(url_api, emailm)
		.pipe(map(data => data));
	}
	saveUsercard(usercard :UsercardInterface){
		const url_api='https://db.bbevolutionbank.com:3025/api/card';
		return this.http
		.post<UsercardInterface>(url_api, usercard)
		.pipe(map(data => data));
	}
	saveAccount(account :AccountInterface){
		const url_api='https://db.bbevolutionbank.com:3025/api/account';
		return this.http
		.post<AccountInterface>(url_api, account)
		.pipe(map(data => data));
	}
			
	updateUsercard(usercard :UsercardInterface, id: string){
		const url_api=`https://db.bbevolutionbank.com:3025/api/card/${id}`;
		return this.http
		.put<UsercardInterface>(url_api, usercard)
		.pipe(map(data => data));
	}
		
	getUsercardByUserd2(userd: string){
		let indice = userd;
		const url_api =  "https://db.bbevolutionbank.com:3025/api/card?filter[where][userId]=p"+indice;
		this.usercard = this.http.get(url_api);
		return (this.usercard);
	}
	
}