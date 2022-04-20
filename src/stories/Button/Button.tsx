// Button.tsx

import * as React from 'react';
import "./Button.css";
import ClassyName from '../../common/ClassyName';

// props 목록을 정의합니다.
interface Props {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    color?: "green" | "greenGradient" | "grey" | "blue";
    size?: 'longFat' | 'long' | 'shortFat' | 'short' | 'mini' | 'round';
    children?: any;
}

/**
 * 이    름 : Button
 * 작 성 자 : 임영우, 라강인
 * 설    명 : 
 */

class Button extends React.Component<Props> {



    render() {

        let className = new ClassyName("Button");
        if (this.props.color) {
            className.modifier("color", this.props.color);
        }

        if (this.props.size) {
            className.modifier("size", this.props.size);
        }

        if (this.props.className) {
            className.externalClassName(this.props.className);
        }


        return (
            <a className= { className.getResult() } 
            onClick = { this.props.onClick }> { this.props.children } </a> // props에 쓰이는 모든 것은 위의 interface Props에서 정의해줘야합니다.(children 제외)
        )
    }
}

export default Button;