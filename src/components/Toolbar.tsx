import * as React from "react";
import classes from "./Toolbar.module.scss";
import { Button } from "./Button";
import {
  ItalicIcon,
  BoldIcon,
  CutIcon,
  CopyIcon,
  PasteIcon,
  UnderlineIcon,
  MoreIcon
} from "../icons/index";

/**
 * Goals:
 *
 * Render buttons with a particular look
 * Don't remake the button
 * Reuse as much as possible
 */
export const ToolbarButton = props => {
  // gross
  return Button({
    ...props,
    iconOnly: true,
    style: { "--ms-button-height": "40px" },
    children: props.icon
  });
};

export const Toolbar = (props: any) => {
  const { className, children } = props;
  return <div className={`${classes.root} ${className}`}>{children}</div>;
};

export const ToolbarExample = () => (
  <div>
    <h3>Toolbar example</h3>
    <Toolbar className="accent-fill">
      <ToolbarButton icon={<CopyIcon />} />
      <ToolbarButton icon={<CutIcon />} />
      <ToolbarButton icon={<PasteIcon />} />
      <ToolbarButton icon={<BoldIcon />} />
      <ToolbarButton icon={<ItalicIcon />} />
      <ToolbarButton icon={<UnderlineIcon />} />
      <ToolbarButton icon={<MoreIcon />} style={{ justifySelf: "flex-end" }} />
    </Toolbar>
    <Toolbar className="neutral-fill">
      <ToolbarButton icon={<CopyIcon />} />
      <ToolbarButton icon={<CutIcon />} />
      <ToolbarButton icon={<PasteIcon />} />
      <ToolbarButton icon={<BoldIcon />} />
      <ToolbarButton icon={<ItalicIcon />} />
      <ToolbarButton icon={<UnderlineIcon />} />
      <ToolbarButton icon={<MoreIcon />} style={{ justifySelf: "flex-end" }} />
    </Toolbar>
  </div>
);
