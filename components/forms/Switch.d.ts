/** On/off toggle; knob turns champagne when on. */
export interface SwitchProps{ label?: string; checked?: boolean; defaultChecked?: boolean; onChange?: (on: boolean) => void; disabled?: boolean; id?: string; }
export declare function Switch(props: SwitchProps): JSX.Element;
