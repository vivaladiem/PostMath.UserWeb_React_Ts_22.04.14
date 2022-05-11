import React, { Component } from 'react';
import Button from '../stories/Button/Button';
import './PopUp.css'


interface Props {
  selectBoxPopUpClicked: boolean;
  SelectBoxPopUpButtonClicked: any;
  mainTitle: string;
}

class PopUpSelectBox extends Component<Props> {
  render() {

    const isActive = this.props.selectBoxPopUpClicked ? "PopUp--open" : "PopUp"

    return (
      <div className={isActive + ' ' + 'PopUpSelectBox'}>
        <div className='PopUp'>
          <img className='PopUp__CloseButton' src='img/PopUpClose.svg'
            onClick={() => { this.props.SelectBoxPopUpButtonClicked() }}
          />
          <p className='PopUp__MainText'>{this.props.mainTitle}</p>
          <ul className="PopUp__Folderarea ScrollBox">
            <li className="Folderarea__Item">첫번째 데이터</li>
            <li className="Folderarea__Item">두번째 데이터</li>
            <li className="Folderarea__Item">세번째 데이터</li>
            <li className="Folderarea__Item">네번째 데이터</li>
            <li className="Folderarea__Item">다섯번째 데이터</li>
            <li className="Folderarea__Item">여섯번째 데이터</li>
            <li className="Folderarea__Item">일곱번째 데이터</li>
            <li className="Folderarea__Item">여덟번째 데이터</li>
            <li className="Folderarea__Item">아홉번째 데이터</li>
            <li className="Folderarea__Item">열번째 데이터</li>
          </ul>
          <div className='PopUp__ButtonArea'>
            <Button size="large" color="green">저장하기</Button>
          </div>
        </div>
      </div>
    )
  }
}


export default PopUpSelectBox