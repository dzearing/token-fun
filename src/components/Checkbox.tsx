import * as React from "react";
import { default as defaultClasses } from "./Checkbox.module.scss";
import cx from "../utilities/cx";
import { useControlled } from "../hooks/useControlled";
import { useEventCallback } from "../hooks/useEventCallback";
import { CheckMarkIcon } from "../icons/IconSet";

export interface ICheckboxProps extends React.AllHTMLAttributes<any> {
  as?: string;
  classes?: any;
  variants?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  label?: string;
}

export interface ICheckboxState extends ICheckboxProps {
  setChecked: (checked: boolean) => void;
}

export const useCheckbox = (props: ICheckboxProps): ICheckboxState => {
  const { disabled, onClick, ...rest } = props;
  const [checked, setChecked] = useControlled(props, "checked");
  const onToggleClick = useEventCallback(onClick, () => setChecked(!checked));

  return {
    ...rest,
    checked,
    setChecked,
    onClick: onToggleClick,
    ...(!disabled && {
      tabIndex: 0,
      role: "button",
    }),
    ...(disabled && {
      disabled: true,
      "aria-disabled": true,
    }),
  };
};

export const CheckboxBase = (props: ICheckboxProps) => {
  const Root: any = props.as || "div";
  const state = useCheckbox(props);
  const { classes, variants } = props;

  return (
    <Root
      aria-checked="true"
      role="checkbox"
      {...(!state.disabled && {
        tabIndex: 0,
        "data-is-focusable": true,
      })}
      onClick={state.onClick}
      className={cx(classes.root, state, classes, variants)}
    >
      <span className={classes.box}>
        <CheckMarkIcon className={classes.icon} />
      </span>

      <span className={classes.label}>{props.label}</span>
    </Root>
  );
};

const CheckboxVariants = [
  { disabled: "disabled-fill" },
  { checked: "accent-fill" },
];

export const Checkbox = (props: ICheckboxProps) =>
  CheckboxBase({
    ...props,
    variants: CheckboxVariants,
    classes: defaultClasses,
  });

export const CheckboxExample = () => (
  <div className="SampleCard">
    <Checkbox label="I am a checkbox" />
    <Checkbox defaultChecked label="I am a checked checkbox" />
    <Checkbox disabled label="I am a disabled checkbox" />
    <Checkbox
      disabled
      defaultChecked
      label="I am a disabled checked checkbox"
    />
  </div>
);
