//SideBar.tsx

import React, { Component } from 'react'
import ClassyName from '../common/ClassyName';
import './SideBar.css'
import SideBarItem from './SideBarItem'
import SideBarData from './SideBarData'
import { Link, NavLink } from 'react-router-dom'

/**
 * 이    름 : SideBar
 * 작 성 자 : 라강인
 * 설    명 : 
 */

interface Props {
logOutClicked : () => void;
}

interface state {
  user: boolean
}

class SideBar extends Component<Props, state> {

  constructor(props: Props) {
    super(props)
    this.state = {
      user: false
    }
  }



  render() {

    return (
      <div className='SideBar'>
        <Link to='/PageMyDb'><img className='SideBar__Logo' src='img/side_logo.png' /></Link>
        <div className='SideBar__Menu'>
          {SideBarData.map((MenuItem, index) => <SideBarItem
            MenuItem={MenuItem} key={MenuItem.id}
          />)}
        </div>

        {/* SideBar__User */}
        <div className='SideBar__User'>
          <div className={this.state.user ? 'SideBar__UserPopUp SideBar__UserPopUp--open' : 'SideBar__UserPopUp SideBar__UserPopUp--close'} >
            <ul className='SideBar__UserList'>
              <li className='SideBar__UserListItem'>자동결제 : 활성</li>
              <li className='SideBar__UserListItem'>이용권 : 활성 (~22.04.13)</li>
              <li className='SideBar__UserListItem'>회원정보</li>
              <li><Link to="/PageLogOut" className='SideBar__UserListItem' onClick={this.props.logOutClicked}>로그아웃</Link></li>
            </ul>
          </div>
          <div className='SideBar__UserInfomation' onClick={() => { this.setState({ user: !this.state.user }) }}>
            <img src="img/profile_img.png" alt="" className="SideBar__UserInfomationImg" />
            <p className={this.state.user ? 'SideBar__UserInfomationName--selected' : 'SideBar__UserInfomationName'}> 홍길동 </p>
            <p className='SideBar__UserInfomationPoint'> 1,125</p>
            <img src="img/price_kong.svg" alt="" className="SideBar__UserInfomationKong" />
            <img src="img/side_arrow.png" alt="" className={this.state.user ? 'SideBar__UserButton--open' : 'SideBar__UserButton'} />
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar;