import { LightningElement } from 'lwc';

export default class Parentevent extends LightningElement {
    count = 1;
    handleofchange() {
        this.count = this.count +1;
    }
}