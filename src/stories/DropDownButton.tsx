// DropDownButton.tsx
import React from 'react';
import DropDown,  {Items} from './DropDown';
import Button from './Button/Button';
import './DropDownButton.css';
import ClassyName from '../common/ClassyName';


class DropDownButton extends React.Component<Props> {
    render() {
        
        return (
            <DropDown
                renderButton = { isOpen => {
                    let arrowClassName = new ClassyName("DropDownButton__Arrow");
                    if (isOpen) {
                        arrowClassName.modifier("open");
                    }
                    return <Button className="DropDown__Button" color="green">
                            파일 업로드
                            {<img className={arrowClassName.getResult()} src="./img/icon_arrow.png"/> }
                        </Button>
                }}
                items={this.props.items}
            />
        )
    }
}


interface Props {
    items: Items;
}

export default DropDownButton;