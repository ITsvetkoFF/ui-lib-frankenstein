import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SliderTw } from "./SliderTw";

export default {
  title: "Slider/Tailwind",
  component: SliderTw,
} as ComponentMeta<typeof SliderTw>;

const Template: ComponentStory<typeof SliderTw> = (args) => {
  const [value, onValueChange] = useState(100);
  return <SliderTw {...args} value={value} onValueChange={onValueChange} />;
};

export const Primary = Template.bind({});
Primary.args = {
  max: 200,
  step: 10,
  "aria-label": "Accesisble Label",
};
