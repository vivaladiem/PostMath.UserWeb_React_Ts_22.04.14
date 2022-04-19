// MoreMenu.stories.tsx
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import MoreMenu from './MoreMenu';
import Button from './Button';

export default {
    title: '더보기메뉴',
    component: MoreMenu
} as ComponentMeta<typeof MoreMenu>

export const 더보기메뉴: ComponentStory<typeof MoreMenu> = () => 
// <MoreMenu items={[{itemName: "해설 PDF 추가"}, {itemName: "PDF 삭제", color: 'red'}]}/>
<div>
<MoreMenu items={
    [
        {itemName: "해설 PDF 추가", onClick: (e) => {alert("해설 PDF 추가");}}, 
        {itemName: "PDF 삭제", color: 'red', onClick: () => {alert("PDF 삭제");}}
    ]
}/>
</div>