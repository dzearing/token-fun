export const cx = (
  className: string,
  props: any,
  classes: {},
  variants: string[]
) => {
  const classList = [className];

  for (let variant of variants) {
    if (props[variant] && classes[variant]) {
      classList.push(classes[variant]);
    }
  }

  return classList.join(" ");
};

export default cx;
