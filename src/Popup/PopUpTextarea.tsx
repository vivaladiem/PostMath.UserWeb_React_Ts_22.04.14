import React, { Component } from 'react'
import './PopUp.css'
import Button from '../stories/Button/Button'

interface Props {
  TextareaPopUpButtonClicked: any
  textareaPopUpClicked: boolean
  mainTitle: string
  children?: any
  placeholder: string
}

class PopUpTextarea extends Component<Props> {

  render() {
    const isActive = this.props.textareaPopUpClicked ? "PopUp--open" : "PopUp"

    return (

      <div className={isActive + ' ' + 'PopUpTextarea'}>
        <div className='PopUp'>
          <img className='PopUp__CloseButton' src='img/PopUpClose.svg'
            onClick={() => { this.props.TextareaPopUpButtonClicked() }}
          />
          <p className='PopUp__MainText'>{this.props.mainTitle}</p>
          <div className="PopUp__SubText">
            {this.props.children}
          </div>
          <textarea className="PopUp__Textarea" placeholder={this.props.placeholder}></textarea>
          <div className='PopUp__ButtonArea'>
            <ul className='PopUp__Buttons'>
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