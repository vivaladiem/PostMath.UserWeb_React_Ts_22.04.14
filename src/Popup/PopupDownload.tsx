//PopupDownload.tsx
import React, {Component} from 'react'
import './Popup.css'

/**
 * 이    름 : PopupDownload
 * 작 성 자 : 라강인
 * 설    명 : 
 */

interface Props{
  PopupDownloadClicked ?:boolean
}

class PopupDownload extends Component<Props> {
  
  render(){

    const isActive = this.props.PopupDownloadClicked ? "Popup active":"Popup"

    return(
      <div className={'PopupDownload'+' '+isActive}>
        <div className='PopupBox'>
          
        </div>
      </div>
    )
  }
}

export default PopupDownload