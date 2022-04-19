// MoreMenu.tsx
import React from 'react';
import DropDown from './DropDown';
import './MoreMenu.css';

class MoreMenu extends React.Component {
    render() {
        return (
            <DropDown 
                button={<img className="MoreMenu__Button" src="./more.png" alt="more menu" />}
                items={[
                    {itemName: "해설 PDF 추가", onClick: (e) => {alert("해설 PDF 추가");}}, 
                    {itemName: "PDF 삭제", color: 'red', onClick: () => {alert("PDF 삭제");}}
                ]
            }/>
        )
    }
}

export default MoreMenu;