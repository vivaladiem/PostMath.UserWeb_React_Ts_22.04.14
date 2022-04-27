// DropDownButton.stories.tsx

import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import DropDown from './DropDown';

export default {
    title: '드롭다운/드롭다운버튼',
    component: DropDown
} as ComponentMeta<typeof DropDown>;



export const 드롭다운버튼 : ComponentStory<typeof DropDown> = () => <DropDown label="파일 업로드">
    <ul className="DropDown__List">
        <li className="DropDown__Item" onClick={()=>{alert("PDF 업로드")}}>PDF</li>
        <li className="DropDown__Item--color--red" onClick={()=>{alert("HWP 업로드")}}>HWP</li>
    </ul>
</DropDown>

export const 아이콘드롭다운버튼 : ComponentStory<typeof DropDown> = () => <DropDown label="폴더1" iconSrc='/img/icon_folder.svg'>
    <ul className="DropDown__List">
        <li className="DropDown__Item">고3 1반</li>
        <li className="DropDown__Item">고3 2반</li>
        <li className="DropDown__Item">고3 3반</li>
    </ul>
</DropDown>