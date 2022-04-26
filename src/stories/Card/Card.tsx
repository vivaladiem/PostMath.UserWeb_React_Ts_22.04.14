import * as React from 'react';
import './Card.css';
import ClassyName from '../../common/ClassyName';

/**
 * 이    름 : Card
 * 작 성 자 : 임영우, 라강인
 * 설    명 : 카드 컴포넌트의 틀
 */

class Card extends React.Component<Props> {


    render() {
        let cardCn = new ClassyName("Card");
        if (this.props.className) {
            cardCn.externalClassName(this.props.className);
        }

        return (
            <div className={cardCn.getResult()}>
                {this.props.header}
                {this.props.body}
                {this.props.footer}
            </div>
        )
    }

}




interface Props {

    // 구성요소
    header?: React.ReactNode;
    body: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;

}

export default Card;