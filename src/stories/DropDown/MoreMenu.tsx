// MoreMenu.tsx
import React from 'react';
import DropDownBase from './DropDownBase';
import './MoreMenu.css';
import ClassyName from '../../common/ClassyName';

export function MoreMenu(props : Props) {

    let className = new ClassyName("MoreMenu");
    if (props.className) {
        className.externalClassName(props.className);
    }

    return (
        <DropDownBase className={className.getResult()}
            renderButton={() => <img className="MoreMenu__Button" src="./img/icon_more.png" alt="more menu" />}
            willHideButton={false}>
                {props.children}
        </DropDownBase>
            
    )
}

interface Props {
    className?: string;
    children: React.ReactNode;
}

export default MoreMenu;