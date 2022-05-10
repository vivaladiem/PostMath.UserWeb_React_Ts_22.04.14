import React, {Component} from 'react';
import Button from '../stories/Button/Button';
import './Popup.css'


interface Props{
  selectBoxPopupClicked :boolean;
  SelectBoxPopupButtonClicked : any;
  mainTitle:string;
}

class PopUpSelectBox extends Component<Props> {
  render(){

    const isActive = this.props.selectBoxPopupClicked ? "Popup--open":"Popup"

    return(
      <div className={isActive + ' ' + 'PopUpSelectBox'}>
        <div className='PopupBox'>
          <img className='PopupBox__CloseButton' src='img/PopupClose.svg'
            onClick={() => { this.props.SelectBoxPopupButtonClicked() }}
          />
          <p className='PopupBox__MainText'>{this.props.mainTitle}</p>
          <ul className="PopupBox__Folderarea ScrollBox">
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
          <div className='PopupBox__ButtonArea'>
            <Button size="large" color="green">저장하기</Button>
          </div>
        </div>
      </div>
    )
  }
}


export default PopUpSelectBox