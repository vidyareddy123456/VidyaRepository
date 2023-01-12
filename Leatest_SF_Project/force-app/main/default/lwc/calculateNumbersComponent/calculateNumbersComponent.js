import { LightningElement,track } from 'lwc';
import getSumResult from '@salesforce/apex/calculateNumbers.getSumResult';
export default class CalculateNumbersComponent extends LightningElement {
  @track fNumber;
  @track sNumber;
  @track output;
  @track errors;
  handleClick(){
    getSumResult({firstNumber:this.fNumber,secondNumber:this.sNumber})
        .then(result=>{
        this.output = result;
        console.log('result'+result);
        })
        .catch(error=>{
        this.errors = error;
        });
    }
    handleChange(event){
        if(event.target.name ==='fstNumber') {
            console.log('1st++'+event.target.value);
            this.fNumber = event.target.value;

        }
        else if(event.target.value ==='sndNumber') {
            console.log('2nd++'+event.target.value);
            this.sNumber = event.target.value;
        }
    }
  }