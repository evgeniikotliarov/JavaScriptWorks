import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Todo from "./components/Todo";
import './components/Styles.css';
import Form from "./components/Form";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        axios.get('/api/todos')
            .then(response => response.data)
            .then(todos => this.setState({todos}))
            .catch(this.handleError);
    }

    handleStatusChange(id) {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos: todos});
    }

    handleAdd(title) {
        axios.post('api/todos', {title})
            .then(response => response.data)
            .then(todo => {
                let todos = [...this.state.todos, todo];
                this.setState({todos});
            })
            .catch(this.handleError);


    }

    handleDelete(id) {
        axios.delete(`api/todos/${id}`)
            .then(() => {
                let todos = this.state.todos.filter(todo => todo.id !== id);
                this.setState({todos: todos});
            })
            .catch(this.handleError);
    }

    handleToggle(id) {
        axios.patch(`api/todos/${id}`)
            .then(response => {
                let todos = this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo = response.data;
                    }
                    return todo;
                });
                this.setState({todos})
            })
            .catch(this.handleError);

    }

    handleEdit(id, title) {
        axios.put(`api/todos/${id}`, {title})
            .then(response => {
                let todos = this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo = response.data;
                    }
                    return todo;
                });
                this.setState({todos})
            })
            .catch(this.handleError);

    }

    handleError(error) {
        console.error(error);
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
