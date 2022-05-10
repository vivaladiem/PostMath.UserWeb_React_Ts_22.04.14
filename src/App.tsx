import React, { Component } from 'react';
import Button from './stories/Button/Button';
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import PageRule from './Footer/PageRule'
import PageCopyRight from './Footer/PageCopyRight';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import PopupDownload from './Popup/PopupDownload';
import PopUpInput from './Popup/PopUpInput'
import Input from './stories/Input/Input'
import PopUpYesNo from './Popup/PopUpYesNo'
import PopUpTextarea from './Popup/PopUpTextarea'
import PopUpSelectBox from './Popup/PopUpSelectBox';



//팝업관련 Props 와 state 는 항상 같이 움직여야합니다.

interface Props {

}

interface State {
  DownloadPopupClicked: boolean
  inputPopupClicked: boolean
  yesNoPopupClicked: boolean
  textareaPopupClicked: boolean
  selectBoxPopupClicked: boolean
  
  /*InputPopupState*/
  input_1_Length : number
  input_2_Length : number
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      DownloadPopupClicked: false,
      inputPopupClicked: false,
      yesNoPopupClicked: false,
      textareaPopupClicked: false,
      selectBoxPopupClicked: false,

        /*InputPopupState*/
      input_1_Length : 0,
      input_2_Length : 0
    }
    this.DownloadPopupbuttonClicked = this.DownloadPopupbuttonClicked.bind(this)
    this.InputPopupButtonClicked = this.InputPopupButtonClicked.bind(this)
    this.YesNoPopupButtonClicked = this.YesNoPopupButtonClicked.bind(this)
    this.TextareaPopupButtonClicked = this.TextareaPopupButtonClicked.bind(this)
    this.SelectBoxPopupButtonClicked = this.SelectBoxPopupButtonClicked.bind(this)
  }

  DownloadPopupbuttonClicked() {
    this.setState({ DownloadPopupClicked: !this.state.DownloadPopupClicked })
  }

  InputPopupButtonClicked() {
    this.setState({ inputPopupClicked: !this.state.inputPopupClicked })
  }

  YesNoPopupButtonClicked() {
    this.setState({ yesNoPopupClicked: !this.state.yesNoPopupClicked })
  }

  TextareaPopupButtonClicked() {
    this.setState({ textareaPopupClicked: !this.state.textareaPopupClicked })
  }

  SelectBoxPopupButtonClicked() {
    this.setState({ selectBoxPopupClicked: !this.state.selectBoxPopupClicked })
  }

  render() {
    console.log('input_1_Length :'+this.state.input_1_Length)
    console.log('input_2_Length :'+this.state.input_2_Length)
    return (
      <div className="App">
        <Sidebar />
        <div className='Main'>
          <div className='Container'>
            <Routes>
              <Route path="/PageMyDb" element={<div><p>MY DB 페이지로 이동합니다.</p>

                {/* ------- ! 임시 팝업버튼 시작 ! ------- */}
                <br /><br /><br />
                <button onClick={this.DownloadPopupbuttonClicked}>원본다운로드팝업실행버튼</button>
                <br /><br />
                <button onClick={this.InputPopupButtonClicked}>인풋팝업실행버튼</button>
                <br /><br />
                <button onClick={this.YesNoPopupButtonClicked}>확인팝업실행버튼</button>
                <br /><br />
                <button onClick={this.TextareaPopupButtonClicked}>텍스트팝업실행버튼</button>
                <br /><br />
                <button onClick={this.SelectBoxPopupButtonClicked}>셀렉트박스팝업실행버튼</button>
                {/* ------- ! 임시 팝업버튼 종료 ! ------- */}
              </div>
              } />
              <Route path="/PageMyPaper" element={<p>My Paper 페이지로 이동합니다.</p>} />
              <Route path="/PageRule" element={<PageRule />} />
              <Route path="/PageCopyRight" element={<PageCopyRight />} />
            </Routes>
          </div>

          {/* <------- ! 팝업 컴포넌트 존재영역 ! -------> */}

          {/* <------- ! 원본다운로드팝업 ! -------> */}
          <PopupDownload
            PopupDownloadClicked={this.state.DownloadPopupClicked}
            PopupDownloadbuttonClicked={this.DownloadPopupbuttonClicked}
          />

          {/* <------- ! 인풋팝업 ! -------> */}
          <PopUpInput
            mainTitle='이름과 휴대폰번호를 입력하세요'
            Buttonchildren='내맘대로 넣는거지'
            ButtonColor={
              this.state.input_1_Length>5 && this.state.input_2_Length>5 ? 'green' : 'grey'
            }
            inputPopupClicked={this.state.inputPopupClicked}
            InputPopupButtonClicked={this.InputPopupButtonClicked}>
            
            {/* 여기서 부턴 PopUpInput에 children 으로 전송됩니다. */}

            <p>가입하신 이름과 휴대폰번호를 입력하세요.</p>
            <p>해당 휴대폰 번호로 이메일을 발송합니다.</p>
            <div className="PopupBox__InputArea">
              <Input id="randomId" onChange={(text) => { this.setState({input_1_Length : text.length})}} color='grey' size='large'
                placeholder='이름 입력'
              />
              <Input id="randomId2" onChange={(text) => { this.setState({input_2_Length : text.length})}} color='grey' size='large'
                placeholder='어떤것을 입력할거에요?'
              />
            </div>
          </PopUpInput>

          {/* <------- ! 확인팝업 ! -------> */}
          <PopUpYesNo
            YesNoPopupButtonClicked={this.YesNoPopupButtonClicked}
            yesNoPopupClicked={this.state.yesNoPopupClicked}
            mainTitle="PDF를 삭제하시겠어요?"
          >

            {/* 여기서 부턴 PopUpYesNo에 children 으로 전송됩니다. */}
            <p>PDF 를 삭제할 경우,</p>
            <p>PDF와 관련된 모든 MY DB자료도 삭제됩니다.</p>

          </PopUpYesNo>

          {/* <------- ! 텍스트팝업 ! -------> */}
          <PopUpTextarea
            TextareaPopupButtonClicked={this.TextareaPopupButtonClicked}
            textareaPopupClicked={this.state.textareaPopupClicked}
            mainTitle="제목수정"
            placeholder='내맘대로 수정할테야'
          >
            {/* 여기서 부턴 PopUpYesNo에 children 으로 전송됩니다. */}
            <p>30자 이내로 작성해주세요.</p>
          </PopUpTextarea>

          {/* <------- ! 셀렉트박스팝업 ! -------> */}
          <PopUpSelectBox
            SelectBoxPopupButtonClicked={this.SelectBoxPopupButtonClicked}
            selectBoxPopupClicked={this.state.selectBoxPopupClicked}
            mainTitle="이동시킬 폴더를 선택하세요."
          ></PopUpSelectBox>

          {/* <------- ! 팝업 컴포넌트 끝 ! -------> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

