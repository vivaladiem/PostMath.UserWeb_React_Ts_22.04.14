import React, { Component } from 'react';
import './Input.css'
import ClassyName from '../../common/ClassyName';

interface Props {
  className?: string;
  placeholder: string;
  size: ('long' | 'short' | 'mini');
  backgroundcolor?: 'grey' | 'none';
  button?: React.ReactNode;
}

interface State {
  error?: boolean;
}

/**
 * 이    름 : Input
 * 작 성 자 : 라강인, 임영우
 * 설    명 : 
 */
class Input extends Component<Props, State> {

  render() {

    this.state = {
      error: false
    }


    // 오류가 떳을 시 this.state.error 를 true 로 반환하는 메서드가 필요함.


    let className = new ClassyName('Input');

    if (this.props.className) {
      className.externalClassName(this.props.className)
    }
    if (this.props.size) {
      className.modifier(this.props.size)
    }
    if (this.props.backgroundcolor) {
      className.modifier('backgroundColor-grey')
    }



    let inputCn = new ClassyName("Input");
    if (this.state.error) {
      inputCn.modifier("error");
    }
    if (this.props.size) {
      inputCn.modifier("size", this.props.size);
    }

    let button = null;
    if (this.props.button) {
      button =
        <div className="Input__Button">
          {this.props.button}
        </div>
    }

    return (
      <div className={inputCn.getResult()}>
        <input type="text" className="Input__Form" placeholder={this.props.placeholder} />
        {button}
      </div>
    )
  }
}


export default Input;