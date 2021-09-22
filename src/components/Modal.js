import React from 'react';

const Modal = (props) => {
    const handleYes = () => {
        props.yesFunc();
    }

    const handleNo = () => {
        props.noFunc();
    }

    return(<div>
        <h1>{props.nickname}</h1>
        <button onClick={handleYes}>Yes</button> <button onClick={handleNo}>No</button>
    </div>)
}

export default Modal;