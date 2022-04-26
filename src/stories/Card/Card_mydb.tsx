import React, { Component } from 'react'
import Card from './Card'
import Checkbox from '../CheckBox/Checkbox';
import MoreMenu from '../DropDown/MoreMenu';
import Checkbox_favorite from '../CheckBox/Checkbox_favorite';
import Button from '../Button/Button';




class CardMydb extends Component<Props, State> {

  static stageText = ["정보입력중", "정보입력완료", "변환중", "변환완료", "추가변환중"];

  constructor(props: Props) {
    super(props);

    this.state = {
      isChecked: false,
      isStarred: false
    }
  }
            
  /*
            folder={1}
            stage={DbstageData}
            id_data='h_id'
            */

  

  render() {

    // 더보기 메뉴 구성
    let moreMenuItems = null;
    if (this.props.stage == Stage.TYPE_COMPLETE) {
      moreMenuItems = 
      <ul className="MoreMenu__List">
          <li className="MoreMenu__Item">해설 PDF 추가</li>
          <li className="MoreMenu__Item MoreMenu__Item--color--red">PDF 삭제</li>
        </ul>;
    } else if (this.props.stage == Stage.TRANSFORMED) {
      moreMenuItems = 
        <ul className="MoreMenu__List">
          <li className="MoreMenu__Item">추가 한글 변환</li>
          <li className="MoreMenu__Item">해설 PDF 추가</li>
          <li className="MoreMenu__Item MoreMenu__Item--color--red">PDF 삭제</li>
        </ul>;
    }


    // 버튼 구성
    let buttons = null;
    switch(this.props.stage) {
    case (Stage.TYPING) : buttons = <Button className="Card__Button" color="grey">문제선택 및 결제</Button>; break;
    case (Stage.TYPE_COMPLETE): buttons = <Button className="Card__Button" color="green">문제선택 및 결제</Button>; break;
    case (Stage.TRANSFORMING): 
      buttons = <>
          <Button className="Card__Button" color="green">원본 파일 다운로드</Button>
          <Button className="Card__Button">변환 파일 다운로드</Button>
        </>;
        break;
    case (Stage.TRANSFORMED): 
      buttons = <>
        <Button className="Card__Button" color="green">원본 파일 다운로드</Button>
        <Button className="Card__Button" color="green">변환 파일 다운로드</Button>
    </>
    break;
    case(Stage.ADDTIONAL_TRANSFORMING): 
      buttons = <>
          <Button className="Card__Button" color="green">원본 파일 다운로드</Button>
          <Button className="Card__Button" color="blue">변환 파일 다운로드</Button>
        </>;
        break;
    default: break;
    }


    return (
      <>
        <Card
          header={<div className="Card__Header">
            <Checkbox className="Card__Checkbox" isChecked={this.state.isChecked} id_data='1' />
            <img src="./img/folder_icon.png" alt="Folder Icon" className="Card__FolderIcon" />
            <span className="Card__Folder">폴더1</span>
            <Checkbox_favorite className="Card__Checkbox_favorite" id_data='1' />
            <MoreMenu className="Card__MoreMenu">{moreMenuItems}</MoreMenu>
          </div>}
          body={
            <div className="Card__Body">
              <h3 className="Card__Title">고등 수학(상)(2020)(쎈)</h3>
              <img src="./img/sample_db_photo.png" alt="Card Photo" className="Card__Photo"/>
            </div>
          }
          footer={
            <div className="Card__Footer">
              <div className="Card__Info u-margin-bottom clearfix">
                <div className="Card__RegisteredDateContainer">
                  <span className="Card__RegisteredDateLabel">등록일</span><span className="Card__RegisteredDate">2021-09-23</span>
                </div>
                <div className="Card__StageContainer">
                  <span className="Card__StageLabel">진행상태</span><span className="Card__Stage">{CardMydb.stageText[this.props.stage]}</span>
                </div>
              </div>
              <div className="Card__ButtonContainer">{buttons}</div>
            </div>
          }
        />
      </>
    )
  }
}

export default CardMydb;

enum Stage {
  TYPING,
  TYPE_COMPLETE,
  TRANSFORMING,
  TRANSFORMED,
  ADDTIONAL_TRANSFORMING
}

interface Props {
  questionFile?: any; // 나중엔 엔티티로 바껴야.
  onChecked?: (isChecked : Boolean) => void;
  onStarred?: (isStarred: Boolean) => void;
  stage: Stage;
}

interface State {
  isChecked: Boolean;
  isStarred: Boolean;
}