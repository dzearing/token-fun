// declare module "ie11-custom-properties";

export const loadVariablesPolyfill = () => {
  if (
    typeof window !== "undefined" &&
    window.MSInputMethodContext &&
    (document as any).documentMode
  ) {
    // import("ie11-custom-properties");
  }
};
