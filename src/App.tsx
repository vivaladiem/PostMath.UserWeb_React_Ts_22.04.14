import React, { Component } from 'react';
import Button from './stories/Button/Button';
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import PageRule from './Footer/PageRule'
import PageCopyRight from './Footer/PageCopyRight';
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import PopupDownload from './Popup/PopupDownload';



//팝업관련 Props 와 state 는 삭제되어야합니다.
interface Props {
  
}

interface State {
  PopupDownloadClicked : boolean
}

class App extends Component<Props, State> {
  constructor(props :Props){
    super(props)
    this.state={
      PopupDownloadClicked:false
    }
    this.buttonClicked = this.buttonClicked.bind(this)
  }
  buttonClicked(){
    this.setState({PopupDownloadClicked : !this.state.PopupDownloadClicked})
  }
  render(){
    return (
      <div className="App">
        <Sidebar />
        <div className='Main'>
          <div className='Container'>
            
            <Routes>
              <Route path="/PageMyDb" element={<div><p>MY DB 페이지로 이동합니다.</p>
                <br/><br/><br/>
                <button onClick={this.buttonClicked}>원본다운로드팝업실행버튼</button>
                <PopupDownload
                  PopupDownloadClicked={this.state.PopupDownloadClicked}
                />
              </div>
              } />
              <Route path="/PageMyPaper" element={<p>My Paper 페이지로 이동합니다.</p>} />
              <Route path="/PageRule" element={<PageRule/>}/>
              <Route path="/PageCopyRight" element={<PageCopyRight/>}></Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

