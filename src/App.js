import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from "react-router-dom"
import './App.css';

import Header from './Components/Header/Header.js'
import Sidebar from './Components/Sidebar/Sidebar.js'
import IcomingCalls from './Components/IcomingCalls/IcomingCalls'
import MissingCalls from './Components/MissingCalls/MissingCalls'


class App extends Component {
  state = { title: 'TEST-O' }

  handleUpdate() {
    console.log('action', this.props)
    // let {
    //   action
    // } = this.state.location;

    // console.log('action', this.props)

    // if (action === 'PUSH') {
    //   window.scrollTo(0, 0);
    // }
  }

  render() {
    const { title } = this.state
    return (
      <BrowserRouter>
        <div>
          <Header title={title} />
          <article className="App">
            <Sidebar />
            <Route exact path="/" render={() => <Redirect to="/callcenter/all" />} />
            <Route path="/callcenter/all" component={IcomingCalls} onEnter={this.handleUpdate.bind(this)} />
            <Route path="/callcenter/incoming" component={IcomingCalls} />
            <Route path="/callcenter/missing" component={MissingCalls} />
            <Route path="/callcenter/reaction" component={IcomingCalls} />
          </article>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
