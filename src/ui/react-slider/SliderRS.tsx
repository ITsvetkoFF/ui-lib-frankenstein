import React from "react";
import { SliderProps } from "../types";
import ReactSlider from "react-slider";
import "./styles.css";

export const SliderRS = (props: SliderProps) => {
  const { value, onValueChange, ...rest } = props;

  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      value={value}
      onChange={(value, index) => onValueChange(value)}
      {...rest}
    />
  );
};
