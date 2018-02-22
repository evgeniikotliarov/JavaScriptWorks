import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/Header';
import Todo from "./components/Todo";
import './components/Styles.css'
import todos from "./todos";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleStatusChange(id) {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos: todos});
    }

    handleDelete(id){
        let todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({todos: todos});
    }

    render() {
        return (
            <main>
                <Header title={this.props.title}/>
                <section className="todo-list">
                    {this.state.todos.map(todo => <Todo key={todo.id}
                                                        title={todo.title}
                                                        id={todo.id}
                                                        completed={todo.completed}
                                                        onStatusChange={this.handleStatusChange}
                                                        onDelete={this.handleDelete}/>)}
                </section>
            </main>
        );
    }
}

App.propTypes = {
    title: PropTypes.string,
    initialData: PropTypes.arrayOf(PropTypes.shape(
        {
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }
    )).isRequired
};
App.defaultProps = {
    title: 'React TODO',
};

export default App;
