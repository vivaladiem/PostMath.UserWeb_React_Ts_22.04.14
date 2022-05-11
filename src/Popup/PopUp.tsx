//PopUp.tsx

import React, { Component } from 'react'
import './PopUp.css'

/*
 * 이    름 : PopUp
 * 작 성 자 : 라강인
 * 설    명 : 외부클릭은 lifting stateup 통해서 진행됩니다.
              필요State: this.state = {
                            isPopUpOpen : false,
                            popUpCloseClassName :'PopUp--open'
                          }

              필요핸들러: handlePopUpOff(){
                            this.setState({popUpCloseClassName : 'PopUp--closed'})
                            setTimeout(()=>{this.setState({isPopUpOpen : false })},400)
                          }
 */

interface Props {
  children : any;
  popUpCloseClassName:string;
  handlePopUpOff : ()=> void;
}

class PopUp extends Component<Props> {

  popUpOff(e:any) {
    const who = e.target.closest('.PopUp')
    if(who===null){
      this.props.handlePopUpOff()
    }
  }
  render() {
    return (
      <div className={this.props.popUpCloseClassName} onClick={this.popUpOff.bind(this)}>
        <div className='PopUp'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default PopUp