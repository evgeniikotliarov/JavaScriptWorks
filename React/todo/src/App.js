import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/Header';
import Todo from "./components/Todo";
import './components/Styles.css';
import Form from "./components/Form";
import todos from "./todos";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    nextId() {
        this._nextId = this._nextId || 4;
        return this._nextId++;
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

    handleAdd(title) {
        let todo = {
            id: this.nextId(),
            title,
            completed: false
        };

        let todos = [...this.state.todos, todo];

        this.setState({todos});
    }

    handleDelete(id){
        let todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({todos: todos});
    }

    handleEdit(id, title){
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }

            return todo;
        });
        this.setState({ todos })
    }

    render() {
        return (
            <main>
                <Header title={this.props.title} todos={this.state.todos}/>
                <section className="todo-list">
                    {this.state.todos.map(todo => <Todo key={todo.id}
                                                        title={todo.title}
                                                        id={todo.id}
                                                        completed={todo.completed}
                                                        onStatusChange={this.handleStatusChange}
                                                        onDelete={this.handleDelete}
                                                        onEdit={this.handleEdit}
                    />)}

                </section>
                <Form onAdd={this.handleAdd}/>
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
