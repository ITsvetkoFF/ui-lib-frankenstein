import React from "react";
import * as Slider from "@radix-ui/react-slider";
import "./styles.css";
import { SliderProps } from "../types";

export const SliderRadix = (props: SliderProps) => {
  const { value, onValueChange, ...rest } = props;

  return (
    <Slider.Root
      className="SliderRoot"
      value={[value]}
      onValueChange={(values) => {
        onValueChange(values[0]);
      }}
      {...rest}
    >
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" />
    </Slider.Root>
  );
};
