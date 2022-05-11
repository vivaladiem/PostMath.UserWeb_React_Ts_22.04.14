// DropDown.tsx
import React from 'react';
import DropDownBase from './DropDownBase';
import ClassyName from '../../common/ClassyName';


class DropDown extends React.Component<Props> {

    renderButton = (isOpen?:Boolean) => {
        // 버튼을 구성한다.
        let buttonClassName = new ClassyName("DropDown__Button");
        isOpen && buttonClassName.modifier("open");

        let arrowClassName = new ClassyName("DropDown__Arrow");
        isOpen && arrowClassName.modifier("open");

        //  아이콘이 있으면 구성한다.
        let icon:React.ReactNode = null;
        if (this.props.iconSrc) {
            icon = <img className="DropDown__Icon" src={this.props.iconSrc} />;
        }

        return <div className={buttonClassName.getResult()}>
                    {icon}
                    <span className="DropDown__Label">{this.props.label}</span>
                    {<img className={arrowClassName.getResult()} src="./img/icon_arrow.png"/> }
                </div>
    }



    render() {
        

        return (
            <DropDownBase
                className={this.props.className}
                renderButton = {this.renderButton}>
                    {this.props.children}
            </DropDownBase>
        )
    }
}


interface Props {
    className?: string;
    children: React.ReactNode;
    label: any;
    iconSrc?: string;
}

export default DropDown;
