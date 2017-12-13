import { Component, OnInit} from '@angular/core';
import { Quotation} from './quotation';
import { DashboardService} from './dashboard.service'

@Component({
	selector :'quotation-list',
	templateUrl:'quotation-list.html',
	styles: [`
    #exTab2 h3 {
    color : white;
    background-color: #428bca;
    padding : 5px 15px;
  }

`],
	providers:[DashboardService]

})

export class QuotationListComponent  implements OnInit{

	private quotations:Quotation[];
	private incompleteFormList:Quotation[];
	private pendingFormList:Quotation[];
	constructor(private dashboardService:DashboardService){}

	ngOnInit(){
		this.getQuotations();
		this.getIncompleteFormList();
		this.getPendingFormList();
	}

	getQuotations(){
		this.dashboardService
		.getQuotations()
		.then((quotations:Quotation[]) => {
			console.log(quotations)
			this.quotations = quotations;
		})

	}

	getIncompleteFormList(){
		this.dashboardService
		.getIncompleteFormList()
		.then((quotations:Quotation[]) => {
			console.log(quotations)
			this.incompleteFormList = quotations;
		})

	}

	getPendingFormList(){
		this.dashboardService
		.getPendingFormList()
		.then((quotations:Quotation[]) => {
			console.log(quotations)
			this.pendingFormList = quotations;
		})

	}
	
}