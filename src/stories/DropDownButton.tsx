// DropDownButton.tsx
import React from 'react';
import DropDown from './DropDown';
import Button from './Button/Button';
import './DropDownButton.css';
import ClassyName from '../common/ClassyName';


class DropDownButton extends React.Component {
    render() {
        let arrowClassName = new ClassyName("DropDownButton__Arrow");
        
        return (
            <DropDown 
            button={<Button color="green">파일 업로드{<img className="DropDownButton__Arrow" src="./img/icon_arrow.png"/> }</Button>}
            items={[
                {itemName: "PDF", onClick: (e) => {alert('PDF 업로드');}},
                {itemName: "HWP", onClick: (e) => {alert("HWP 업로드");}}
            ]}
            />
        )
    }
}
// todo) DropDown을 lifting state up 방식으로 변경하기

export default DropDownButton;