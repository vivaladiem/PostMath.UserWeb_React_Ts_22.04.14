import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Card_myDb, {Stage} from './Card_mydb';

export default {
    title: 'Card/Card_mydb',
    component: Card_myDb
} as ComponentMeta<typeof Card_myDb>;

const Template: ComponentStory<typeof Card_myDb> = (args) => <Card_myDb {...args} />;

export const typing = Template.bind({});
typing.args = {
    stage: Stage.TYPING
}

export const typeComplete = Template.bind({});
typeComplete.args = {
    stage: Stage.TYPE_COMPLETE
}

export const transforming = Template.bind({});
transforming.args = {
    stage: Stage.TRANSFORMING
}

export const transformed = Template.bind({});
transformed.args = {
    stage: Stage.TRANSFORMED
}

export const additionalTransforming = Template.bind({});
additionalTransforming.args = {
    stage: Stage.ADDTIONAL_TRANSFORMING
}