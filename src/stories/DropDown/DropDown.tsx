// DropDown.tsx
import React, { useState, useEffect } from 'react';
import './DropDown.css';
import ClassyName from '../../common/ClassyName';

/**
 * 설      명 : 드롭다운의 기능부분
 *              여닫는 기능만 구현하는 틀
 *              button은 사용할 때 조합하며, 안에 들어갈 리스트는 children으로 전달한다.
 * 
 * 작  성  자 : 임영우
 * 작성  일자 : 22.04.19
 * 
 */


export function DropDown(props : Props) {

    const [open, setOpen] = useState(false);

    // 클래스이름을 구성한다.
    let moreMenuClassName = new ClassyName("DropDown");
    if (open) {
        moreMenuClassName.modifier("open");
    }

    // 버튼을 구성한다.
    let button = props.renderButton(open);
    if (props.willHideButton && open) {
        button = null;
    }

        return (
            <div className={moreMenuClassName.getResult()} onClick={()=>setOpen(!open)} onBlur={()=>setOpen(false)} tabIndex={0} >
                {button}
                {open ? props.children : null}
            </div>
        )
    }

export default DropDown;

export interface Props {
    renderButton: (isOpen?: boolean) => React.ReactNode;
    willHideButton?: boolean;
    children: React.ReactNode;
}