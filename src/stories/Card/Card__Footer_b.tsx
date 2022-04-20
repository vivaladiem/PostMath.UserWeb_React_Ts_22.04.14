import React, { Component } from 'react'
import ClassyName from '../../common/ClassyName';
import './Card__Footer.css'
import Button from '../Button/Button'

interface Props {
  source: string;
  chain: string;
}

class Card__Footer_a extends Component<Props> {

  render() {

    let className = new ClassyName('Card__Footer--modifier Card__Footer_b')

    return (
      <div className={className.getResult()}>
        <ul className='Card__Info_b'>
          <li className='Card__InfoLabel_b'>출처</li>
          <li className='Card__RealInfo_b'>{this.props.source}</li>
        </ul>
        <ul className='Card__Info_b'>
          <li className='Card__InfoLabel_b'>연결</li>
          <li className='Card__RealInfo_b'>{this.props.chain}</li>
        </ul>
        <div className='Card__Footer-buttonarea_b'>
          <Button className={'Button Button--short Button--green'}>연결 문제 검색</Button>
          <Button className={'Button Button--short Button--red'}>삭제</Button>
        </div>
      </div>
    )
  }
}



export default Card__Footer_a;