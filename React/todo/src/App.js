import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <section className="todo-list">
            {this.props.todos.map(todo => <Todo key={todo.id} title={todo.title} completed={todo.completed}/>)}
        </section>
      </main>
    );
  }
}

App.propTypes = {
    title: PropTypes.string,
    todos: PropTypes.arrayOf(PropTypes.shape(
        {title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired}
    )).isRequired
};
App.defaultProps = {
    title: 'React TODO',
};

export default App;
