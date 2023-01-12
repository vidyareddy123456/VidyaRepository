import { LightningElement ,api} from 'lwc';

export default class ChildVideo extends LightningElement {
    @api myName = 'Srividya Reddy';
    //adding commit to test the repository//
    //creating new branch//

    @api callChildMethod(setParam) {
        alert('This is The Child Method'+setParam.firstName);
    }

    sendDataToParent(event) {
        const sendDataFromChild = new CustomEvent('childname', {detail:'Hi, How are you doing Iam your child'});
        this.dispatchEvent(sendDataFromChild);
    }
}