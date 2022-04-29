import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Input from './Input/Input';

export default {
  title : "Input",
  component : Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input error={(value) => {
  if (value.includes('error')) return true;
}} {...args}/>;

export const InputComponent = Template.bind({})
InputComponent.args ={
  placeholder:'텍스트를 입력하세요.',
  size: 'large',
  button: true
};