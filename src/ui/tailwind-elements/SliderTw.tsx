import React from "react";
import { SliderProps } from "../types";
import "tw-elements";

export const SliderTw = (props: SliderProps) => {
  const { value, onValueChange, ...rest } = props;

  return (
    <div className="relative pt-1">
      <input
        type="range"
        className="
      form-range
      appearance-none
      w-full
      h-6
      p-0
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none
    "
        value={value}
        onChange={(e) => onValueChange(+e.target.value)}
        {...rest}
      />
    </div>
  );
};
