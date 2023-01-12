import { LightningElement } from 'lwc';

export default class ChildEvent extends LightningElement {
    handlechage() {
        this.dispatchEvent(new CustomEvent('increasecount'));
    }
}