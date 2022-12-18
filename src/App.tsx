import "./App.css";
// import { SliderRadix } from "./ui/radix/SliderRadix";
import { useState } from "react";
import { SliderMui } from "./ui/mui/SliderMui";

function App() {
  const [value, onValueChange] = useState(100);
  return (
    <div className="App">
      {/*<SliderRadix value={value} onValueChange={onValueChange} max={200} />*/}
      <SliderMui value={value} onValueChange={onValueChange} max={200} />
    </div>
  );
}

export default App;
