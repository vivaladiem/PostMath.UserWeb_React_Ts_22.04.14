//PopUp.tsx
import React, { ReactNode } from 'react';
import ClassyName from '../../common/ClassyName';
import './PopUp.css';

interface Props {
    className?: string;
    key?: string;
    isOpen: boolean;
    onOpen?():void;
    onClose():void;
    children: ReactNode;
    willDarkenBackground?: boolean;
}

/**
 * 
 * 설       명 : 팝업의 여닫는 기능을 구현한 틀입니다.
 * - isOpen Prop으로 열지 닫을지 결정합니다.
 * - 따라서 사용하는 곳에서 state에 각 팝업의 열림 상태를 저장,
 * - isOpen Prop에 전달하고,
 * - 열어야 할 떄 state를 true
 * - onClose 함수 prop에서 state를 false로 바꾸는 처리를 하면 됩니다.
 * 
 */
export default class PopUp extends React.Component<Props> {

    private ref;

    constructor(props: Props) {
        super(props);

        this.ref = React.createRef<HTMLDivElement>();

        this.props.onOpen && this.props.onOpen();
    }

    private outsideClickHandler = (event: MouseEvent) => {
        if (!this.ref.current?.contains(event.target as Node)) {
            this.props.onClose();
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.outsideClickHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.outsideClickHandler);
    }

    render() {

        // 클래스네임을 구성합니다.
        let className = new ClassyName("PopUp");
        if (this.props.className) {
            className.externalClassName(this.props.className);
        }

        // 팝업을 구성합니다.
        let popUp = null;
        let background = null;
        if (this.props.isOpen) {
            popUp = <div ref={this.ref} className={className.getResult()} key={this.props.key}>
                <p className="PopUp__CloseButton" onClick={this.props.onClose}>&#10006;</p>
                <div className="PopUp__Body">
                    {this.props.children}
                </div>
            </div>

            // 설정값에 따라 배경을 설정합니다.
            if (this.props.willDarkenBackground) {
                background = <div className="PopUp__Background"/>
            }
        }

        return (
            <>
                {background}
                {popUp}
            </>
        )
    }
}