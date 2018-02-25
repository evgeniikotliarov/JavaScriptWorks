import React, {Component} from 'react';
import Button from './Button';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <form className="todo-form">
                <input type="text" placeholder="What should be done:"/>

                <Button type="submit">Add</Button>
            </form>
        )
    }
}

Form.propTypes = {

};

export default Form;