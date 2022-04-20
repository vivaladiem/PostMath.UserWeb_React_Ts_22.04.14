import React, { Component } from 'react';
import Checkbox_favorite from '../CheckBox/Checkbox_favorite';
import ClassyName from '../../common/ClassyName';
import './Card__Header.css'



class Card__Header_d extends Component {

  render() {

    let className = new ClassyName('Card__Header--modifier Card__Header_d')

    return (
      <div className={className.getResult()}>
        <div className='Card__Header'>
          <span className='Card_empty'></span>
          <Checkbox_favorite id_data='f_h_d' /> {/*ID 값을 입력해야합니다.*/}
        </div>
      </div>
    )
  }
}

export default Card__Header_d;