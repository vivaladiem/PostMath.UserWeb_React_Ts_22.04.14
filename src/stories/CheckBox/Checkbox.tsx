import React, { Component } from 'react';
import './Checkbox.css';
import ClassyName from '../../common/ClassyName';

interface Props {
  id_data: string;
}


class Checkbox extends Component<Props> {

  render() {

    let className = new ClassyName('Checkbox')

    return (
      <span className={className.getResult()}>
        <input type='checkbox' name="check" id={this.props.id_data} />
        <label htmlFor={this.props.id_data}></label>
      </span>
    )
  }
}

export default Checkbox;