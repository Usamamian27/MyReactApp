import React, {Component} from 'react';
import {Consumer} from '../../Context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {

   state= {
       name:'',
       email:'',
       phone:'',
       errors:{}
   }

    onChange = (e)=> {
       this.setState(
           {[e.target.name] : e.target.value}
    )
    }

    onSubmit = (dispatch,e)=>{
       e.preventDefault();

       const {name,email,phone} =this.state;



        if(name === ''){
            this.setState({
                errors:{name: 'Name is required'}

            })
            return;
        }
        if(email === ''){
            this.setState({
                errors:{email: 'Email is required'}
            })
            return;
        }
        if(phone === ''){
            this.setState({
                errors:{phone: 'Phone is required'}
            })
            return;
        }

       const newContact ={

           // this is Shorcut method to do like    name = this.name email= this.email
           id:uuid(),
           name,
           email,
           phone
       }

       dispatch({type:'ADD_CONTACT',payload:newContact});


        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        })

    }

    render() {

       const {name, email,phone,errors} = this.state;
       return(
           <Consumer>
               {value =>{
                   const {dispatch} =value;
                   return(
                       <div className="card mb-3">
                           <div className="card-header">
                               <h1>Add Contact</h1>
                               <div className="card-body">
                                   <form onSubmit={this.onSubmit.bind(this,dispatch)} >


                                       <TextInputGroup
                                           label="Name"  name="name" placeholder="Enter Name" value={name} onChange={this.onChange}
                                           error={errors.name}

                                       />
                                       <TextInputGroup
                                           label="Email" type="email" name="email" placeholder="Enter Email" value={email} onChange={this.onChange}
                                           error={errors.email}

                                       />
                                       <TextInputGroup
                                           label="Phone"  name="phone" placeholder="Enter Phone" value={phone} onChange={this.onChange}
                                           error={errors.phone}

                                       />


                                       <input type="submit" value="Add Contact" className="btn btn-block btn-dark"/>
                                   </form>
                               </div>
                           </div>
                       </div>
                   )
               }}
           </Consumer>
       )
    }
}

export default AddContact;