// MoreMenu.tsx
import React from 'react';
import DropDown from './DropDown';
import './MoreMenu.css';

class MoreMenu extends React.Component<Props> {
    render() {
        return (
            <DropDown 
                button={<img className="MoreMenu__Button" src="./img/icon_more.png" alt="more menu" />}
                items={[
                    {itemName: "해설 PDF 추가", onClick: (e) => {alert("해설 PDF 추가");}}, 
                    {itemName: "PDF 삭제", color: 'red', onClick: () => {alert("PDF 삭제");}}
                ]
                }
                hideButton={true}
            />
        )
    }
}

interface Props {
    className?: string;
}

export default MoreMenu;