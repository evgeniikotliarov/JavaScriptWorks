import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import {CSSTransitionGroup} from "react-transition-group";

class App extends Component {

  state = {
    mounted: true
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ mounted: false})
  };

  render() {
    return (
      <div className="App">
        <div className="my-form">
          <CSSTransitionGroup
            transitionNmae="fade"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnter={false}
            transitionLeave={true}
            transitionLeaveTimeout={1500}>
              {this.state.mounted && <Form onSubmit={this.handleSubmit}/>}
          </CSSTransitionGroup>
        </div>

      </div>
    );
  }
}

export default App;
