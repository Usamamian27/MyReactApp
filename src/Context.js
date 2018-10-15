import React , {Component} from 'react';

const Context = React.createContext();
const reducer = (state, action) => {

    switch (action.type) {
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }

        case 'ADD_CONTACT':
            return{
                ...state,
                contacts:[action.payload , ...state.contacts]
            }

        default:
            return state;
    }
}

export class Provider extends Component{
    state = {

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

        ],

        dispatch: (action) => {
            this.setState(state => reducer(state,action))
        }
    }


    render(){

        return(

            <Context.Provider value={this.state} >

                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;