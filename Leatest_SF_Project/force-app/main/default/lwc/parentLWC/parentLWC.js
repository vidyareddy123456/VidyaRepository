import { LightningElement } from 'lwc';

export default class ParentLWC extends LightningElement {
    countValue=0;

    handleonadd(event) {
      this.countValue ++;
    }
    handleonSub(event) {
        this.countValue --;
    }
}