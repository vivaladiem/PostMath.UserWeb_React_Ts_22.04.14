// MoreMenu.tsx
import React from 'react';
import DropDown from './DropDown';
import './MoreMenu.css';

export function MoreMenu(props : Props) {
        return (
            <DropDown 
                renderButton={() => <img className="MoreMenu__Button" src="./img/icon_more.png" alt="more menu" />}
                willHideButton={true}>
                    {props.children // 이거 children 아니고 그냥 정적으로 구성해야겠다.. 메뉴가 정해져있고, 그걸 써야지 매번 메뉴 지정하고 이벤트 넣을 수 없음}
    }
            </DropDown>
            
    )
}

interface Props {
    className?: string;
    children: React.ReactNode;
}

export default MoreMenu;