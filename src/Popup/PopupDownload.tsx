//PopUpDownload.tsx
import React, { Component } from 'react'
import './PopUpDownload.css'
import Checkbox from '../stories/CheckBox/Checkbox'
import Button from '../stories/Button/Button'

/**
 * 이    름 : PopUpDownload
 * 작 성 자 : 라강인
 * 설    명 : 컴포넌트의 위치는 Main 태그 내부이면서 Container 태그 외부에 위치해야한다.
 */

interface Props {
  PopUpDownloadClicked?: boolean
  PopUpDownloadbuttonClicked?: any
}

class PopUpDownload extends Component<Props> {

  render() {

    const isActive = this.props.PopUpDownloadClicked ? "PopUp--open" : "PopUp"

    return (
      <div className={isActive + ' ' + 'PopUpDownload'}>
        <div className='PopUp PopUpDownload'>
          <img className='PopUp__CloseButton' src='img/PopUpClose.svg'
            onClick={() => { this.props.PopUpDownloadbuttonClicked() }}
          />
          <p className="PopUp__Title">원본 파일 다운로드</p>
          <div className="PopUp__PageOption">
            <p className="PopUp__PageOptionText">PAGE OPTION</p>
            <ul className="PopUp__PageOptionSet">
              <li className="PageOptionSet__PageOptionTitle">구성 PAGE :</li>
              <li className="PageOptionSet__PageOptionElement">
                <Checkbox id_data="sign" isChecked={true}></Checkbox>표지</li>
              <li className="PageOptionSet__PageOptionElement">
                <Checkbox id_data="index" isChecked={true}></Checkbox>목차</li>

            </ul>
            <ul className="PopUp__PageOptionSet">
              <li className="PageOptionSet__PageOptionTitle">본문 PAGE :</li>
              <li className="PageOptionSet__PageOptionElement">
                <Checkbox id_data="sign" isChecked={true}></Checkbox>표지</li>
              <li className="PageOptionSet__PageOptionElement">
                <Checkbox id_data="index" isChecked={true}></Checkbox>목차</li>
            </ul>
            <ul className="PopUp__PageOptionSet">
              <li className="PageOptionSet__PageOptionTitle">해설 PAGE :</li>
              <li className="PageOptionSet__PageOptionElement">
                <Checkbox id_data="sign" isChecked={true}></Checkbox>표지</li>
              <li className="PageOptionSet__PageOptionElement">
                <Checkbox id_data="index" isChecked={true}></Checkbox>목차</li>
            </ul>
            <ul className="PopUp__PageOptionSet">
              <li className="PageOptionSet__PageOptionTitle">기타 PAGE :</li>
              <li className="PageOptionSet__PageOptionElement">
                <Checkbox id_data="sign" isChecked={true}></Checkbox>표지</li>
              <li className="PageOptionSet__PageOptionElement">
                <Checkbox id_data="index" isChecked={true}></Checkbox>목차</li>
            </ul>
          </div>
          <div className="PopUpDownload__Button">
            <Button size="large">PDF 다운받기</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default PopUpDownload