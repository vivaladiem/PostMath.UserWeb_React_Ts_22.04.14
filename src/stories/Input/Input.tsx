import React, { Component } from 'react';
import './Input.css'
import ClassyName from '../../common/ClassyName';
import Button from '../Button/Button'

interface Props {
  className?: string;
  placeholder: string;
  size: ('long' | 'middle' | 'short' | 'mini');
  backgroundcolor?: 'grey' | 'none';
  button?: ('pencil' | 'mini' | 'plus');
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

    let InputTag = <input type='text' placeholder={this.props.placeholder} className={className.getResult()} />
    let ErrorTag =
      <div className='InputError'>
        <input type='text' placeholder={this.props.placeholder} className={className.getResult() + ' ' + 'Input--error'} />
        <img className='InputError__WarningIcon' src='img/warning_icon.svg' />
      </div>

    if (this.props.button === 'pencil') {
      InputTag =
        <div className='InputButton'>
          <input type='text' placeholder={this.props.placeholder} className={className.getResult()} />
          <img className='Input__EditButton' src='img/edit.svg' />
        </div>
    }

    if (this.props.button === 'mini') {
      InputTag =
        <div className='InputButton'>
          <input type='text' placeholder={this.props.placeholder} className={className.getResult()} />
          <span className='Input__MiniButton'><Button
            color='greenGradient'
            size='mini'
          >확인</Button> </span>
        </div>
    }

    if (this.props.button === 'plus') {
      InputTag =
        <div className='InputButton'>
          <input type='text' placeholder={this.props.placeholder} className={className.getResult()} />
          <img className='Input__PlusButton' src='img/plus.svg' />
        </div>
    }

    return (
      <>
        {
          this.state.error ?
            ErrorTag
            :
            InputTag
        }
      </>
    )
  }
}


export default Input;