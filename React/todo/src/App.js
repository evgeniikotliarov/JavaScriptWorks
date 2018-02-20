import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Todo from "./components/Todo";
import './components/Styles.css'

class App extends Component {
    props;
  render() {
    return (
      <main>
          <Header title={this.props.title}/>
        <section className="todo">
            <Todo title={"Learn Es6"} completed={true}/>
            <Todo title={"Learn React*"} completed={false}/>
        </section>
      </main>
    );
  }
}

export default App;
