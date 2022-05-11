import React, { Component } from 'react'
import './PopUp.css'
import Button from '../stories/Button/Button'

interface Props {
  children: any;
  YesNoPopUpButtonClicked: any;
  yesNoPopUpClicked: boolean;
  mainTitle: string
  colorTitle?: string
}

class PopUpYesNo extends Component<Props> {

  constructor(props: Props) {
    super(props)

  }

  render() {

    const isActive = this.props.yesNoPopUpClicked ? "PopUp--open" : "PopUp"
    let colorTitle;
    if (this.props.colorTitle) {
      colorTitle = <p className="PopUp__MainTitle--green">{this.props.colorTitle}</p>
    }


    return (
      <div className={isActive + ' ' + 'PopUpYesNo'}>
        <div className='PopUp'>
          <img className='PopUp__CloseButton' src='img/PopUpClose.svg'
            onClick={() => { this.props.YesNoPopUpButtonClicked() }}
          />
          {colorTitle}
          <p className='PopUp__MainText'>{this.props.mainTitle}</p>
          <div className="PopUp__SubText">
            {this.props.children}
          </div>
          <div className='PopUp__ButtonArea'>
            <ul className='PopUp__Buttons'>
              <li className='Buttons__Button'><Button size="large" color="grey">취소</Button></li>
              <li className='Buttons__Button'><Button size="large" color="blue">삭제</Button></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PopUpYesNo