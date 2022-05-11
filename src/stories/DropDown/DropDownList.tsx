// DropDownList.tsx
import React, { SyntheticEvent } from 'react';
import ClassyName from '../../common/ClassyName';
import DropDown from './DropDown';

/**
 * 이      름 : DropDownList(리스트 드롭다운)
 * 기      능 : 문자열만을 항목으로 가지는 드롭다운
 * 작  성  자 : 임영우
 * 작성  일자 : 22.04.27
 */
class DropDownList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            selectedIndex: 0,
            label: this.props.label
        }
    }

    private onSelect(index: number, e: SyntheticEvent<HTMLLIElement>) {
        // 선택 항목 위치 상태를 변경한다.
        this.setState({
            selectedIndex: index,
        });

        // 선택 항목의 레이블을 읽는다.
        let label;
        if (index >= 0) {
            label = this.props.items[index];
        } else {
            label = this.props.label;
        }

        // 레이블을 변경한다.
        this.setState({
            label: label
        });
        
        // 선택 이벤트 핸들러를 호출한다.
        this.props.onSelect(index);
    }

    render() {

        // 항목들을 구성한다.
        let items = this.props.items.map((item, index) => {
            
            let cn = new ClassyName("DropDown__Item");
            if (index == this.state.selectedIndex) {
                cn.modifier("selected");
            }

            return <li key={index} className={cn.getResult()} onClick={this.onSelect.bind(this, index)}>{item}</li>
            }
        )

        // 리스트를 구성한다.
        let list = <ul className="DropDown__List">
            <li key={-1} className="DropDown__Item" onClick={this.onSelect.bind(this, -1)}>{this.props.label}</li>
            {items}
        </ul>


        return (
            <DropDown iconSrc='./img/icon_folder.svg' label={this.state.label} willCloseOnItemSelected={true}>
                {list}
            </DropDown>
        )
    }
}

export default DropDownList;

interface Props {
    label: string;
    items: string[];
    onSelect: (index: number) => void;
}

interface State {
    selectedIndex: number;
    label: string;
}