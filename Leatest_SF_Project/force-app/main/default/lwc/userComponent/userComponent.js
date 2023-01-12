import { LightningElement } from 'lwc';

export default class UserComponent extends LightningElement {
    user = 
        {
        firstName:"Vidya",
        lastName:"Reddy"
       };

       changehandler(){
        this.user = {
            firstName:"Bhasker",
            lastName:"Reddy"
        };
       }
}