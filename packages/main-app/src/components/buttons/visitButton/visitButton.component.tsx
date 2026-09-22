import { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

import styles from "./visitButton.module.css";

type Variant = "fill" | "outline";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
};

type ButtonProps = BaseProps &
  Omit<ComponentProps<"button">, keyof BaseProps> & {
    href?: never;
  };

type LinkProps = BaseProps &
  Omit<ComponentProps<"a">, keyof BaseProps | "href"> & {
    href: string;
  };

type Props = ButtonProps | LinkProps;

function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:")
  );
}

export default function VisitButton({
  variant = "fill",
  size = "md",
  fullWidth = true,
  className,
  children,
  href,
  ...otherProps
}: Props): ReactNode {
  const classes = clsx(
    styles["visit-button"],
    styles[variant],
    styles[size],
    fullWidth && styles.full,
    className,
  );

  if (href) {
    if (isExternalHref(href)) {
      return (
        <a
          className={classes}
          href={href}
          {...(otherProps as ComponentProps<"a">)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        className={classes}
        href={href}
        {...(otherProps as Omit<ComponentProps<"a">, "href">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(otherProps as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
