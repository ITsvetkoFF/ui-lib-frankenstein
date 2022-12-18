import { HTMLAttributes } from "react";

export type SliderProps = {
  value: number;
  onValueChange: (val: number) => void;
  max: number;
  min?: number;
  step?: number;
} & Pick<HTMLAttributes<HTMLElement>, "aria-label" | "id">;
