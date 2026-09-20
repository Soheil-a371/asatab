import { ComponentProps, ReactNode } from "react";
import clsx from "clsx";

import styles from "./visitButton.module.css";

type Variant = "fill" | "outline";
type Size = "sm" | "md" | "lg";

type Props = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
};

export default function VisitButton({
  variant = "fill",
  size = "md",
  fullWidth = true,
  className,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles["visit-button"],
        styles[variant],
        styles[size],
        fullWidth && styles.full,
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
