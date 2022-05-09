// Button.tsx

import * as React from 'react';
import "./Button.css";
import ClassyName from '../../common/ClassyName';

// props 목록을 정의합니다.
interface Props {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    size?: "small" | "large" | string;
    state?: "disabled" | "negative" | string;
    line?: boolean;
    round?: boolean;
    iconSrc?: string;
    inline?: boolean;
    color?: "green" | "grey" | "blue";
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

        if (this.props.size) {
            className.modifier("size", this.props.size);
        }

        if (this.props.state) {
            className.modifier(this.props.state);
        }

        if (this.props.line) {
            className.modifier("line");
        }

        if (this.props.round) {
            className.modifier("round");
        }

        let icon = null;
        if (this.props.iconSrc) {
            icon = <img src={this.props.iconSrc} className="Button__Icon" />
        }

        let rightIcon = null;
        if (this.props.inline) {
            className.modifier("inline");
            rightIcon = <img src="/img/arrow_drop_down_circle_white.svg" className="Button__RightIcon" />
        }

        if (this.props.inline && this.props.line) {
            rightIcon = <img src="/img/arrow_drop_down_circle.svg" className="Button__RightIcon" />
        }

        if (this.props.className) {
            className.externalClassName(this.props.className);
        }

        if (this.props.color) {
            className.modifier("color", this.props.color);
        }


        return (
            <a className= { className.getResult() } onClick = { this.props.onClick }> 
                {icon} { this.props.children } {rightIcon} 
            </a>
        )
    }
}

export default Button;