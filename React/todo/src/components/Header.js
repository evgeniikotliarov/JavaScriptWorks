import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

Header.checkPropTypes = {
  title: PropTypes.string.isRequired
};

export default Header;