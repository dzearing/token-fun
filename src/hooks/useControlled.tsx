import * as React from "react";
import { titleCase } from "../utilities/titleCase";

export const useControlled = (props: any, propName: string) => {
  const defaultName = "default" + titleCase(propName);
  const defaultValue = props[defaultName];
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue
  );
  const controlledValue = props[propName];

  return [
    controlledValue !== undefined ? controlledValue : uncontrolledValue,
    setUncontrolledValue
  ];
};
