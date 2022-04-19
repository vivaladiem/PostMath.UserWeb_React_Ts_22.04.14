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

    private list;

    constructor(props: Props) {
        super(props);

        this.state = {open: false};

        this.onClick = this.onClick.bind(this);
        this.onBlur = this.onBlur.bind(this);

        this.list = this.props.items.map((item, index) => {
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
        let listClassName = new ClassyName("MoreMenu__List");
        if (this.state.open) {
            listClassName.modifier("open");
        }

        return (
            <div className="MoreMenu" onClick={this.onClick} onBlur={this.onBlur} tabIndex={0} >
                {this.props.button}
                <ul className={listClassName.getResult()}>
                    {this.list}
                </ul>
            </div>
        )
    }
}

export default DropDown;

interface Props {
    button: React.ReactNode;
    items: {
        itemName: string,
        color?: 'red',
        onClick?: (e?: React.SyntheticEvent) => void
    }[]
}

interface State {
    open: boolean;
}
