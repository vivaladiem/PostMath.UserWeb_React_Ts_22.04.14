import React, { Component } from 'react';
import './Input.css'
import ClassyName from '../../common/ClassyName';
import Button from '../Button/Button';

interface Props {
  className?: string;
  placeholder?: string;
  size?: 'large' | 'normal';
  color?: 'white' | 'grey';
  button?: boolean;
  icon?: boolean;
  onChange: (value : string) => void;
  error?: (value: string) => (boolean | undefined);
}

interface State {
  inputState: InputState;
}

enum InputState {
  EMPTY = 0,
  TYPING,
  ERROR,
  COMPLETE
}

/**
 * 이    름 : Input
 * 작 성 자 : 라강인, 임영우
 * 설    명 : 
 *  onChange : 값을 읽습니다.
 *  error : 에러상태를 판단하여 반환하는 함수를 넣으면 됩니다.
 */
class Input extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      inputState: InputState.EMPTY
    }
  }

  private handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.props.onChange(e.currentTarget.value);

    if (e.currentTarget.value.length > 0) {
      if (this.props.error && this.props.error(e.currentTarget.value)) {
        this.setState({
          inputState: InputState.ERROR
        });
      } else {
        this.setState({
          inputState: InputState.TYPING
        })
      }
    } else {
      this.setState({
        inputState: InputState.EMPTY
      })
    }
    
    
    
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
      className.modifier('color', 'grey')
    }

    let button = null;
    if (this.props.button) {
      button = <Button className="Input__Button" size="small">확인</Button>
    }

    //icon

    //state
    if (this.state.inputState == InputState.ERROR) {
      className.modifier("error");
    }

    return (
      <div className="Input__Container">
        <input type="text" className={className.getResult()} placeholder={this.props.placeholder} onChange={this.handleChange} />
        {button}
        <img src="/img/icon_error.svg" alt="error" className="Input__IconError" />
      </div>
    )
  }
}


export default Input;