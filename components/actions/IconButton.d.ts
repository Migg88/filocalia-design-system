import * as React from "react";
/** Circular icon-only button. Always pass an accessible label. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  icon: React.ReactNode;
  /** Accessible name, also shown as native tooltip */
  label: string;
  variant?: "solid"|"soft"|"outline"|"ghost";
  size?: "sm"|"md"|"lg";
  disabled?: boolean;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
