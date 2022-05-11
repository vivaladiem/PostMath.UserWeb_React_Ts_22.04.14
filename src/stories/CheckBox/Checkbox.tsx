import React, { Component } from 'react';
import './Checkbox.css';
import ClassyName from '../../common/ClassyName';

interface Props {
  id_data: string;
}


class Checkbox extends Component<Props> {

  onClicked = (e: React.SyntheticEvent) => {
    if (this.props.onClicked) {
      this.props.onClicked(this.props.isChecked);
    } 
  }

  render() {

    let className = new ClassyName('Checkbox');
    if (this.props.className) {
      className.externalClassName(this.props.className);
    }

    return (
      <span className={className.getResult()} onClick={this.onClicked}>
        <input type='checkbox' name="check" id={this.props.id_data} />
        <label htmlFor={this.props.id_data}></label>
      </span>
    )
  }
}

export default Checkbox;

interface Props {
  className?: string;
  onClicked?(isChecked: Boolean) : void;
  isChecked: Boolean;
}