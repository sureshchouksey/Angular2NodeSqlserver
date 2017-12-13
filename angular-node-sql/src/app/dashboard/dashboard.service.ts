import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Quotation } from './quotation';

@Injectable()

export class DashboardService{
	private serverUrl = 'http://localhost:9000/api/quotation';

	constructor(private http:Http){};

	getQuotations():Promise<Quotation[]>{
		return this.http.get(this.serverUrl)
				.toPromise()
				.then(response=> response.json() as Quotation[])
				.catch(this.handleError);
	}

	getIncompleteFormList():Promise<Quotation[]>{
		return this.http.get('http://localhost:9000/api/incompleteForm')
				.toPromise()
				.then(response=> response.json() as Quotation[])
				.catch(this.handleError);
	}

	getPendingFormList():Promise<Quotation[]>{
		return this.http.get('http://localhost:9000/api/pendingForm')
				.toPromise()
				.then(response=> response.json() as Quotation[])
				.catch(this.handleError);
	}

	 private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
