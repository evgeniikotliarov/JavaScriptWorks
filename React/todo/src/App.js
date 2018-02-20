import React, { Component } from 'react';
import './App.css';

class App extends Component {
    props;
  render() {
    return (
      <main>
        <header>
          <h1>{this.props.title}</h1>
        </header>
        <section className="todo-list">
            <div className="todo completed">
                <button className="checkbox icon">
                    <i className="material-icons">check_box</i>
                </button>
                <button className="delete icon">
                    <i className="material-icons">delete</i>
                </button>
                <span className="todo-title">
                    Learn JS
                </span>
            </div>
            <div className="todo">
                <button className="checkbox icon">
                    <i className="material-icons">check_box_outline_blank</i>
                </button>
                <button className="delete icon">
                    <i className="material-icons">delete</i>
                </button>
                <span className="todo-title">
                    Learn React
                </span>
            </div>
        </section>
      </main>
    );
  }
}

export default App;
