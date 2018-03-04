import React from 'react';
import Input from "./Input";

function Form() {
    return(
        <form className="sig-nup-form mdc-theme--dark">
            <Input type="text" name="firstname" placeholder="Имя"/>
            <Input type="text" name="lastname" placeholder="Фамилия"/>
            <Input type="email" name="email" placeholder="Email"/>
            <Input type="password" name="password" placeholder="Пароль"/>
            <button className="mdc-button mdc-button--stroked mdc-button--raised">Зарегистрироваться</button>
        </form>
    );
}

export default Form;