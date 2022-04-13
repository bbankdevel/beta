import { Component, OnInit } from '@angular/core';

interface transaction {
  image: string;
  trans_id?: string;
  trans_date: string;
  from: string;
  user_image: string;
  to: string;
  coin: string;
  coin_image: string;
  amount: string;
  note: string;
  status: string;
  status_class: string;
}


const TRANSACTIONS: transaction[] = [
		  {
			image: "assets/images/svg/ic_sell.svg",
			trans_id: "#12415346563475",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/1.jpg",
			to: "Samuel",
			coin: "Entre cuentas propias",
			coin_image: "assets/images/coin/btc.svg",
			amount: "+$5,553",
			note:"Lorem ipsum dol",
			status:"CANCELED",
			status_class:"text-danger",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#124153465125511",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/2.jpg",
			to: "Cindy",
			coin: "Cuenta a tarjeta",
			coin_image: "assets/images/coin/eth.svg",
			amount: "-$12,768",
			note:"Lorem ipsum dol.",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#124153465125511",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/3.jpg",
			to: "Marquezz",
			coin: "Carga de fondos",
			coin_image: "assets/images/coin/ltc.svg",
			amount: "-$455",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_sell.svg",
			trans_id: "#12415346563475",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/1.jpg",
			to: "David",
			coin: "Retiro de fondos",
			coin_image: "assets/images/coin/ltc.svg",
			amount: "+$5,553",
			note:"None",
			status:"PENDING",
			status_class:"text-light",
		  },
          {
			image: "assets/images/svg/ic_sell.svg",
			trans_id: "#12415346563475",
			trans_date: '2/5/2020 06:24 AM',
			from: "Thomas",
			user_image: "assets/images/table/1.jpg",
			to: "Cindy",
			coin: "Entre cuentas propias",
			coin_image: "assets/images/coin/btc.svg",
			amount: "+$5,553",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#124153465125511",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/2.jpg",
			to: "Samuel",
			coin: "Cuenta a tarjeta",
			coin_image: "assets/images/coin/eth.svg",
			amount: "-$12,768",
			note:"None",
			status:"PENDING",
			status_class:"text-light",
		  },
          {
			image: "assets/images/svg/ic_sell.svg",
			trans_id: "#124153465125511",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/3.jpg",
			to: "Samuel",
			coin: "Carga de fondos",
			coin_image: "assets/images/coin/mon.svg",
			amount: "-$455",
			note:"Lorem ipsum dol..",
			status:"CANCELED",
			status_class:"text-danger",
		  },
          {
			image: "assets/images/svg/ic_sell.svg",
			trans_id: "#12415346563475",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/3.jpg",
			to: "David",
			coin: "Retiro de fondos",
			coin_image: "assets/images/coin/ltc.svg",
			amount: "+$5,553",
			note:"None",
			status:"PENDING",
			status_class:"text-light",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#12415346563475",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/1.jpg",
			to: "Lucyana",
			coin: "Entre cuentas propias",
			coin_image: "assets/images/coin/btc.svg",
			amount: "+$5,553",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#124153465125511",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/2.jpg",
			to: "Cindy",
			coin: "Cuenta a tarjeta",
			coin_image: "assets/images/coin/eth.svg",
			amount: "-$12,768",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_sell.svg",
			trans_id: "#12415346512532",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/3.jpg",
			to: "Retiro de fondos",
			coin: "Carga de fondos",
			coin_image: "assets/images/coin/mon.svg",
			amount: "-$455",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#12415346563475",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/3.jpg",
			to: "Lucyana",
			coin: "Retiro de fondos",
			coin_image: "assets/images/coin/ltc.svg",
			amount: "+$5,553",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#12415346563555",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/3.jpg",
			to: "Cindy",
			coin: "Entre cuentas propias",
			coin_image: "assets/images/coin/btc.svg",
			amount: "+$5,553",
			note:"Lorem ipsum dol",
			status:"COMPLETED",
			status_class:"text-success",
		  },
          {
			image: "assets/images/svg/ic_buy.svg",
			trans_id: "#124153465125511",
			trans_date: '2/5/2020 06:24 AM',
			from: "Marquezz",
			user_image: "assets/images/table/2.jpg",
			to: "Lucyana",
			coin: "Cuenta a tarjeta",
			coin_image: "assets/images/coin/eth.svg",
			amount: "+987",
			note:"Lorem ipsum dol",
			status:"PENDING",
			status_class:"text-light",
		  },
  ];



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {




  constructor() {
		
		this.updateTransactionListing();
 
  }

  ngOnInit(): void {
  }
   
    
    
  page = 1;
  pageSize = 10;
  collectionSize = TRANSACTIONS.length;
  transactions: transaction[];
  
  updateTransactionListing() {
    this.transactions = TRANSACTIONS
      .map((customer, i) => ({id: i + 1, ...customer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  

}
