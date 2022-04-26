import React, { Component } from 'react';
import './Card__Header.css';
import ClassyName from '../../common/ClassyName';
import Checkbox from '../CheckBox/Checkbox'
import Checkbox_favorite from '../CheckBox/Checkbox_favorite';
import Morelist from '../DropDown/MoreMenu';

interface Props {
  difficulty: 1 | 2 | 3 | 4;  // 난이도별 이미지 
  pageinfo: string;           // 체크박스 옆에 나오는 info 
}

class Card__Header_b extends Component<Props> {

  render() {

    let className = new ClassyName('Card__Header--modifier Card__Header_b'),
      difficultyData;

    if (this.props.difficulty == 1) {
      difficultyData = 'img/diff1.svg';
    } else if (this.props.difficulty == 2) {
      difficultyData = 'img/diff2.svg';
    } else if (this.props.difficulty == 3) {
      difficultyData = 'img/diff3.svg';
    } else if (this.props.difficulty == 4) {
      difficultyData = 'img/diff4.svg';
    }

    return (
      <div className={className.getResult()}>
        <div className='Card__Header'>
          <Checkbox id_data='h_b' />               {/*ID 값을 입력해야합니다.*/}
          <p className='Card__PageLabel'>1페이지 1번</p>
          <span className='Card_empty'></span>
          <img className='Card__Difficulty' src={difficultyData} />
          <Checkbox_favorite id_data='f_h_b' />     {/*ID 값을 입력해야합니다.*/}
          {/*<Morelist items={[
            {itemName: "해설 PDF 추가", onClick: e=>{alert("해설 PDF 추가");}},
            {itemName: "PDF 삭제", color: 'red', onClick: e=>{alert("PDF 삭제");}}
          ]}/>*/}
        </div>
      </div>
    )
  }
}


export default Card__Header_b;