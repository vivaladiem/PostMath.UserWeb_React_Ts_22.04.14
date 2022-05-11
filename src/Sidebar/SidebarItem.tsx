//SideBarItem.tsx

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

/**
 * 이    름 : SideBarItem
 * 작 성 자 : 라강인
 * 설    명 : SideBar 에서 map함수를 통해 넘어오는 컴포넌트
 */


interface Props {
  MenuItem: object
}

interface state {

}

class SideBarItem extends Component<Props, state> {
  constructor(props: Props) {
    super(props)

  }

  render() {
    let SideBarItemData: any = this.props.MenuItem;

    //하위 항목이 있을 때의 Html 코드
    let subItems = null;
    if (SideBarItemData.subItem) {
      subItems = <ul className={''}>
        {SideBarItemData.subItem.map((subItem: any, subItemIndex: number) =>
          <li key={subItemIndex} className={'SideBar__SubItem'}>{subItem.subItem}</li>
        )}
      </ul>;
    }

    return (
      <div className='SideBar__MenuItem'>
        <NavLink to={'/' + SideBarItemData.path}
          className={({ isActive }) => (isActive ? "SideBar__MenuItem--selected" : "SideBar__MenuItem")}
        >{SideBarItemData.item}</NavLink>
        {
          subItems
        }
      </div>
    )
  }
}

export default SideBarItem