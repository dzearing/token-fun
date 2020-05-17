export const cx = (
  className: string,
  props: {},
  classes: {},
  variants: (
    | string
    | { [key: string]: string }
    | ((arg: any) => string | { [key: string]: string }))[]
) => {
  const classList = [className];
  let defaultClass;

  for (let variant of variants) {
    if (typeof variant === "function") {
      console.log(variant);
      variant = variant(props);
    }

    if (typeof variant === "object") {
      let name = Object.keys(variant)[0];
      let value = variant[name];
      if (name === "default") {
        defaultClass = value;
      } else if (props[name]) {
        classList.push(value);

        if (classes[name]) {
          classList.push(classes[name]);
        }
      }
    } else {
      classList.push(variant);
    }
  }

  if (classList.length === 0 && defaultClass) {
    classList.push(defaultClass);
  }

  if (props.className) {
    classList.push(props.className);
  }

  return classList.join(" ");
};

export default cx;
