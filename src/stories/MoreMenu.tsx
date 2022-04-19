// MoreMenu.tsx
import React from 'react';
import './MoreMenu.css';
import ClassyName from '../common/ClassyName';

/**
 * 설      명 : 더보기 메뉴 아이콘 (점 3개)
 *              여닫는 기능만 구현하는 틀
 *              팝업속의 메뉴 리스트는 사용하는 곳에서 children으로 넣는다.
 * 작  성  자 : 임영우
 * 작성  일자 : 22.04.19
 * 
 */

/** 
 * 1. 더보기 아이콘을 클릭했을 때
 *  1.1. 팝업이 뜬다.
 *  1.2. 메뉴를 선택했을 때
 *      1.2.1. 기능을 실행한다.(onClick 메서드가 알아서.) -> 키가 할당돼있어야.
 *  1.3. 다른 곳을 클릭했을 때
 *      1.3.1. 열림 상태를 거짓으로 바꾼다
 *  
 * */

class MoreMenu extends React.Component<Props, State> {

    private list;

    constructor(props: Props) {
        super(props);

        this.state = {open: false};

        this.onItemClicked = this.onItemClicked.bind(this);

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

    onItemClicked(e: React.SyntheticEvent) {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        let listClassName = new ClassyName("MoreMenu__List");
        if (this.state.open) {
            listClassName.modifier("open");
        }

        return (
            <div className="MoreMenu" onFocus={this.onItemClicked} onBlur={this.onItemClicked} tabIndex={0} >
                <img src="./more.png" alt="more menu" />
                <ul className={listClassName.getResult()}>
                    {this.list}
                </ul>
            </div>
        )
    }
}

export default MoreMenu;

interface Props {
    items: {
        itemName: string,
        color?: 'red',
        onClick?: (e?: React.SyntheticEvent) => void
    }[]
}

interface State {
    open: boolean;
}
