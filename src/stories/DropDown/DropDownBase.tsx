// DropDownBase.tsx
import React, { SyntheticEvent } from 'react';
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
    
    private dropDownRef = React.createRef<HTMLDivElement>();

    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    onButtonClicked = (e:SyntheticEvent<HTMLElement>) => {
        this.setState({isOpen: !this.state.isOpen})
    }

    onItemClicked = () => {
        if (this.props.willCloseOnItemSelected) {
            this.setState({isOpen: false});
        }
    }

    outsideClickHandler = (event: MouseEvent) => {
        const isOutsideClicked = !this.dropDownRef.current?.contains(event.target as Node);
        if (this.props.willCloseOnOutsideClicked == true
            || this.props.willCloseOnOutsideClicked == undefined 
            && isOutsideClicked) {
            this.setState({isOpen: false})
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.outsideClickHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.outsideClickHandler);
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
            <div ref={this.dropDownRef} className={className.getResult()}>
                <div onClick={this.onButtonClicked}>
                    {button}
                </div>
                <div onClick={this.onItemClicked}>
                    {this.state.isOpen && this.props.children}
                </div>
            </div>
        )
    }
}


interface Props {
    className?: string;
    renderButton(isOpen?: boolean) : React.ReactNode;
    willHideButton?: boolean;
    willCloseOnOutsideClicked?: boolean;
    willCloseOnItemSelected?: boolean;
    children: React.ReactNode;
}

interface State {
    isOpen: boolean;
}