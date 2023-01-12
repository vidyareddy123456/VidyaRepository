import { LightningElement } from 'lwc';

export default class ChildLWC extends LightningElement {
    handleAdd() {
      this.dispatchEvent(new CustomEvent('addition'));
    }
    handleSub() {
      this.dispatchEvent(new CustomEvent('substraction'));
    }
}