import React, { Component } from 'react'
import ClassyName from '../../common/ClassyName';
import './Card__Header.css'
import Checkbox from '../Checkbox/Checkbox';
import Checkbox_favorite from '../Checkbox/Checkbox_favorite';
import Morelist from '../DropDown/MoreMenu';

/*

1. My Db 에서 사용시 folder , stage 값을 반드시 받와야함. stage 의 값에 따라 more 리스 다르게 작동.
   stage 1, 3 -> morelist 없음 
   stage 2 : 해설 PDF 추가, PDF 삭제
   stage 3, 5 : 추가 한글변환, 해설 PDF 추가 , PDF 삭제

*/

interface Props {
  folder: 1 | 2 | 3;
  stage: 1 | 2 | 3 | 4 | 5;
  id_data: string;
}

class Card__Header_a extends Component<Props> {

  static folder = { 1: '폴더 1', 2: '폴더 2', 3: '폴더 3' };
  static stage = { 1: '정보입력중', 2: '정보입력완료', 3: '변환중', 4: '추가변환중', 5: '변환완료', };

  render() {
    let stageData;
    let IdData = this.props.id_data;
    if (this.props.stage == 1 || this.props.stage == 3) {
    }
    else {/*
      stageData = <Morelist items={[
        {itemName: "해설 PDF 추가", onClick: e=>{alert("해설 PDF 추가");}},
        {itemName: "PDF 삭제", color: 'red', onClick: e=>{alert("PDF 삭제");}}
      ]} className='Card__MoreList' />*/
    }

    let className = new ClassyName('Card__Header--modifier Card__Header_a')  // modifier 입력 

    return (
      <div className={className.getResult()}>
        <div className='Card__Header'>
          <Checkbox isChecked={false} id_data={IdData} />
          <img className='Card__FolderIcon' src='img/folder_icon.png' />
          <span className='Card__FolderName'>{Card__Header_a.folder[this.props.folder]}</span>
          <span className='Card_empty'></span>
          <Checkbox_favorite id_data={`f` + IdData} />   {/*ID 값을 입력해야합니다.*/}
          {stageData}
        </div>
      </div>
    )
  }
}


export default Card__Header_a;