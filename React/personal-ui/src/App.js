import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="my-form">
          <Form/>
        </div>

      </div>
    );
  }
}

export default App;
