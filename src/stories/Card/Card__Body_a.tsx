import React, { Component } from 'react'
import ClassyName from '../../common/ClassyName';
import './Card__Body.css'


interface Props {
  title: string;
  thumbnail: string;
}

class Card__Body_a extends Component<Props> {

  render() {

    let className = new ClassyName('Card__Body--mydb Card__Body_a')

    return (
      <div className={className.getResult()}>
        <p className='Card__Title_a'>{this.props.title}</p>
        <img src={this.props.thumbnail} className='Card__Thumbnail_a' />
        <img className='Card__ProgressBar' src='img/progress_bar.svg' />
      </div>
    )
  }
}



export default Card__Body_a;