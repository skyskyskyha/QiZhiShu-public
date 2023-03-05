import React from 'react';
import '../assets/style/ButtonBase.scss'
const Button = (props) => {
    return (
        <button className={'button-base ' + (props.highlight && 'highlight')}>
            {props.children}
        </button>
    );
}

export default Button;
