// MoreMenu.tsx
import React from 'react';
import DropDown from './DropDown';
import './MoreMenu.css';
import ClassyName from '../../common/ClassyName';

export function MoreMenu(props : Props) {

    let className = new ClassyName("MoreMenu");
    if (props.className) {
        className.externalClassName(props.className);
    }

    return (
        <DropDown className={className.getResult()}
            renderButton={() => <img className="MoreMenu__Button" src="./img/icon_more.png" alt="more menu" />}
            willHideButton={true}>
                {props.children}
        </DropDown>
            
    )
}

interface Props {
    className?: string;
    children: React.ReactNode;
}

export default MoreMenu;