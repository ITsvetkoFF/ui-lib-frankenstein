import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SliderRS } from "./SliderRS";

export default {
  title: "Slider/ReactSlider",
  component: SliderRS,
} as ComponentMeta<typeof SliderRS>;

const Template: ComponentStory<typeof SliderRS> = (args) => {
  const [value, onValueChange] = useState(100);
  return <SliderRS {...args} value={value} onValueChange={onValueChange} />;
};

export const Primary = Template.bind({});
Primary.args = {
  max: 200,
  step: 10,
  "aria-label": "Accesisble Label",
  id: "some_id",
};
