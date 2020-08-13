import * as React from "react";
import classes from "./Foo.module.scss";
import cx from "classnames";

export const Foo = () => {
  const [isChecked , setChecked] = React.useState(false);

  return (
    <button 
      className={cx('accent-fill', classes.root, isChecked && classes.isChecked)}
      onClick={ () => setChecked(!isChecked)
    }>
      <span className={classes.message}>Hello</span>
    </button>
  );
}