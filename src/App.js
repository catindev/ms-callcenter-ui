import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from "react-router-dom"
import './App.css';

import AsyncComponent from './Components/AsyncComponent/AsyncComponent.js'
import Header from './Components/Header/Header.js'
import Sidebar from './Components/Sidebar/Sidebar.js'
// import IncomingCalls from './Components/IncomingCalls/IncomingCalls'
import MissingCalls from './Components/MissingCalls/MissingCalls'

const IncomingCalls = AsyncComponent(
  () => import('./Components/IncomingCalls/IncomingCalls')
    .then(module => module.default),
  { name: 'IncomingCalls' },
)


class App extends Component {
  state = { title: 'ТОО "Рога & Co" Ltd' }

  render() {
    const { title } = this.state
    return (
      <BrowserRouter>
        <div>
          <Header title={title} />
          <article className="App">
            <Sidebar />
            <Route exact path="/" render={() => <Redirect to="/callcenter/all" />} />
            <Route path="/callcenter/all" component={IncomingCalls} />
            <Route path="/callcenter/incoming" component={IncomingCalls} />
            <Route path="/callcenter/missing" component={MissingCalls} />
            <Route path="/callcenter/reaction" component={IncomingCalls} />
          </article>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
