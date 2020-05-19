import * as React from "react";
import classes from "./Toolbar.module.scss";
import { MoreIcon } from "../icons/IconSet";
import {
  ItalicIcon,
  BoldIcon,
  CutIcon,
  CopyIcon,
  UnderlineIcon,
} from "../icons/IconSet2";
import { PasteIcon } from "../icons/IconSet1";
import { ToolbarButton } from "./ToolbarButton";

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
