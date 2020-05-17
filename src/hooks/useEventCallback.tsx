import * as React from "react";

export const useEventCallback = (
  userCallback?: any,
  callback?: any,
  dependencies: any[] = []
) => {
  return React.useCallback(
    (ev: React.FormEvent) => {
      if (userCallback) {
        userCallback(ev);
        if (ev.defaultPrevented) {
          return;
        }
      }
      if (callback) {
        callback(ev);
      }
      ev.preventDefault();
      ev.stopPropagation();
    },
    [userCallback, ...dependencies]
  );
};
