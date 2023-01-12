import { LightningElement ,track,wire} from 'lwc';
import getAccounts from '@salesforce/apex/wireComponent.getAccounts';
export default class DisplayDataUsingWire extends LightningElement {
   @track result;
   @wire(getAccounts) accountRecords({error,data}){
        if(data) {
            this.result= data;
        }
        else if(error) {
            this.result= undefined;
        }
   }
}