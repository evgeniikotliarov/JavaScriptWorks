import React, {Component} from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.refs.title.value;

        if(title) {
            this.props.onAdd(title);
            this.refs.title.value = '';
        }
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" placeholder="What should be done:"/>

                <Button type="submit">Add</Button>
            </form>
        )
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default Form;