// DropDownButton.stories.tsx

import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import DropDownButton from './DropDownButton';

export default {
    title: '드롭다운/드롭다운버튼',
    component: DropDownButton
} as ComponentMeta<typeof DropDownButton>;



export const 드롭다운버튼 : ComponentStory<typeof DropDownButton> = () => <DropDownButton buttonContent="파일 업로드">
    <ul className="DropDown__List">
        <li onClick={()=>{alert("PDF 업로드")}}>PDF</li>
        <li className="DropDown__Item--color--red" onClick={()=>{alert("HWP 업로드")}}>HWP</li>
    </ul>
</DropDownButton>