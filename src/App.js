import React, { Component } from 'react';
import Contacts from './Components/Contacts';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    


    
    return (

      <div className="App">
        The App Component

             <Header branding = "The Contact Manager"
            />

       {/*This method is just using components and sending " props " to the its component class*/}

       {/*<div className="container">*/}

            {/*<Contact  name = "Usama"*/}
                      {/*email = "bcsf14@gmail.com"*/}
                      {/*phone = "111-111-111"*/}
            {/*/>*/}
            {/*<Contact*/}
                {/*name = "Ammar"*/}
                {/*email = "bcsf42@gmail.com"*/}
                {/*phone = "222-222-222"*/}
            {/*/>*/}
 {/*</div>*/}

<div className="container">

    <Contacts />

</div>


   </div>

    );
  }
}

export default App;
