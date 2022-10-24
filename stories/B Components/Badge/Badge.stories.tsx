import * as React from "react";
import { Badge } from "ds/core/Badge";
import { badgeVariants, badgeSizes } from "ds/core/Badge/types";
import mdx from "./Badge.mdx";

export const Example = (args: JSX.IntrinsicAttributes) => {
  return <Badge {...args} />;
};

Example.args = {
  variant: "success",
  size: "medium",
  isSaturated: false,
  children: "Approved",
};

export default {
  title: "Components/Badge",
  argTypes: {
    variant: { control: "select", options: badgeVariants },
    size: { control: "select", options: badgeSizes },
  },
  component: Badge,
  parameters: {
    docs: { page: mdx },
  },
};
