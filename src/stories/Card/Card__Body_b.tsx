import React, { Component } from 'react';
import './Card__Body.css'
import ClassyName from '../../common/ClassyName';

interface Props {
  thumbnail: string;
}

class Card__Body_b extends Component<Props> {
  render(): React.ReactNode {
    let className = new ClassyName('Card__Body--modifier Card__Body_b')
    return (
      <div className={className.getResult()}>
        <img src={this.props.thumbnail} className='Card__Thumnail_b'></img>
      </div>
    )
  }
}

export default Card__Body_b;