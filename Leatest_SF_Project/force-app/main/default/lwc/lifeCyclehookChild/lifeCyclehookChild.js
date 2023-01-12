import { LightningElement } from 'lwc';

export default class LifeCyclehookChild extends LightningElement {
    constructor(){
        super()
        console.log('child constructor called')
    }
    connectedCallback(){
        console.log('child Connected callback called')
        throw new Error('loading of child component failed')
    }
    renderedCallback(){
        console.log('child render method called')
    }
   
}