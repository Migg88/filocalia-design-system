import * as React from "react";
/**
 * Pill-shaped action button. One primary per view.
 * @startingPoint section="Actions" subtitle="Pill buttons in five variants" viewport="700x260"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  /** primary = plum (main CTA), secondary = blush, accent = coral (booking/purchase), outline, ghost */
  variant?: "primary"|"secondary"|"accent"|"outline"|"ghost";
  size?: "sm"|"md"|"lg";
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
