
let element = React.createElement('h1', null, 'Hello React');
let element2 = React.createElement('p', null, 'Library for created UI');
const container = React.createElement('div', { className:'container'}, element, element2);


ReactDOM.render(container, document.getElementById('root'));