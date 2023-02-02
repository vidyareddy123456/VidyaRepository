import { LightningElement, wire ,track} from 'lwc';
import displayAccts from '@salesforce/apex/accountSearch.displayAccts';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import TickerSymbol from '@salesforce/schema/Account.TickerSymbol';

export default class AccountRecordsSearch extends LightningElement {
    @track name;
    @track results;
    @track errors;
    changeHandler(event){
        this.name = event.target.value;
    }


    handleSearch(){
        displayAccts({searchkey: this.name})
        .then(result=>{
           this.results = result;
        })
        .catch(error=>{
            const event = new ShowToastEvent({
                title: 'Error',
                variant: 'error',
                message: 'there is no matching records',
            });
            this.dispatchEvent(event);
           this.results = null;
           });
    }
    cols = [
        {label: 'Account Name', fieldName: 'Name', type: 'text'},
        {label: 'Phone', fieldName: 'Phone', type: 'phone'},
        {label: 'Industry', fieldName: 'Industry', type: 'text'},
        {label: 'Account Name', fieldName: 'Name', type: 'text'},
        {label: 'Website', fieldName: 'website', type: 'text'},
    ]
}
    