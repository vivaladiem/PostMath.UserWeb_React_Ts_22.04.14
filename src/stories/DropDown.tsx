// DropDown.tsx
import React from 'react';
import './DropDown.css';
import ClassyName from '../common/ClassyName';

/**
 * 설      명 : 드롭다운의 기능부분
 *              여닫는 기능만 구현하는 틀
 *              button, items 속성으로 완성해서 사용한다.
 * 
 * 작  성  자 : 임영우
 * 작성  일자 : 22.04.19
 * 
 */


class DropDown extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        // state를 초기화한다.
        this.state = {open: false};

        // 이벤트 핸들러를 바인드한다.
        this.onClick = this.onClick.bind(this);
        this.onBlur = this.onBlur.bind(this);

    }

    onClick() {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    onBlur(e: React.SyntheticEvent) {
        this.setState(() => ({
            open: false
        }))
    }

    

    render() {
        // 클래스이름을 구성한다.
        let moreMenuClassName = new ClassyName("DropDown");
        if (this.state.open) {
            moreMenuClassName.modifier("open");
        }
        
        // 버튼을 구성한다.
        let button = this.props.button;
        if (this.props.hideButton && this.state.open) {
            button = null;
        }
        
        
        // 리스트를 구성한다.
        const items = this.props.items.map((item, index) => {
            let className = new ClassyName("DropDown__Item");
            if (item.color == 'red') {
                className.modifier("color", item.color);
            }
            return <li 
                className={className.getResult()} 
                key={index} 
                onClick={item.onClick}>
                    {item.itemName}
                </li>
            }
        );

        let list = null;
        if (this.state.open) {
            list =  <ul className="DropDown__List">
                        {items}
                    </ul>
        }

        return (
            <div className={moreMenuClassName.getResult()} onClick={this.onClick} onBlur={this.onBlur} tabIndex={0} >
                {button}
                {list}
            </div>
        )
    }
}

export default DropDown;

interface Props {
    button: React.ReactNode;
    hideButton?: boolean,
    items: Array<{
        itemName: string,
        color?: 'red',
        onClick?: (e?: React.SyntheticEvent) => void
    }>,
}

interface State {
    open: boolean;
}
