import * as React from "react";
import cx from "classnames";

export const createFontIcon = (baseClassName: string) => (code: string) => (
  p: any
) => {
  return (
    <i {...p} className={cx(baseClassName, p.className)}>
      {code}
    </i>
  );
};
