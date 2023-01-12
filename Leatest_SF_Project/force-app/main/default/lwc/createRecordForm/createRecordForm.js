import { LightningElement } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Type from '@salesforce/schema/Account.Type';
import Account_Rating from '@salesforce/schema/Account.Rating';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class CreateRecordForm extends LightningElement {
    objectApiName = 'Account';
    fieldlist = [Account_Name, Account_Type, Account_Rating];

    handleAccountCreate(event){
       const evt = new ShowToastEvent({
        title: "Account Create",
        message: "Record ID:"+ event.detail.id, 
        variant: "success"
    });

        this.dispatchEvent(evt);
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                objectApiName: 'Account',
                actionName: 'view'
            },
        });
    }
}