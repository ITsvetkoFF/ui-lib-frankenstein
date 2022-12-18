import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SliderMui } from "./SliderMui";

export default {
  title: "Slider/Mui",
  component: SliderMui,
} as ComponentMeta<typeof SliderMui>;

const Template: ComponentStory<typeof SliderMui> = (args) => {
  const [value, onValueChange] = useState(100);
  return <SliderMui {...args} value={value} onValueChange={onValueChange} />;
};

export const Primary = Template.bind({});
Primary.args = {
  max: 200,
  step: 10,
  "aria-label": "Accesisble Label",
  id: "some_id",
};
