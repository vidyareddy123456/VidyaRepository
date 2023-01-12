import { LightningElement } from 'lwc';

export default class LifeCycleHookParent extends LightningElement {
    constructor(){
        super()
        console.log('Parent constructor called')
    }
    connectedCallback(){
        console.log('Parent Connected callback called')
    }
    renderedCallback(){
        console.log('Parent render method called')
    }
    isChildVisible = true
    handleclick(){
      this.isChildVisible=! this.isChildVisible;
    }
    errorCallback(error, stack){
        console.log(error.message)
        console.log(stack)
    }
}