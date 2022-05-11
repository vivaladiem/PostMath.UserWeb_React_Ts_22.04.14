import React, { Component } from 'react';
import Button from './stories/Button/Button';
import SideBar from './SideBar/SideBar'
import Footer from './Footer/Footer'
import PageRule from './Footer/PageRule'
import PageCopyRight from './Footer/PageCopyRight';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import PopUp from './PopUp/PopUp'
import PageLogOut from './User/PageLogOut'



interface Props {

}

interface State {
  isPopUpOpen : boolean
  popUpCloseClassName:string
  isLogOut : boolean
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isPopUpOpen : false,
      popUpCloseClassName :'PopUp--open',
      isLogOut : false
    }
    this.outsidePopUpClicked = this.outsidePopUpClicked.bind(this)
    this.logOutClicked=this.logOutClicked.bind(this)
  }

  outsidePopUpClicked(){
    this.setState({popUpCloseClassName : 'PopUp--closed'})
    setTimeout(()=>{this.setState({isPopUpOpen : false })},400)
  }

  logOutClicked(){
    this.setState({isLogOut : !this.state.isLogOut})
  }

  

  render() {
console.log(this.state.isLogOut)

    let page;
    if(this.state.isLogOut){
      page = 
      <Routes>
        <Route path="/PageLogOut" element={
          <div className="LogOut">
            <img className="LogOut__Image" src='img/finish_icon.png'></img>
            <h1 className="LogOut__MainText">로그아웃 되었습니다.</h1>
            <p className="LogOut__SubText">다음에 또 방문해 주세요!</p>
            <div className="LogOut__ButtonArea">
            <Link to="/PageMyDb" onClick={this.logOutClicked}><Button color='green' size="large">확인</Button></Link>
            </div>
          </div>
        }/>
      </Routes>
    }

    else{
      page = <div className='Container'>
      <Routes>
        <Route path="/PageMyDb" element={<div><p>MY DB 페이지로 이동합니다.</p>

          {/* ------- ! 임시 팝업버튼 시작 ! ------- */}
          <br /><br />
          <button onClick={()=>{this.setState({isPopUpOpen : true, popUpCloseClassName : 'PopUp--open'})}}>팝업실행</button>
          {/* ------- ! 임시 팝업버튼 종료 ! ------- */}

        </div>
        } />
        <Route path="/PageMyPaper" element={<p>My Paper 페이지로 이동합니다.</p>} />
        <Route path="/PageRule" element={<PageRule />} />
        <Route path="/PageCopyRight" element={<PageCopyRight />} />
        <Route path="/PageLogOut" element={<PageLogOut/>}/>
      </Routes>
    </div>
    }

    let popUp;
    if(this.state.isPopUpOpen){
      popUp=<PopUp popUpCloseClassName={this.state.popUpCloseClassName} handlePopUpOff={this.outsidePopUpClicked}>
        <img className='PopUp__CloseButton' src='img/PopUpClose.svg' onClick={this.outsidePopUpClicked}/>
        <p className='PopUp__MainText'>123</p>
        <div className="PopUp__SubText">123</div>
        <div className='PopUp__ButtonArea'>
          <Button size="large" color="grey">내맘대로</Button>
        </div>
      </PopUp>
    }

    return (
      <div className="App">
        <SideBar logOutClicked={this.logOutClicked} />
        <div className='Main'>
          {page}
      {/* <------- ! 팝업 컴포넌트 존재영역 ! -------> */}
          {popUp}
      {/* <------- ! 팝업 컴포넌트 끝 ! -------> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

