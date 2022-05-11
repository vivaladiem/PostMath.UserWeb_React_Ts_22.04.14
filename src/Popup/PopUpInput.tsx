import React, { Component } from 'react'
import Button from '../stories/Button/Button';
import './PopUp.css'
import ClassyName from '../common/ClassyName';

interface Props {
  inputPopUpButtonClicked: () => void;
  mainTitle: string;
  Buttonchildren: string
  ButtonColor: "green" | "grey" | "blue";
  children: any;
}

interface state {

}

class PopUpInput extends Component<Props> {

  render() {

    // const isActive = this.props.inputPopUpClicked ? "PopUp--open" : "PopUp"
    let className = new ClassyName("PopUp");

    return (
      <div className={'PopUpInput'}>
        <div className='PopUp'>
          <img className='PopUp__CloseButton' src='img/PopUpClose.svg'
            onClick={() => { this.props.inputPopUpButtonClicked() }}
          />
          <p className='PopUp__MainText'>{this.props.mainTitle}</p>
          <div className="PopUp__SubText">
            {this.props.children}
          </div>
          <div className='PopUp__ButtonArea'>
            <Button size="large" color={this.props.ButtonColor}>{this.props.Buttonchildren}</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default PopUpInput
