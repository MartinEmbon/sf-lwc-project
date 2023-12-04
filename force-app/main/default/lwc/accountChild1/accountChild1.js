import { LightningElement } from 'lwc';

export default class AccountChild1 extends LightningElement {

    searchTextChild1
    handleChange(e){
        this.searchTextChild1=e.target.value;
        
    }   

    handleClick(e){
        const searchEvent = new CustomEvent('getsearchevent',{detail:this.searchTextChild1});
        this.dispatchEvent(searchEvent)
    }
}