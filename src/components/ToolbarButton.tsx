import { Button, IButtonProps } from "./Button";
/**
 * Goals:
 *
 * Render buttons with a particular look
 * Don't remake the button
 * Reuse as much as possible
 */
export const ToolbarButton = (props: IButtonProps) => {
  // gross
  return Button({
    ...props,
    iconOnly: true,
    style: { "--ms-button-height": "40px" } as any,
    children: props.icon,
  });
};
