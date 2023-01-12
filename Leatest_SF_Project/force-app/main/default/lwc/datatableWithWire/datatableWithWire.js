import { LightningElement, wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/wireComponent.getAccounts';
export default class DatatableWithWire extends LightningElement {
    @track result;
    @track columns = [
        {label:'Name', fieldName:'Name', type:'text'},
        {label:'Rating', fieldName:'Rating', type:'picklist'},
        {label:'Industry', fieldName:'Industry', type:'picklist'},
    ];
    @wire(getAccounts) accountRecords({error,data}){
       if(data) {
          this.result = data;
       }
       else if(error) {
        this.result = undefined;
       }
    }
}