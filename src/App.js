import React, { Component } from 'react';
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layout/Header';
import {Provider} from './Context';
import  AddContact from './Components/contacts/AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {

    return (

        <Provider>
      <div className="App">
        The App Component

             <Header branding = "The Contact Manager">
             </Header>

            <div className="container">

                <AddContact></AddContact>
                <Contacts ></Contacts>

            </div>


   </div>

        </Provider>
    );
  }
}

export default App;
