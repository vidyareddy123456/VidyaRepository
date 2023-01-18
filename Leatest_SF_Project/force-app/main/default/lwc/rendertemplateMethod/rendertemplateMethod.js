import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderTemplate from './rendertemplateMethod.html'
export default class RendertemplateMethod extends LightningElement {
    selectedBtn=''
    render(){
        return this.selectedBtn === 'Signup' ? signupTemplate :
               this.selectedBtn === 'Signin' ? signinTemplate :
               renderTemplate
    }      

    handleclick(event){
      this.selectedBtn = event.target.label
    }

    submitHandler(event){
        console.log(`${event.target.label} Successfully!!`)
    }
}