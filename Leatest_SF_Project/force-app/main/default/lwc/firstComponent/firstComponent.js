import { LightningElement, track } from 'lwc';

export default class FirstComponent extends LightningElement {
    @track fullName= "";
    @track title= "";

    changehandler(event) {
        const Name =event.target.value;
        if(Name===fullName){
            this.fullName=event.target.value;
        }
        if(Name===title){
            this.title=event.target.value;
        }
      
    }
}