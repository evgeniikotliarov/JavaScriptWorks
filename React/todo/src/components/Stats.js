import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
    let total = props.todos.length;
    let completed = props.todos.filter(todo => todo.completed).length;
    let remaining = total - completed;

    return(<table className="table">
        <tbody>
        <tr>
            <th>All tasks:</th>
            <td>{total}</td>
        </tr>
        <tr>
            <th>Complete:</th>
            <td>{completed}</td>
        </tr>
        <tr>
            <th>Remaining:</th>
            <td>{remaining}</td>
        </tr>
        </tbody>
    </table>);
}

Stats.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Stats;