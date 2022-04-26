import React, { Component } from 'react'
import Card from './Card'
import Checkbox from '../Checkbox/Checkbox';
import MoreMenu from '../DropDown/MoreMenu';
import Checkbox_favorite from '../Checkbox/Checkbox_favorite';
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
            
  render() {

    // 더보기 메뉴 구성
    let moreMenu = null;
    if (this.props.stage == Stage.TYPE_COMPLETE) {
      moreMenu = <MoreMenu className="Card__MoreMenu">
        <ul className="MoreMenu__List">
            <li className="MoreMenu__Item">해설 PDF 추가</li>
            <li className="MoreMenu__Item MoreMenu__Item--color--red">PDF 삭제</li>
          </ul>
      </MoreMenu>;

    } else if (this.props.stage == Stage.TRANSFORMED) {
      moreMenu = 
      <MoreMenu className="Card__MoreMenu">
        <ul className="MoreMenu__List">
          <li className="MoreMenu__Item">추가 한글 변환</li>
          <li className="MoreMenu__Item">해설 PDF 추가</li>
          <li className="MoreMenu__Item MoreMenu__Item--color--red">PDF 삭제</li>
        </ul>
      </MoreMenu>
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
<<<<<<< HEAD
            <Checkbox_favorite className="Card__Checkbox_favorite" isStarred={this.state.isStarred} id_data='2' />
=======
>>>>>>> e9d5f4806e9fcafaf292f32ec196e49810f5a913
            {moreMenu}
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

export enum Stage {
  TYPING = 0,
  TYPE_COMPLETE,
  TRANSFORMING,
  TRANSFORMED,
  ADDTIONAL_TRANSFORMING
}

interface Props {
  questionFile?: any; // 나중엔 엔티티로 바껴야.
  onChecked?: (isChecked : Boolean) => void; // 나중엔 문제집?의 id까지 줘서 어떤 문제집?인지 알 수 있게 해야.
  onStarred?: (isStarred: Boolean) => void; // 마찬가지.
  stage: Stage;
}

interface State {
  isChecked: Boolean;
  isStarred: Boolean;
}