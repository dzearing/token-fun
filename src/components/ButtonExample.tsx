import * as React from "react";
import { Button } from "@fluentui/react-button";
import { UploadIcon, ChevronDownIcon, CircleRingIcon } from "../icons/IconSet";

export const ButtonExampleSection = (props: any) => (
  <div className="SampleCard">
    <div>{Object.keys(props).join(" ").toString() || "(default)"}</div>
    <Button iconOnly icon={<UploadIcon />} {...props} />
    <Button iconOnly icon={<UploadIcon />} circular {...props} />
    <Button {...props} content={<span>I'm a button</span>} />
    <Button {...props} icon={<CircleRingIcon />} content="I'm a button" />
    <Button
      {...props}
      disabled
      icon={<CircleRingIcon />}
      content="I'm a button"
    />
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
