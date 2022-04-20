// Button.stories.tsx

import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Button from './Button/Button';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const Normal: ComponentStory<typeof Button> = () => (<Button color="green">button</Button>)