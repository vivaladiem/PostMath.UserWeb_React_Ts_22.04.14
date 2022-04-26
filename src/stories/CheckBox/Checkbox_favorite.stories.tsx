import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Checkbox_favorite from './Checkbox_favorite';

export default {
    title: "CheckboxFavorite",
    component: Checkbox_favorite
} as ComponentMeta<typeof Checkbox_favorite>;

export const CheckboxFavorite: ComponentStory<typeof Checkbox_favorite> = () => <Checkbox_favorite id_data='1' />