// MoreMenu.stories.tsx
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import DropDown from './DropDown';

export default {
    title: '더보기메뉴',
    component: DropDown
} as ComponentMeta<typeof DropDown> // 차후 아예 MoreMenu를 만들어서 직접 사용할 계획

export const 더보기메뉴: ComponentStory<typeof DropDown> = () => 
<div>
<DropDown 
button={<img src="./more.png" alt="more menu" />}
items={
    [
        {itemName: "해설 PDF 추가", onClick: (e) => {alert("해설 PDF 추가");}}, 
        {itemName: "PDF 삭제", color: 'red', onClick: () => {alert("PDF 삭제");}}
    ]
}/>
</div>