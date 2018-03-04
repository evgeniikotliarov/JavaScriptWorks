import React from 'react';

function Form() {
    return(
        <form className="sig-nup-form mdc-theme--dark">
            <input type="text" name="firstname" placeholder="Имя"/>
            <input type="text" name="lastname" placeholder="Фамилия"/>
            <input type="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Пароль"/>
            <button className="mdc-button mdc-button--stroked mdc-button--raised">Зарегистрироваться</button>
        </form>
    );
}

export default Form;