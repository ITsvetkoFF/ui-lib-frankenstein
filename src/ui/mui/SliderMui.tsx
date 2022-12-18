import React from "react";
import { SliderProps } from "../types";
import Slider from "@mui/material/Slider";

export const SliderMui = (props: SliderProps) => {
  const { value, onValueChange, ...rest } = props;

  return (
    <Slider
      value={value}
      onChange={(e, value) => onValueChange(value as number)}
      {...rest}
    />
  );
};
