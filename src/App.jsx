import React, { Component } from 'react';
import './App.css';
import Homepage from './views/Homepage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Allbeers from './views/Allbeers';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/beer" component={Allbeers} />
            <Route exact path="/" component={Homepage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
