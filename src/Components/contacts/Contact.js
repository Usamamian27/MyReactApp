import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Consumer} from '../../Context';


 class Contact extends Component {

     state = {
         showContactInfo: false
     }

     onShowClick() {
         this.setState({showContactInfo: !this.state.showContactInfo});
     }

     onDeleteClick = (id ,dispatch) => {
         dispatch({type:'DELETE_CONTACT',payload:id});


     }

     render() {

         const {showContactInfo} = this.state;
         const {id,name, email, phone} = this.props.contact;

         return (
             <Consumer>
                 {value => {

                     const {dispatch} = value;
                     return (
                         <div className="card card-body mb-3">

                             <h4> {name}
                                 <i onClick={this.onShowClick.bind(this, name)} className="fas fa-sort-down "
                                    style={{cursor: 'pointer'}}>
                                 </i>
                                 <i onClick={this.onDeleteClick.bind(this,id,dispatch)} className="fas fa-times"
                                    style={{cursor: 'pointer', float: 'right', color: 'red'}}> </i>
                             </h4>
                             {showContactInfo ? (
                                 <ul className="list-group">
                                     <li className="list-group-item">{email}</li>
                                     <li className="list-group-item">{phone}</li>

                                 </ul>) : null}
                         </div>
                     )
                 }


                 }
             </Consumer>

         )

     }
 }

Contact.propTypes = {
     contact : PropTypes.object.isRequired
};




export default Contact;