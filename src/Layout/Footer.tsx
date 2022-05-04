import React, {Component} from 'react';
import './Layout.css'

class Footer extends Component {

  render(){
    return(
      <div className='Footer'>
        <ul className="Footer__Menu">
          <li><a className='Footer__Menuitem'>공지사항</a></li>
          <li><a className='Footer__Menuitem'>자주찾는질문</a></li>
          <li><a className='Footer__Menuitem'>1 : 1 문의</a></li>
          <li><a className='Footer__Menuitem'>이용약관</a></li>
          <li><a className='Footer__Menuitem'>개인정보취급방침</a></li>
          <li><a className='Footer__Menuitem'>저작권고지</a></li>
        </ul>
      <div className='Footer__Infomation'>
        <span className='Footer__Infomation--bold'>포스트매스㈜</span> 대표이사 최준호 <br></br> 사업자등록번호 0000-0000-0000 <br></br>
        주소 서울시 양천구 신목로 5길 23-2&nbsp;&nbsp;&nbsp;&nbsp;대표전화 070-4337-6100&nbsp;&nbsp;&nbsp;&nbsp;이메일
        xxxx@typogram.co.kr
      </div>
    </div>
    )
  }
}

export default Footer;