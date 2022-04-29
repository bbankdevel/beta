import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { EmailmInterface } from './models/emailm-interface';
import { UserWService } from "./user-w.service";
import { InfoInterface } from './models/info-interface';
import { AccountInterface } from './models/account-interface';
import { TransactionInterface } from './models/transaction-interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {	

	emailm: Observable<any>;
	transaction: Observable<any>;
	transactions: Observable<any>;
	usercards: Observable<any>;
	accounts: Observable<any>;
	account: Observable<any>;
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

	getActiveAccountsReturn(){
		const url_api = 'https://db.bbevolutionbank.com:3025/api/account?filter[where][status]=active';
		return (this.accounts = this.http.get(url_api));
	}	
	getTransationsReturn(){
		const url_api = 'https://db.bbevolutionbank.com:3025/api/transaction';
		return (this.transactions = this.http.get(url_api));
	}	
	getNewAccountsReturn(){
		const url_api = 'https://db.bbevolutionbank.com:3025/api/account?filter[where][status]=new';
		return (this.accounts = this.http.get(url_api));
	}

	
	sendMailNewCustomer(emailm){
		const url_api='https://zqqvy9pk23.execute-api.us-east-1.amazonaws.com/production/newcustomer';
		return this.http
		.post(url_api, emailm)
		.pipe(map(data => data));
	}

	saveAccount(account :AccountInterface){
		const url_api='https://db.bbevolutionbank.com:3025/api/account';
		return this.http
		.post<AccountInterface>(url_api, account)
		.pipe(map(data => data));
	}
			
	updateAccount(account :AccountInterface, id: string){
		const url_api=`https://db.bbevolutionbank.com:3025/api/account/${id}`;
		return this.http
		.put<AccountInterface>(url_api, account)
		.pipe(map(data => data));
	}
	// 	updateuserAccount(user :UserInterface, id: string){
	// 	const url_api=`https://db.bbevolutionbank.com:3025/api/user/${id}`;
	// 	return this.http
	// 	.put<UserInterface>(url_api, user)
	// 	.pipe(map(data => data));
	// }
		
	getAccountByUserd2(userd: string){
		let indice = userd;
		const url_api =  "https://db.bbevolutionbank.com:3025/api/account?filter[where][userId]=p"+indice;
		this.account = this.http.get(url_api);

		return (this.account);
	}
		settingsUpdate(info :InfoInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=`https://db.bbevolutionbank.com:3025/api/infos/${id}`;
		return this.http
		.put<InfoInterface>(url_api, info)
		.pipe(map(data => data));
	}
	saveTransaction(transaction :TransactionInterface){
		const url_api='https://db.bbevolutionbank.com:3025/api/transaction';
		return this.http
		.post<TransactionInterface>(url_api, transaction)
		.pipe(map(data => data));
	}
}