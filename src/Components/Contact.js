    import React, { Component } from 'react'
    import PropTypes from 'prop-types';

     class Contact extends Component {

     state = {
             showContactInfo: false
         }
         onShowClick() {
                this.setState({showContactInfo : !this.state.showContactInfo});
     }
         onDeleteClick = ()=> {
                this.props.deleteClickHandler();
     }

      render() {
    const {showContactInfo} = this.state;
    const {name ,email , phone} = this.props.contact;

        return (
          <div className="card card-body mb-3">

            <h4> {name}
            <i onClick = {this.onShowClick.bind(this,name)} className="fas fa-sort-down " style={{cursor: 'pointer'}}>

            </i>
            <i  onClick={this.onDeleteClick} className="fas fa-times" style={{cursor:'pointer',float:'right' ,color:'red'}}   > </i>
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

    Contact.propTypes = {
         contact : PropTypes.object.isRequired,
         deleteClickHandler : PropTypes.func.isRequird
};




    export default Contact;