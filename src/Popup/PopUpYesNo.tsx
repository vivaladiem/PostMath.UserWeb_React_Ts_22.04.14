import React, {Component} from 'react'
import './Popup.css'
import Button from '../stories/Button/Button'

interface Props{
  children:any;
  YesNoPopupButtonClicked:any;
  yesNoPopupClicked:boolean;
  mainTitle:string
  colorTitle?:string
}

class PopUpYesNo extends Component<Props> {

  constructor(props:Props){
    super(props)

  }

  render(){

    const isActive = this.props.yesNoPopupClicked ? "Popup--open":"Popup"
    let colorTitle;
    if(this.props.colorTitle){
      colorTitle = <p className="PopupBox__MainTitle--green">{this.props.colorTitle}</p>
    }
    

    return(
      <div className={isActive+' '+'PopUpYesNo'}>
      <div className='PopupBox'>
        <img className='PopupBox__CloseButton' src='img/PopupClose.svg'
          onClick={()=>{this.props.YesNoPopupButtonClicked()}}
        />
        {colorTitle}
        <p className='PopupBox__MainText'>{this.props.mainTitle}</p>
        <div className="PopupBox__SubText">
          {this.props.children}
        </div>
        <div className='PopupBox__ButtonArea'>
          <ul className='PopupBox__Buttons'>
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