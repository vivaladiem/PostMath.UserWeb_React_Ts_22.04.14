// SearchBar.stories.tsx

import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import SearchBar from './SearchBar';

export default {
    title: "searchBar",
    component: SearchBar
} as ComponentMeta<typeof SearchBar>;

export const searchBar: ComponentStory<typeof SearchBar> = () => <SearchBar onSubmit={value => {alert(value)}}/>;