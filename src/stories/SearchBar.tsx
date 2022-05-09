// SearchBar.tsx
import React from 'react';
import './SearchBar.css';

/**
 * 이   름 : SearchBar
 * 설   명 : 검색을 위한 input
 */
class SearchBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    onChange = (e : React.SyntheticEvent<HTMLInputElement>) => {
        this.setState({title: e.currentTarget.value});
        if (this.props.onChange) {
            this.props.onChange(e.currentTarget.value);
        }
    }

    onSubmit = (e : React.SyntheticEvent<HTMLFormElement>) => {
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.title);
        }
        e.preventDefault();
        return false;
    }

    render() {
        return (
            <form className="SearchBar__Form" onSubmit={this.onSubmit}>
                <input type="text" name="ttt" className="SearchBar" placeholder={this.props.placeHolder} onChange={this.onChange} />
                <input type="image" src="/img/icon_search.svg" alt="검색" className="SearchBar__Button" />
            </form>
        )
    }
}

interface Props {
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
    placeHolder?: string;
}

interface State {
    title: string;
}

export default SearchBar