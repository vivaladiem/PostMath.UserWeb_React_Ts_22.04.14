import React, {Component} from 'react';

interface Props{
  MenuItem :object
  MenuItemIndex :number
  handleChangeMenuIndex : any
}

interface state{

}

class SidebarItem extends Component<Props, state> {
  constructor(props :Props){
    super(props)
    this.state={
    }
  }

  

  render(){

    let SidebarItemData :any= this.props.MenuItem;
    let MenuItemIndex :number = this.props.MenuItemIndex;

    if(SidebarItemData.subItem){
      return(
        <div className='Sidebar__MenuItem'>
          <a className={''} onClick={()=>{}}>{SidebarItemData.item}</a>
          <ul className={  'Sidebar__MenuSubItem--open' }>
            {SidebarItemData.subItem.map((subItem :any, subItemIndex :number)=>{
              return(
                <li key={subItemIndex} className={'Sidebar__SubItem--selected'} 
                  onClick={()=>{}}>{subItem.subItem}</li>
              )
            })}
          </ul>
        </div>
      )
    }
    else {
      return(
        <a className={MenuItemIndex === 0 ? "Sidebar__MenuItem--selected" : "Sidebar__MenuItem"} 
          onClick={()=>{this.props.handleChangeMenuIndex(MenuItemIndex)}}>{SidebarItemData.item}</a>
      )
    }
  }
}

export default SidebarItem