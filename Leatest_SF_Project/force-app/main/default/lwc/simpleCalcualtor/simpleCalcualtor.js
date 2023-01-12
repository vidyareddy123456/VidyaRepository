import { LightningElement ,track} from 'lwc';

export default class SimpleCalcualtor extends LightningElement {
    @track firstNumber=0;
    @track lastNumber=0;
    @track result=0;
    changehandler(event) {
        if(event.target.name==='fnumber') {
            this.firstNumber=event.target.value;
        }
        if(event.target.name==='lnumber') {
            this.lastNumber=event.target.value;
        }
        this.result = parseInt(this.firstNumber) + parseInt(this.lastNumber);
    }
}