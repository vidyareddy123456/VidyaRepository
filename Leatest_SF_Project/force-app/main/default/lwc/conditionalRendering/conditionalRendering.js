import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    showtext= false;
    hidetext=false;
    showhandler(){
        this.showtext=true;
    }
    hidehandler(){
        this.hidetext=true;
    }
}