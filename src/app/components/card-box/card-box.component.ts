import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/models/accountDataModel';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {
  
  accountData: AccountDataModel = {
    name: "",
    account: {
      agency: "0000",
      number: "00.00000-0"
    },
    card: {
      limit: 0,
      number: "0000"
    }
  };

  constructor(private service: AccountsService) { }

  ngOnInit(): void {
    this.getAccountData();
  }

  getAccountData(){
    this.service.getAccount().subscribe(data => {
      this.accountData.name = data.name
      this.accountData.account.agency = data.account.agency;
      this.accountData.card.limit = data.card.limit;
      this.accountData.account.number = data.account.number;
      this.accountData.card.number = data.card.number.split(" ")[3]
    } )
  }
}
