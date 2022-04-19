// CheckBox.tsx

import React from 'react';
import ClassyName from '../common/ClassyName';
import './CheckBox.css';

class CheckBox extends React.Component {

    render () {
        let className = new ClassyName("CheckBox");
        let checkClassName = new ClassyName("CheckBox__Check");


        return (
            <div className={className.getResult()}>
                <span className={checkClassName.getResult()}>V</span>
            </div>
        )
    }
}

export default CheckBox;