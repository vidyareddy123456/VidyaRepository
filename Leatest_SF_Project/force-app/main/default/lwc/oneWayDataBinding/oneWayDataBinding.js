import { LightningElement , track} from 'lwc';

export default class OneWayDataBinding extends LightningElement {
    name="Salesforce Troop";
    @track title="Salesforce Developer";
    
    changehandler(event){
      this.title=event.target.value;
    }
}