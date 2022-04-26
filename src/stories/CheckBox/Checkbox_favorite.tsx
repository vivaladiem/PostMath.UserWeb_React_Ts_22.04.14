import React, { Component } from 'react';
import './Checkbox_favorite.css';
import ClassyName from '../../common/ClassyName';

interface Props {
  id_data: string;
}


class Checkbox_favorite extends Component<Props> {

  render() {

    let className = new ClassyName('Checkbox_favorite')
    if (this.props.className) {
      className.externalClassName(this.props.className);
    }

    return (
      <span className={className.getResult()}>
        <input type='checkbox' name="check--favorite" id={this.props.id_data} />
        <label htmlFor={this.props.id_data}></label>
      </span>
    )
  }
}

export default Checkbox_favorite;

interface Props {
  className?: string;
}