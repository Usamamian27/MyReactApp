import React, {Component} from 'react';
import Contact from './Contact';

class Contacts extends Component {
    constructor(){

        super();

        this.state = {

            contacts : [

                {
                    id :1 ,
                    name : 'Usama',
                    email: 'bcsf14@gmail.com',
                    phone: '111-111-111'

                },
                {
                    id :2 ,
                    name : 'Ammar',
                    email: 'bcsf42@gmail.com',
                    phone: '111-2222-2-2-2-2'

                },
                {
                    id :3 ,
                    name : 'Mr. Zaid',
                    email: 'bcsf50@gmail.com',
                    phone: '111-0000-111'

                }

            ]
        }
    };


    deleteContact = (id)=> {
        const {contacts} = this.state;
        const newContacts = contacts.filter(contact => contact.id !== id);

        this.setState({
            contacts: newContacts
        });

    }
    render(){


        const {contacts} = this.state;


        return (

            <div>
                {/*

                    this is a single method of doing things i.e looping through and displaying single data
                    while we have a better approach by which we can display the who;e object


                {contacts.map(contact=>*/}

                    {/*< Contact  key = {contact.id}*/}
                               {/*name = { contact.name}*/}
                               {/*email = {contact.email}*/}
                               {/*phone = {contact.phone}*/}
                    {/*/>*/}

                {/*)}*/}




                {
                    contacts.map(contact =>(

                        <Contact key = {contact.id} contact = {contact} deleteClickHandler = {this.deleteContact.bind(this,contact.id)}

                        />



                    ))
                }




            </div>
        );
    }
}

export default Contacts;