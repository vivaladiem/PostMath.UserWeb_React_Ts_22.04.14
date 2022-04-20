import React, { Component } from 'react';
import './Card__Body.css'
import ClassyName from '../../common/ClassyName';

interface Props {
  examlabel: string;
  date: string;
  number_of_questions: number;
  mean: number;
}


class Card__Body_c extends Component<Props> {

  render() {

    let className = new ClassyName('Card__Body--modifier Card__Body_c')

    return (
      <div className={className.getResult()}>
        <a className='Card__ExamLabel_c'>{this.props.examlabel}</a>
        <p className='Card__ExamDate_c'>출제일 : {this.props.date}</p>
        <a href="" className="Card__ExamData_c">
          <ul className="Card__Data1_c">
            <li className='Card__Data--number'>{this.props.number_of_questions}</li>
            <li className='Card__Data--infomation'>문제수</li>
          </ul>
          <ul className="Card__Data2_c">
            <li className='Card__Data--number'>{this.props.mean}</li>
            <li className='Card__Data--infomation'>난이도 평균</li>
          </ul>
        </a>
      </div>
    )
  }
}


export default Card__Body_c;