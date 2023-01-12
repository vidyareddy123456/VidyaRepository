import { LightningElement ,track} from 'lwc';

export default class ParentVideo extends LightningElement {
    @track greeting = 'First Value is 1';
    @track messageChild;

    handlechange(event) {
        this.greeting = 'Second Value is 20';
    }
    handlecall() {
        var callChild = this.template.querySelector('c-child-video');
        var setParam = {'firstName':'Pankaj'};
        callChild.callChildMethod(setParam);
    }
    handlechildmessage(event) {
        this.messageChild = event.detail;
    }
}