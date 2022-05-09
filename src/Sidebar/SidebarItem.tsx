//SidebarItem.tsx

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

/**
 * 이    름 : SidebarItem
 * 작 성 자 : 라강인
 * 설    명 : Sidebar 에서 map함수를 통해 넘어오는 컴포넌트
 */


interface Props{
  MenuItem :object
}

interface state{
  
}

class SidebarItem extends Component<Props, state> {
  constructor(props :Props){
    super(props)
    
  }
  
  render(){
    let SidebarItemData :any= this.props.MenuItem;
    
    //하위 항목이 있을 때의 Html 코드
      let subItems = null;
      if(SidebarItemData.subItem){
        subItems = <ul className={ '' }>
          {SidebarItemData.subItem.map((subItem :any, subItemIndex :number) =>
            <li key={subItemIndex} className={'Sidebar__SubItem'}>{subItem.subItem}</li>
          )}
        </ul>;
      }

      return(
        <div className='Sidebar__MenuItem'>
          <NavLink to={'/'+SidebarItemData.path}
            className={({isActive})=>(isActive? "Sidebar__MenuItem--selected":"Sidebar__MenuItem")}
          >{SidebarItemData.item}</NavLink>
          {
            subItems
          }
        </div>
      )
    }
}

export default SidebarItem