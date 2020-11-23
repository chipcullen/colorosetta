import * as React from 'react';
import './App.css';
import { useQueryString } from "./utils/useQueryString";
import history from "./history";
import { Swatch } from './components/Swatch';
import { Input } from './components/Input';

function App() {
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  React.useEffect(() => {
    // listen for changes to the URL and force the app to re-render
    history.listen(() => {
      forceUpdate();
    });
  }, []);

  const [color, setColor] = useQueryString("color");

  console.log(color)
  let passedColor = color;

  if (color === undefined) {
    console.log('color is undefined');
    setColor("#fff");
    passedColor = "#fff";
  }

  const onInputChange = (value: string) => {
    // const value = e.currentTarget.value;
    console.log(value)
    setColor(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ColouRosetta</h1>
        <p>A utility to translate colors</p>
      </header>
      <Swatch color="rgba(255, 0, 0, .4)" />

      <section className="inputs">
        <Input
          labelText="HSL"
          colorType="hsl"
          placeHolder="120, 100, 50"
          defaultValue={passedColor}
          onChange={onInputChange}
        />
        {/* <Input
          labelText="HSLA"
          placeHolder="140, 100, 50, 1.0"
          defaultValue={passedColor}
          onChange={onInputChange}
        /> */}
        {
        // @todo
        // rgb
        // rgba
        // hex
        // hex8
        // named
}
      </section>

      <div className="output">
        <textarea>rgba(255, 255, 255, 1) #ffffff</textarea>
      </div>
    </div>
  );
}

export default App;
