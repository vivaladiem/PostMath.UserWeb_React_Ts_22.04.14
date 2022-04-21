// MoreMenu.tsx
import React from 'react';
import DropDown, {Items} from './DropDown';
import './MoreMenu.css';

class MoreMenu extends React.Component<Props> {
    render() {
        return (
            <DropDown 
                renderButton={() => <img className="MoreMenu__Button" src="./img/icon_more.png" alt="more menu" />}
                items={this.props.items}
                willHideButton={true}
            />
        )
    }
}

interface Props {
    className?: string;
    items: Items;
}

export default MoreMenu;