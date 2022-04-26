import React, { Component } from 'react';
import Checkbox from '../CheckBox/Checkbox';
import ClassyName from '../../common/ClassyName';
import './Card__Header.css'
import Checkbox_favorite from '../CheckBox/Checkbox_favorite';

interface Props {
  difficulty: 1 | 2 | 3 | 4;  // 난이도별 이미지 
}

class Card__Header_c extends Component<Props> {

  render() {

    let className = new ClassyName('Card__Header--modifier Card__Header_c'),
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
          <Checkbox isChecked={false} id_data='h_3' />             {/*ID 값을 입력해야합니다.*/}
          <p className='Card__PageLabel'>1번</p>
          <img className='Card__Dbimage' src='img/Dbimage.svg' />
          <img className='Card__Difficulty' src={difficultyData} />
          <span className='Card_empty'></span>
          <Checkbox_favorite id_data='f_h_c' />  {/*ID 값을 입력해야합니다.*/}
        </div>
      </div>
    )
  }
}

export default Card__Header_c;