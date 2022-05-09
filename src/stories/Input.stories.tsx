import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Input from './Input/Input';

export default {
  title : "Input",
  component : Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}/>;

export const InputComponent = Template.bind({})
InputComponent.args ={
  id: 'test',
  placeholder:'텍스트를 입력하세요.',
  size: 'large',
  button: false,
  isRequired: false,
};