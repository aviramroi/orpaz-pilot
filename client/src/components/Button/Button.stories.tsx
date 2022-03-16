import { Meta, Story } from "@storybook/react";
import React from "react";

// import Play from "../../icons/play.svg";
// import ArrowLeft from "../../icons/arrow-left.svg";

import { Button, ButtonProps } from "./index";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});

export const Brand = Template.bind({});
Brand.args = {
  theme: "brand",
};

export const LinkUnderlined = Template.bind({});
LinkUnderlined.args = {
  theme: "linkUnderlined",
};

export const LinkBold = Template.bind({});
LinkBold.args = {
  theme: "linkBold",
};

export const Outline = Template.bind({});
Outline.args = {
  theme: "outline",
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
  theme: "outline",
  disabled: true,
};

export const OutlineWhite = Template.bind({});
OutlineWhite.args = {
  theme: "outlineWhite",
};

export const OutlineWhiteDisabled = Template.bind({});
OutlineWhiteDisabled.args = {
  theme: "outlineWhite",
  disabled: true,
};

export const Danger = Template.bind({});
Danger.args = {
  theme: "danger",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

// export const Block = Template.bind({});
// Block.args = {
//   block: true,
//   icon: <Play />,
// };

// export const IconBefore = Template.bind({});
// IconBefore.args = {
//   icon: <Play />,
// };

// export const brandWithMortarOutline = Template.bind({});
// brandWithMortarOutline.args = {
//   theme: "brandWithMortarOutline",
//   icon: <Play />,
// };

// brandWithMortarOutline.parameters = {
//   backgrounds: { default: "dark" },
// };

// export const IconOnly: Story<ButtonProps> = (args) => <Button {...args} />;
// IconOnly.args = {
//   icon: <ArrowLeft />,
// };
