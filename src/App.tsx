import * as React from "react";

import "./themes/fluent/fluent.scss";
import "./themes/teams.css";
import "./themes/github.css";
import "./themes/linkedin.css";
import "./themes/costco.css";
import "./fonts.css";
import "./App.css";
import "./SampleCard.css";

import { TextExample } from "./components/TextExample";
import { ButtonExample } from "./components/ButtonExample";
import { ToolbarExample } from "./components/Toolbar";
import { ToggleExample } from "./components/Toggle";
import { CheckboxExample } from "./components/Checkbox";
import { InputExample } from "./components/Input";

export default function App() {
  const [theme, setTheme] = React.useState("fluent");
  const [themeSet, setThemeSet] = React.useState("light");

  return (
    <div className={`App fontBody ${theme} ${themeSet}`}>
      <div>
        <select onChange={ev => setTheme(ev.target.value)}>
          <option value="fluent">Fluent</option>
          <option value="teams">Teams</option>
          <option value="github">Github</option>
          <option value="linkedin">LinkedIn</option>
          <option value="costco">Costco</option>
        </select>
        <select onChange={ev => setThemeSet(ev.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="hc">High contrast</option>
        </select>
      </div>
      <CheckboxExample />
      <ToggleExample />
      <InputExample />
      <ButtonExample />
      <TextExample />
    </div>
  );
}
