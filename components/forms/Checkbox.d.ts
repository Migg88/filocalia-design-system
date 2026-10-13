import * as React from "react";
/** Square checkbox with plum fill and nude check. */
export interface CheckboxProps{
  label: React.ReactNode; description?: string;
  checked?: boolean; defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean; name?: string; value?: string; id?: string;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
