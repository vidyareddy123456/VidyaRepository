import { LightningElement } from 'lwc';

export default class ParentCardComponent extends LightningElement {
    userData = [
        {
            name:"john Doe",
            title:"CEO & Founder",
            buttontext:'Contact',
            imageUrl:'https://www.w3schools.com/w3images/team1.jpg'
        },
        {
            name:"Prathima",
            title:"CEO & Founder",
            buttontext:'Contact',
            imageUrl:'https://www.w3schools.com/w3images/team2.jpg'
        },
        {
            name:"Murali",
            title:"CEO & Founder",
            buttontext:'Contact',
            imageUrl:'https://www.w3schools.com/w3images/team3.jpg'
        }
    ]
}