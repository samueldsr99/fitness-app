import { ComponentProps } from "react";

import { clsx } from "@/ui/utils";

import * as styles from "./Button.css";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: styles.variantPrimary,
  secondary: styles.variantSecondary,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

export const Button = ({ className, variant = "secondary", size = "md", fullWidth = false, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.root, variantStyles[variant], sizeStyles[size], fullWidth && styles.fullWidth, className)}
      {...props}
    />
  );
};
