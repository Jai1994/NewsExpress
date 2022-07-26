
import './App.css';

import React, { Component } from 'react'
import Navbar from './componet/Navbar';
import News from './componet/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  pageSize =10;
  apikey ="76eee0211062475aa68b518be1aad8d2";

  state={
    progress:0
  }

  render() {
    return (
      <div>
        <Router>
        <Navbar />
      <Routes>
          <Route exact path="/"
           element={<News pageSize={this.pageSize} apikey={this.apikey}
           country='in' key='general' category='general'/>} />

          <Route exact path="/business" 
          element={<News pageSize={this.pageSize} apikey={this.apikey}
           country='in' key='business' category='business'/>}/>

          <Route exact path="/entertainment"
           element={<News pageSize={this.pageSize} apikey={this.apikey} country='in'
            key='entertainment' category='entertainment'/>}/>

          <Route exact path="/health" element={<News pageSize={this.pageSize} apikey={this.apikey}
           country='in' key='health' category='health'/>} />

          <Route exact path="/science" element={<News pageSize={this.pageSize} apikey={this.apikey}
           country='in' key='science' category='science'/>} />

          <Route exact path="/sports" element={<News pageSize={this.pageSize} apikey={this.apikey}
           country='in' key='sports' category='sports'/>} />

          <Route exact path="/technology" element={<News pageSize={this.pageSize} apikey={this.apikey}
          country='in' key='technology' category='technology'/>} />

        </Routes>
      </Router>
      </div>
    )
  }
}

