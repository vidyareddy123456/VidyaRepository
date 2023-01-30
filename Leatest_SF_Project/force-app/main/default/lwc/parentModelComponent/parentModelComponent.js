import { LightningElement } from 'lwc';

export default class ParentModelComponent extends LightningElement {
    showHandler= false

    clickHandler(){
        this.showHandler = true
    }
}