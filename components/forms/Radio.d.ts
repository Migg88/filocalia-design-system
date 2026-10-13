import * as React from "react";
/** Round radio; the selected dot is a champagne diamond (keystone motif). */
export interface RadioProps{
  label: React.ReactNode; description?: string;
  checked?: boolean; defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean; name?: string; value?: string; id?: string;
}
export declare function Radio(props: RadioProps): JSX.Element;
