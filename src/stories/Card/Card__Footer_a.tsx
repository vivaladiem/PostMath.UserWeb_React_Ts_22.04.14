import React, { Component } from 'react'
import ClassyName from '../../common/ClassyName';
import './Card__Footer.css'
import Button from '../Button/Button'

interface Props {
  stage: 1 | 2 | 3 | 4 | 5;
}


class Card__Footer_a extends Component<Props> {

  render() {

    let className = new ClassyName('Card__Footer_a');
    let stageData = {
        label: {
          1: '정보입력중', 2: '정보입력완료', 3: '변환중', 4: '변환완료', 5: '추가변환중'
        },
        buttonclass: {
          1: <Button className={'Button--long Button--grey'}>문제선택 및 결제</Button>,
          2: <Button className={'Button--long Button--green'}>문제선택 및 결제</Button>,
          3: <><Button className={'Button--short Button--green'}>원본 파일 다운 로드</Button><Button className={'Button--short Button--grey'}>변환 파일 다운로드</Button></>,
          4: <><Button className={'Button--short Button--green'}>원본 파일 다운 로드</Button><Button className={'Button--short Button--green'}>변환 파일 다운로드</Button></>,
          5: <><Button className={'Button--short Button--green'}>원본 파일 다운 로드</Button><Button className={'Button--short Button--blue'}>변환 파일 다운로드</Button></>
        }
      }

    return (
      <div className={className.getResult()}>
        <ul className='Card__Info_a'>
          <li className='Card__InfoLabel_a'>등록일</li>
          <li className='Card__RealInfo_a'>2022-00-00</li>
        </ul>
        <ul className='Card__Info_a'>
          <li className='Card__InfoLabel_a'>진행상태</li>
          <li className='Card__RealInfo_a'>{stageData.label[this.props.stage]}</li>
        </ul>
        {stageData.buttonclass[this.props.stage]}
      </div>
    )
  }
}



export default Card__Footer_a;