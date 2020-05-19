import * as React from "react";
import { Button } from "./Button";
import { UploadIcon, ChevronDownIcon, CircleRingIcon } from "../icons/IconSet";

export const ButtonExampleSection = (props: any) => (
  <div className="SampleCard">
    <div>{Object.keys(props).join(" ").toString() || "(default)"}</div>
    <Button iconOnly {...props}>
      <UploadIcon />
    </Button>
    <Button circular {...props}>
      <UploadIcon />
    </Button>
    <Button {...props}>
      <span>I'm a button</span>
    </Button>
    <Button {...props}>
      <CircleRingIcon />
      <span>I'm a button</span>
    </Button>
    <Button {...props}>
      <CircleRingIcon />
      <span>I'm a button</span>
      <ChevronDownIcon style={{ fontSize: 12 }} />
    </Button>
    <Button disabled {...props}>
      <CircleRingIcon />
      <span>I'm a disabled button</span>
      <ChevronDownIcon style={{ fontSize: 12 }} />
    </Button>
  </div>
);

const exampleSets = [{ primary: true }, { secondary: true }];

export const ButtonExample = () => (
  <>
    {exampleSets.map((set) => (
      <ButtonExampleSection {...set} />
    ))}
  </>
);
