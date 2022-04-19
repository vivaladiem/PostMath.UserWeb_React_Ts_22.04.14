// DropDownButton.stories.tsx

import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import DropDownButton from './DropDownButton';

export default {
    title: '드롭다운/드롭다운버튼',
    component: DropDownButton
} as ComponentMeta<typeof DropDownButton>;

export const 드롭다운버튼 : ComponentStory<typeof DropDownButton> = () => <DropDownButton />