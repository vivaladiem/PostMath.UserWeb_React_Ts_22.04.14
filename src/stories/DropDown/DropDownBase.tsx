// DropDownBase.tsx
import React, { useState, useEffect, SyntheticEvent } from 'react';
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


export default class DropDownBase extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    onFocus = (e: SyntheticEvent<HTMLDivElement>) => {
        
    }

    render() {

        // 클래스이름을 구성한다.
        let className = new ClassyName("DropDown");
        if (this.state.isOpen) {
            className.modifier("open");
        }
        if (this.props.className) {
            className.externalClassName(this.props.className);
        }

        // 버튼을 구성한다.
        let button = this.props.renderButton(this.state.isOpen);
        if (this.props.willHideButton && this.state.isOpen) {
            button = null;
        }

        return (
            <div className={className.getResult()}  tabIndex={-1} onFocus={this.onFocus}>
                {button}
                {this.props.children}
            </div>
        )
    }
}


interface Props {
    className?: string;
    renderButton: (isOpen?: boolean) => React.ReactNode;
    willHideButton?: boolean;
    children: React.ReactNode;
}

interface State {
    isOpen: boolean;
}