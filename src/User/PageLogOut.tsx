import Raect, {Component} from 'react';
import './PageLogOut.css'
import Button from '../stories/Button/Button';
import {Link} from 'react-router-dom';

interface Props{
  logOutClicked:any
}

class PageLogOut extends Component {

  render(){
    return(
      <div className="LogOut">
        <img className="LogOut__Image" src='img/finish_icon.png'></img>
        <h1 className="LogOut__MainText">로그아웃 되었습니다.</h1>
        <p className="LogOut__SubText">다음에 또 방문해 주세요!</p>
        <div className="LogOut__ButtonArea">
        <Link to="/PageMyDb"><Button color='green' size="large">확인</Button></Link>
        </div>
      </div>
    )
  }

}

export default PageLogOut