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
        let moreMenuClassName = new ClassyName("MoreMenu");
        if (this.state.open) {
            moreMenuClassName.modifier("open");
        }

        const list = this.props.items.map((item, index) => {
            let className = new ClassyName("MoreMenu__Item");
            if (item.color == 'red') {
                className.modifier(item.color);
            }

            return <li 
                className={className.getResult()} 
                key={index} 
                onClick={item.onClick}>
                    {item.itemName}
                </li>
            }
        );

        return (
            <div className={moreMenuClassName.getResult()} onClick={this.onClick} onBlur={this.onBlur} tabIndex={0} >
                {this.props.button}
                {this.state.open ? 
                <ul className="MoreMenu__List">
                    {list}
                </ul>
                :
                null
                }
            </div>
        )
    }
}

export default DropDown;

interface Props {
    button: React.ReactNode;
    items: Array<{
        itemName: string,
        color?: 'red',
        onClick?: (e?: React.SyntheticEvent) => void
    }>
}

interface State {
    open: boolean;
}
