import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SliderRadix } from "./SliderRadix";

export default {
  title: "Slider/Radix",
  component: SliderRadix,
} as ComponentMeta<typeof SliderRadix>;

const Template: ComponentStory<typeof SliderRadix> = (args) => {
  const [value, onValueChange] = useState(100);
  return <SliderRadix {...args} value={value} onValueChange={onValueChange} />;
};

export const Primary = Template.bind({});
Primary.args = {
  max: 200,
  step: 10,
  "aria-label": "Accesisble Label",
};
