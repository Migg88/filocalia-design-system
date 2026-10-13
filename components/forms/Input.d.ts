import * as React from "react";
/** Text input with label, hint and error message. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  hint?: string;
  /** Error message; turns border coral */
  error?: string;
}
export declare function Input(props: InputProps): JSX.Element;
