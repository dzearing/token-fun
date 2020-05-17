import * as React from "react";
import { default as defaultClasses } from "./Toggle.module.scss";
import cx from "../utilities/cx";
import { useControlled } from "../hooks/useControlled";
import { useEventCallback } from "../hooks/useEventCallback";

export interface IToggleProps extends React.AllHTMLAttributes<any> {
  as?: string;
  classes?: any;
  variants?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  label?: string;
}

export const useToggle = (props: IToggleProps): IToggleProps => {
  const { disabled, onClick, ...rest } = props;
  const [checked, setChecked] = useControlled(props, "checked");
  const onToggleClick = useEventCallback(onClick, () => setChecked(!checked), [
    checked,
    setChecked
  ]);

  return {
    ...rest,
    checked,
    setChecked,
    onClick: onToggleClick,
    ...(!disabled && {
      tabIndex: 0,
      role: "button"
    }),
    ...(disabled && {
      disabled: true,
      "aria-disabled": true
    })
  };
};

export const ToggleBase = (props: IToggleProps) => {
  const Root: any = props.as || "div";
  const state = useToggle(props);
  const { classes } = props;

  return (
    <Root
      aria-checked="true"
      role="checkbox"
      {...!state.disabled && {
        tabIndex: 0,
        "data-is-focusable": true
      }}
      onClick={state.onClick}
      className={cx(classes.root, state, classes, ToggleVariants)}
    >
      <span className={classes.pill}>
        <span className={classes.thumb} />
      </span>

      <span className={classes.label}>{props.label}</span>
    </Root>
  );
};

const ToggleVariants = [
  { disabled: "disabled-fill" },
  { checked: "checked" },
  (state: IToggleProps) => (state.checked ? "accent-fill" : "")
];

export const Toggle = (props: IToggleProps) =>
  ToggleBase({ ...props, variants: ToggleVariants, classes: defaultClasses });

export const ToggleExample = () => (
  <div className="SampleCard">
    <Toggle funky label="I am a toggle" />
    <Toggle defaultChecked label="I am a checked toggle" />
    <Toggle disabled label="I am a disabled toggle" />
    <Toggle disabled defaultChecked label="I am a disabled checked toggle" />
  </div>
);
