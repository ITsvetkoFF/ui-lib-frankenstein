import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SliderDemo from "./SliderRadix";

export default {
  title: 'Slider/Radix',
  component: SliderDemo,
} as ComponentMeta<typeof SliderDemo>;

const Template: ComponentStory<typeof SliderDemo> = (args) => <SliderDemo/>;

export const Primary = Template.bind({});
Primary.args = {

};
