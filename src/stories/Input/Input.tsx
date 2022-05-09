import React, { Component } from 'react';
import './Input.css'
import ClassyName from '../../common/ClassyName';
import Button from '../Button/Button';

interface Props {
  id: string;
  type?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  size?: 'large' | 'normal';
  color?: 'white' | 'grey';
  button?: boolean;
  iconSrc?: string;
  onChange: (value : string) => void;
  isRequired?: false;
  min?: number;
  max?: number;
  step?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

/**
 * 이    름 : Input
 * 작 성 자 : 라강인, 임영우
 * 설    명 : 
 *  onChange : 값을 읽습니다.
 *  error : 에러상태를 판단하여 반환하는 함수를 넣으면 됩니다.
 */
class Input extends Component<Props> {

  constructor(props: Props) {
    super(props);

  }

  private handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.props.onChange(e.currentTarget.value);
  }

  render() {

    let className = new ClassyName('Input');

    if (this.props.className) {
      className.externalClassName(this.props.className)
    }

    if (this.props.size) {
      className.modifier('size', this.props.size)
    }
    if (this.props.color) {
      className.modifier('color', this.props.color)
    }

    let button = null;
    if (this.props.button) {
      button = <Button className="Input__Button" size="small">확인</Button>
      className.modifier('button');
    }

    //icon
    if (this.props.iconSrc) {
      const input = document.querySelector<HTMLInputElement>(".Input");
      if (input != null) {
        input.style.setProperty('--icon-src', this.props.iconSrc);
      }
      className.modifier('icon');
    }

    return (
      <div className="Input__Container">
        <input id={this.props.id} type={this.props.type} name={this.props.name} className={className.getResult()} placeholder={this.props.placeholder} onChange={this.handleChange} 
        required={this.props.isRequired} min={this.props.min} max={this.props.max} minLength={this.props.minLength} maxLength={this.props.maxLength} pattern={this.props.pattern} />
        {button}
      </div>
    )
  }
}


export default Input;