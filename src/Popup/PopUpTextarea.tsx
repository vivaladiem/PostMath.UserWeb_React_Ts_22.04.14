import React, { Component } from 'react'
import './Popup.css'
import Button from '../stories/Button/Button'

interface Props {
  TextareaPopupButtonClicked: any
  textareaPopupClicked: boolean
  mainTitle: string
  children?: any
  placeholder :string
}

class PopUpTextarea extends Component<Props> {

  render() {
    const isActive = this.props.textareaPopupClicked ? "Popup--open" : "Popup"

    return (

      <div className={isActive + ' ' + 'PopUpTextarea'}>
        <div className='PopupBox'>
          <img className='PopupBox__CloseButton' src='img/PopupClose.svg'
            onClick={() => { this.props.TextareaPopupButtonClicked() }}
          />
          <p className='PopupBox__MainText'>{this.props.mainTitle}</p>
          <div className="PopupBox__SubText">
            {this.props.children}
          </div>
          <textarea className="PopupBox__Textarea" placeholder={this.props.placeholder}></textarea>
          <div className='PopupBox__ButtonArea'>
            <ul className='PopupBox__Buttons'>
              <li className='Buttons__Button'><Button size="large" color="grey">취소</Button></li>
              <li className='Buttons__Button'><Button size="large" color="green">저장하기</Button></li>
            </ul>
          </div>
        </div>
      </div>

    )
  }
}

export default PopUpTextarea