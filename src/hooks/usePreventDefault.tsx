import * as React from "react";

export const usePreventDefault = () => {
  return React.useCallback((ev) => ev.preventDefault(), []);
};
