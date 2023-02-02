import { LightningElement } from 'lwc';

export default class ChildModelComponent extends LightningElement {
    changeHandler(){
        const cEvent = new CustomEvent('close', {
            detail: {
                msg:'Model closed Successfully'
            }
        })
        this.dispatchEvent(cEvent)
    }
}