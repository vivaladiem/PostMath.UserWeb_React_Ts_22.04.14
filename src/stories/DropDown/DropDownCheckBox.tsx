// DropDownCheckBox.tsx
import React from 'react';
import DropDown from './DropDown';


interface Props {
    onChange: (selectedItemIndexes:number[]) => void;
    label: string;
    items: string[]
}

interface State {
    selectedItemIndexes: number[];
}



export default class DropDownCheckBox extends React.Component<Props, State> {

    onChange = () => {
        this.props.onChange(this.state.selectedItemIndexes);
    }
    
    render() {
        return (
            <DropDown className="DropDownCheckBox" label={this.props.label}>
                <ul className="DropDown__List">
                    {this.props.items.map((item, index) => 
                        <li className="DropDown__Item" key={index}>
                            <input type="checkbox" className="DropDownCheckBox__CheckBox" onChange={this.onChange}/>
                            {item}
                        </li>
                    )}
                </ul>
            </DropDown>
        )
    }
}