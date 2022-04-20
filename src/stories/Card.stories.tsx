// Card.stories.tsx

import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Card from './Card/Card__Mydb';

export default {
  title: "Card/Card_Mydb",
  component: Card
} as ComponentMeta<typeof Card> 

export const Mydb : ComponentStory<typeof Card> = () => <Card />