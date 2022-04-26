// DropDownButton.tsx
import React from 'react';
import DropDown from './DropDown';
import ClassyName from '../../common/ClassyName';


class DropDownButton extends React.Component<Props> {
    render() {
        
        return (
            <DropDown
                renderButton = { isOpen => {
                    let buttonClassName = new ClassyName("DropDown__Button");
                    isOpen && buttonClassName.modifier("open");
                    
                    let arrowClassName = new ClassyName("DropDown__Arrow");
                    isOpen && arrowClassName.modifier("open");

                    return <div className={buttonClassName.getResult()}>
                                <span className="DropDown__Label">{this.props.buttonContent}</span>
                                {<img className={arrowClassName.getResult()} src="./img/icon_arrow.png"/> }
                            </div>
                }}>
                    {this.props.children}
            </DropDown>
        )
    }
}


interface Props {
    children: React.ReactChild;
    buttonContent: any;
}

export default DropDownButton;
