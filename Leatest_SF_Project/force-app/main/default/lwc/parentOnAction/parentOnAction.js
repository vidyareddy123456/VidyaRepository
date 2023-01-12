import { LightningElement ,track} from 'lwc';

export default class ParentOnAction extends LightningElement {
    @track Percentage=10;
    changehandler(event) {
      this.Percentage= event.target.value;
    }
}