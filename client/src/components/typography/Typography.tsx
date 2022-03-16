import React, { FC, useEffect, useState } from "react";
import classnames from "classnames";

import styles from "./Typography.module.scss";

export type Variant =
  // Following sizes are ordered by size from very huge to very small
  | "headline-ultra"
  | "headline-mega"
  | "headline-super"
  | "headline"
  | "headline-bold"
  | "headline-sub"
  | "headline-sub-bold"
  | "copy-super"
  | "copy-super-bold"
  | "base" // default text style. it's not necessary to define and just for reference
  | "smallprint";

export interface TypographyProps {
  variant?: Variant;
  highlight?: boolean;
  component?: React.ElementType;
  className?: string;
}

export const Typography: FC<TypographyProps> = ({
  variant = "base",
  component: Component = "span",
  children,
  highlight,
  className,
}) => {
  const typoClassName = classnames(className, {
    [styles.highlight]: Component === "span" && highlight,

    [styles.headlineUltra]: variant === "headline-ultra",
    [styles.headlineMega]: variant === "headline-mega",
    [styles.headlineSuper]: variant === "headline-super",
    [styles.headline]: variant === "headline",
    [styles.headlineBold]: variant === "headline-bold",
    [styles.headlineSub]: variant === "headline-sub",
    [styles.headlineSubBold]: variant === "headline-sub-bold",
    [styles.copySuper]: variant === "copy-super",
    [styles.copySuperBold]: variant === "copy-super-bold",
    [styles.smallprint]: variant === "smallprint",
  });

  if (highlight && Component !== "span") {
    // Highlighting works only on inline elements. Therefore, assume a block element every time the component is not span
    return (
      <Component className={typoClassName}>
        <span className={styles.highlight}>{children}</span>
      </Component>
    );
  }

  return <Component className={typoClassName}>{children}</Component>;
};
