// DropDownButton.tsx
import React from 'react';
import DropDown from './DropDown';
import Button from './Button';

class DropDownButton extends React.Component {
    render() {
        return (
            <DropDown button={<Button color="green">파일 업로드</Button>}
            items={[
                {itemName: "PDF", onClick: () => {alert("PDF 업로드");}},
                {itemName: "HWP", onClick: () => {alert("HWP 업로드");}}
            
            ]
        }/>
        )
    }
}

export default DropDownButton;