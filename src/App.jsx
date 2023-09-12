import { Button } from "devextreme-react";
import "./App.css";
function App() {
  return (
    <>
      <Button text="Click me" onClick={(val) => console.log(val)} />
    </>
  );
}

export default App;
