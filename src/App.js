import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layout/Header';
import {Provider} from './Context';
import  AddContact from './Components/contacts/AddContact';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';
import Test from './Components/test/Test';
import EditContact from './Components/contacts/EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {

    return (

        <Provider>

            <Router>
              <div className="App">
              The App Component

                 <Header branding = "The Contact Manager">
                 </Header>

                <div className="container">

                    <Switch>
                        <Route exact path="/" component={Contacts}

                        />

                        <Route exact path="/about" component={About}

                        />
                        <Route exact path="/contact/add" component={AddContact}

                        />
                        <Route exact path="/contact/edit/:id" component={EditContact}

                        />
                        <Route exact path="/test" component={Test}

                        />
                        <Route component={NotFound} />

                    </Switch>

                </div>


                </div>
            </Router>

        </Provider>
    );
  }
}

export default App;
