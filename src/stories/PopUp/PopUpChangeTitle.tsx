// PopUpChangeTitle.tsx

import React, { SyntheticEvent } from 'react';
import PopUp from './PopUp';
import Button from '../Button/Button';

interface Props {
    isOpen: boolean;
    onOpen?():void;
    onClose():void;
    onConfirm(value:string):void;
    defaultValue?: string;
}

interface State {
    value: string;
}

export default class PopUpChangeTitle extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);

        this.state = {
            value: this.props.defaultValue || ''
        }
    }

    private onTextChanged = (e:SyntheticEvent<HTMLTextAreaElement>) => {
        this.setState({value: e.currentTarget.value});
    }

    private onSubmit = (e:SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        this.props.onConfirm(this.state.value);

        this.props.onClose();
    }

   

    render() {
        
        return (
            <PopUp isOpen={this.props.isOpen} onClose={this.props.onClose} onOpen={this.props.onOpen}>
                <h4 className="PopUp__Title u-margin-bottom">제목수정</h4>
                <p className="PopUp__Guide u-margin-bottom">30자 이내로 작성해주세요</p>
                <form onSubmit={this.onSubmit}>
                    <textarea name="title" cols={46} rows={6} className="PopUp__TextArea u-margin-bottom" placeholder='수정할 제목을 기입하세요' value={this.state.value} onInput={this.onTextChanged}/>
                    <div className="PopUp__ButtonContainer">
                        <Button className="PopUp__Button" size='large' color='grey' onClick={this.props.onClose}>취소</Button>
                        <input type="submit" className="Button Button--size--large PopUp__Button" value="저장하기"/>
                    </div>
                </form>
            </PopUp>
        )
    }
}