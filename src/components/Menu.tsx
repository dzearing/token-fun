import * as React from "react";
import { AddIcon } from "../icons/IconSet";
import classes from "./Menu.module.scss";
import { Toolbar } from "./Toolbar";
import { ToolbarButton } from "./ToolbarButton";

const MenuItem = (props: any) => <div {...props} className={classes.root} />;
const Menu = (props: any) => <div {...props} className={classes.root} />;
const Divider = () => <div />;

export const MenuExample = () => (
  <div>
    menu
    <Menu>
      <Toolbar>
        <ToolbarButton icon={<AddIcon />} />
        <ToolbarButton icon={<AddIcon />} />
        <ToolbarButton icon={<AddIcon />} />
      </Toolbar>
      <Divider />
      <MenuItem
        icon={<AddIcon />}
        title="Title"
        shortcut={{ modifier: "ctrl", key: "z" }}
      />
      <MenuItem
        icon={<AddIcon />}
        title="Title"
        shortcut={{ modifier: "ctrl", key: "z" }}
      />
      <MenuItem
        icon={<AddIcon />}
        title="Title"
        shortcut={{ modifier: "ctrl", key: "z" }}
      />
      <MenuItem
        icon={<AddIcon />}
        title="Title"
        shortcut={{ modifier: "ctrl", key: "z" }}
      />
      <Divider />
      <MenuItem />
    </Menu>
  </div>
);
