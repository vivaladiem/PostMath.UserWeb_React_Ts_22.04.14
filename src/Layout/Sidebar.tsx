import React, { Component } from 'react'
import ClassyName from '../common/ClassyName';
import './Layout.css'
import SidebarItem from './SidebarItem'
import SidebarData from './SidebarData'


interface Props{

}

interface state {
  user : boolean
  MenuItemIndex : number
}

class Sidebar extends Component<Props, state> {

  constructor(props :Props){
    super(props)

    this.state={
      user : false,
      MenuItemIndex : 0
    }

  }

  //Lifting state up Function
  handleChangeMenuIndex (MenuIndex :number) {
    this.setState({
      MenuItemIndex : MenuIndex
    })
  }

  render() {
    console.log(this.state.MenuItemIndex)
    
    return (
    <div className='Sidebar'>
      <img className='Sidebar__Logo' src='img/side_logo.png'></img>
      <div className='Sidebar__Menu'>
        {SidebarData.map((MenuItem, index) => <SidebarItem
          MenuItem={MenuItem} key={MenuItem.id} MenuItemIndex={index} 
          handleChangeMenuIndex={this.handleChangeMenuIndex.bind(this)}
        />)}
      </div>

      {/* Sidebar__User */}
      <div className='Sidebar__User'>
        <div className={ this.state.user ? 'Sidebar__UserPopup Sidebar__UserPopup--open' : 'Sidebar__UserPopup'} >
          <ul className='Sidebar__UserList'>
            <li className='Sidebar__UserListItem'>자동결제 : 활성</li>
            <li className='Sidebar__UserListItem'>이용권 : 활성 (~22.04.13)</li>
            <li className='Sidebar__UserListItem'>회원정보</li>
            <li className='Sidebar__UserListItem'>로그아웃</li>
          </ul>
        </div>
        <div className='Sidebar__UserInfomation' onClick={() => { this.setState({user : !this.state.user}) }}>
          <img src="img/profile_img.png" alt="" className="Sidebar__UserInfomationImg" />
          <p className={this.state.user ? 'Sidebar__UserInfomationName--selected' : 'Sidebar__UserInfomationName'}> 홍길동 </p>
          <p className='Sidebar__UserInfomationPoint'> 1,125</p>
          <img src="img/price_kong.svg" alt="" className="Sidebar__UserInfomationKong" />
          <img src="img/side_arrow.png" alt="" className={this.state.user ? 'Sidebar__UserButton--open' : 'Sidebar__UserButton'} />
        </div>
      </div>
    </div>
    )
  }
}

export default Sidebar;