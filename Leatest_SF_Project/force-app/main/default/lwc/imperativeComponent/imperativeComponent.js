import { LightningElement,track } from 'lwc';
import getAccounts from '@salesforce/apex/wireComponent.getAccountRecordsList';
export default class ImperativeComponent extends LightningElement {
  @track accountRecords
  @track errors;
  @track columns = [{label:'Name', fieldName:'Name', type:'text'},
                   {label:'Rating', fieldName:'Rating', type:'picklist'},
                   {label:'Industry', fieldName:'Industry', type:'picklist'},];
  connectedCallback() {
       getAccounts()
          .then(result=>{
            this.accountRecords = result;
          })
          .catch(error=>{
            this.errors = error;
          });
         
  }
}