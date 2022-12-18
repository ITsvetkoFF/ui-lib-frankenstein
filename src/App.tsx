import "./App.css";
import { useState } from "react";
// import { SliderRadix } from "./ui/radix/SliderRadix";
// import { SliderMui } from "./ui/mui/SliderMui";
// import { SliderTw } from "./ui/tailwind-elements/SliderTw";
import { SliderRS } from "./ui/react-slider/SliderRS";

function App() {
  const [value, onValueChange] = useState(100);
  return (
    <div className="App">
      {/*<SliderRadix value={value} onValueChange={onValueChange} max={200} />*/}
      {/*<SliderMui value={value} onValueChange={onValueChange} max={200} />*/}
      {/*<SliderTw value={value} onValueChange={onValueChange} max={200} />*/}
      <SliderRS value={value} onValueChange={onValueChange} max={200} />
    </div>
  );
}

export default App;
