import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import DropDownCheckBox from './DropDownCheckBox';
import { stringify } from 'querystring';

export default {
    title: '드롭다운/드롭다운체크박스',
    component: DropDownCheckBox
} as ComponentMeta<typeof DropDownCheckBox>;

const items = [
   "객관식", "주관식", "증명문제"
];

export const 드롭다운체크박스: ComponentStory<typeof DropDownCheckBox> = () => <DropDownCheckBox label="정답종류" 
items={items}
onChange={selectedItemIndexes => {
    const selectedItems = selectedItemIndexes.map<string>(index => items[index] + '\n')
    const message = ''.concat(...selectedItems)
    alert(message);
}}
/>