import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import { BadgeVariant, Props } from "./types";
import styles from "./styles.scss";

type StylesKey = keyof typeof styles;

const Badge = ({
  variant = "neutral",
  size = "medium",
  isSaturated,
  children,
  className,
  ...rest
}: PropsWithChildren<Props>) => (
  <div
    {...rest}
    className={classNames(
      styles.Badge,
      className && className,
    )}
  >
    {children}
  </div>
);

export { Badge, BadgeVariant };
