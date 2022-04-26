import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Card_myDb from './Card_mydb';

export default {
    title: 'Card/Card_mydb',
    component: Card_myDb
} as ComponentMeta<typeof Card_myDb>;

const Template: ComponentStory<typeof Card_myDb> = (args) => <Card_myDb {...args} />;

export const Card_mydb = Template.bind({});
Card_mydb.args = {
    stage: 1,
}