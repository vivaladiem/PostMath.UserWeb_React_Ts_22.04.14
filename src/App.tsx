import React, { SyntheticEvent, useState } from 'react';
import Button from './stories/Button/Button';
import PopUp from './stories/PopUp/PopUp';
import PopUpChangeTitle from './stories/PopUp/PopUpChangeTitle';

function App() {

  const [isSamplePopUpOpen, setSamplePopUpOpen] = useState(false);
  const [isChangeTitlePopUpOpen, setChangeTitlePopUpOpen] = useState(false);

  return (
    <div className="App">
      <div className="PopUpSampleContainer">
        <h1>Pop Up 테스트</h1>
        <h3>샘플 팝업</h3>
        <Button onClick={() => {setSamplePopUpOpen(true);}}>샘플 팝업 열기</Button>
        <PopUp isOpen={isSamplePopUpOpen} onClose={() => {setSamplePopUpOpen(false);}} willDarkenBackground={true}>
          <div className="PopUp__Body">
            PopUp Sample
          </div>
        </PopUp>
        <h3>제목 바꾸기 팝업</h3>
        <Button onClick={()=>{setChangeTitlePopUpOpen(true);}}>제목 바꾸기 팝업 열기</Button>
        <PopUpChangeTitle isOpen={isChangeTitlePopUpOpen} onOpen={()=>{console.log('onOpen');}} onClose={()=>{setChangeTitlePopUpOpen(false);}} onConfirm={(value) => {console.log(value);}} />
      </div>
    </div>
  );

  
}



export default App;
