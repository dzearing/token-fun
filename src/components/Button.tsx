import * as React from "react";
import classes from "./Button.module.scss";
import cx from "../utilities/cx";

export interface IButtonProps extends React.ButtonHTMLAttributes<any> {
  as?: string;
  primary?: boolean;
  secondary?: boolean;
  checked?: boolean;
  iconOnly?: boolean;
  loading?: boolean;
  circular?: boolean;
  classes?: any;
  danger?: boolean;
  variants?: any;

  icon?: any;
}

const ButtonVariants = [
  { danger: "danger-fill" },
  { secondary: "neutral-fill" },
  { primary: "accent-fill" },
  { disabled: "disabled-fill" },
  { checked: "accent-strong-fill" },
  { iconOnly: "iconOnly" },
  { loading: "loading" },
  { circular: "circular" },
];

export const useButton = (props: IButtonProps) => {
  const {
    disabled,
    primary,
    secondary,
    checked,
    iconOnly,
    loading,
    circular,
    classes,
    variants,
    ...rest
  } = props;

  return {
    ...rest,
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

export const ButtonBase = (props: IButtonProps) => {
  const Root: any = props.as || "button";
  const { classes, variants, children } = props;
  return (
    <Root
      {...useButton(props)}
      className={cx([classes.root].join(" "), props, classes, variants)}
    >
      {children}
    </Root>
  );
};

export const Button = (props: IButtonProps) =>
  ButtonBase({ ...props, classes, variants: ButtonVariants });

export type IFunkyButtonProps = IButtonProps & { funky?: boolean };

export const FunkyButton = (props: IFunkyButtonProps) =>
  ButtonBase({
    ...props,
    classes,
    variants: [...ButtonVariants, { funky: "funky-fill" }],
  });
