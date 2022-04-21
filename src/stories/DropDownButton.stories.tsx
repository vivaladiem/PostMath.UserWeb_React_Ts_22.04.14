// DropDownButton.stories.tsx

import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import DropDownButton from './DropDownButton';

export default {
    title: '드롭다운/드롭다운버튼',
    component: DropDownButton
} as ComponentMeta<typeof DropDownButton>;

export const 드롭다운버튼 : ComponentStory<typeof DropDownButton> = () => <DropDownButton items={[
    {itemName: "PDF", onClick: (e)=>{alert("PDF 업로드")}},
    {itemName: "HWP", onClick: (e)=>{alert("HWP 업로드")}},
    {itemName: "IMG", onClick: (e)=>{alert("IMG 업로드")}}
]}/>