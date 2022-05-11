// MoreMenu.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MoreMenu from './MoreMenu';

export default {
    title: '드롭다운/더보기메뉴',
    component: MoreMenu
} as ComponentMeta<typeof MoreMenu>

export const 더보기메뉴: ComponentStory<typeof MoreMenu> = () => <MoreMenu>
    <ul className="MoreMenu__List">
        <li className="MoreMenu__Item" onClick={()=>{console.log("해설 PDF 추가")}}>해설 PDF추가</li>
        <li className="MoreMenu__Item MoreMenu__Item--color--red" onClick={()=>{console.log("PDF 삭제");}}>PDF 삭제</li>
    </ul>
</MoreMenu>
