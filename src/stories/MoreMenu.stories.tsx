// MoreMenu.stories.tsx
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import MoreMenu from './MoreMenu';

export default {
    title: '더보기메뉴',
    component: MoreMenu
} as ComponentMeta<typeof MoreMenu>

export const 더보기메뉴: ComponentStory<typeof MoreMenu> = () => <MoreMenu />
