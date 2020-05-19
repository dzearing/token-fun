import * as React from "react";
import { default as defaultClasses } from "./Input.module.scss";
import cx from "../utilities/cx";
import { useControlled } from "../hooks/useControlled";
import { useEventCallback } from "../hooks/useEventCallback";

export interface IInputProps extends React.AllHTMLAttributes<any> {
  as?: string;
  classes?: any;
  variants?: any;
  value?: string | number;
  defaultValue?: string | number;
  label?: string;
  error?: string;
}

export const useInput = (props: IInputProps): IInputProps => {
  const { disabled, onChange, defaultValue, ...rest } = props;
  const [value, setValue] = useControlled(props, "value");
  const onInputChange = useEventCallback(onChange, (ev: React.FormEvent) =>
    setValue((ev.target as any).value)
  );

  return {
    ...rest,
    onChange: onInputChange,
    value,
    ...(disabled && {
      disabled: true,
      "aria-disabled": true,
    }),
  };
};

export const InputBase = (props: IInputProps) => {
  const Root: any = props.as || "div";
  const state = useInput(props);
  const { classes, variants, children } = props;

  return (
    <Root className={cx(classes.root, state, classes, variants)}>
      <input
        value={state.value}
        onChange={state.onChange}
        className={classes.input}
        disabled={state.disabled}
      />
      {children}
    </Root>
  );
};

const InputVariants = [
  "input-fill",
  { disabled: "disabled-fill" },
  { error: "error-fill" },
];

export const Input = (props: IInputProps) =>
  InputBase({
    ...props,
    variants: InputVariants,
    classes: defaultClasses,
  });

export const InputExample = () => (
  <div className="SampleCard">
    <Input defaultValue="I am an input" />
    <Input disabled defaultValue="I am a disabled input" />
  </div>
);
