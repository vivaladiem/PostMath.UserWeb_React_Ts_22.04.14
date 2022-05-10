//PopupDownload.tsx
import React, {Component} from 'react'
import './PopupDownload.css'
import Checkbox from '../stories/CheckBox/Checkbox'
import Button from '../stories/Button/Button'

/**
 * 이    름 : PopupDownload
 * 작 성 자 : 라강인
 * 설    명 : 컴포넌트의 위치는 Main 태그 내부이면서 Container 태그 외부에 위치해야한다.
 */

interface Props{
  PopupDownloadClicked ?:boolean
  PopupDownloadbuttonClicked?:any
}

class PopupDownload extends Component<Props> {
  
  render(){

    const isActive = this.props.PopupDownloadClicked ? "Popup--open":"Popup"

    return(
      <div className={isActive+' '+'PopupDownload'}>
        <div className='PopupBox PopupDownload'>
          <img className='PopupBox__CloseButton' src='img/PopupClose.svg'
            onClick={()=>{this.props.PopupDownloadbuttonClicked()}}
          />
          <p className="PopupBox__Title">원본 파일 다운로드</p>
          <div className="PopupBox__PageOption">
            <p className="PopupBox__PageOptionText">PAGE OPTION</p>
            <ul className="PopupBox__PageOptionSet">
              <li className="PageOptionSet__PageOptionTitle">구성 PAGE :</li>
              <li className="PageOptionSet__PageOptionElement">
                <Checkbox id_data="sign" isChecked={true}></Checkbox>표지</li>
              <li className="PageOptionSet__PageOptionElement">
              <Checkbox id_data="index" isChecked={true}></Checkbox>목차</li>
              
            </ul>
            <ul className="PopupBox__PageOptionSet">
              <li className="PageOptionSet__PageOptionTitle">본문 PAGE :</li>
              <li className="PageOptionSet__PageOptionElement">
                <Checkbox id_data="sign" isChecked={true}></Checkbox>표지</li>
              <li className="PageOptionSet__PageOptionElement">
              <Checkbox id_data="index" isChecked={true}></Checkbox>목차</li>
            </ul>
            <ul className="PopupBox__PageOptionSet">
              <li className="PageOptionSet__PageOptionTitle">해설 PAGE :</li>
              <li className="PageOptionSet__PageOptionElement">
                <Checkbox id_data="sign" isChecked={true}></Checkbox>표지</li>
              <li className="PageOptionSet__PageOptionElement">
              <Checkbox id_data="index" isChecked={true}></Checkbox>목차</li>
            </ul>
            <ul className="PopupBox__PageOptionSet">
              <li className="PageOptionSet__PageOptionTitle">기타 PAGE :</li>
              <li className="PageOptionSet__PageOptionElement">
                <Checkbox id_data="sign" isChecked={true}></Checkbox>표지</li>
              <li className="PageOptionSet__PageOptionElement">
              <Checkbox id_data="index" isChecked={true}></Checkbox>목차</li>
            </ul>
          </div>
          <div className="PopupDownload__Button">
            <Button size="large">PDF 다운받기</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default PopupDownload