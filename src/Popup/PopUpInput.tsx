import React, {Component} from 'react'
import Button from '../stories/Button/Button';
import './Popup.css'

interface Props{
  InputPopupButtonClicked:any;
  inputPopupClicked:boolean;
  mainTitle:string;
  Buttonchildren:string
  ButtonColor:"green" | "grey" | "blue";
  children:any;
}

interface state{
  
}

class PopUpInput extends Component<Props> {

  render(){
    
    const isActive = this.props.inputPopupClicked ? "Popup--open":"Popup"

    return(
      <div className={isActive+' '+'PopUpInput'}>
        <div className='PopupBox'>
          <img className='PopupBox__CloseButton' src='img/PopupClose.svg'
            onClick={()=>{this.props.InputPopupButtonClicked()}}
          />
          <p className='PopupBox__MainText'>{this.props.mainTitle}</p>
          <div className="PopupBox__SubText">
            {this.props.children}
          </div>
          <div className='PopupBox__ButtonArea'>
            <Button size="large" color={this.props.ButtonColor}>{this.props.Buttonchildren}</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default PopUpInput
