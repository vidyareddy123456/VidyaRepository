import { LightningElement } from 'lwc';

export default class ParentModelComponent extends LightningElement {
    dataVisible = false
    msg
    clickHandler(){
        this.dataVisible = true
    }

    transferHandler(event){
        this.msg = event.detail.msg
        this.dataVisible = false
    }
}