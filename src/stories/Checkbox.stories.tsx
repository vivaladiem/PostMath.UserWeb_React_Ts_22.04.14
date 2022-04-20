// Checkbox.stories.tsx

import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Checkbox from './CheckBox/Checkbox';

export default {
  title: "체크박스",
  component: Checkbox
} as ComponentMeta<typeof Checkbox> 

export const 체크박스 : ComponentStory<typeof Checkbox> = () => <Checkbox id_data='1'/>