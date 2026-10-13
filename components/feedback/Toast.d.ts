import * as React from "react";
/** Transient plum notification with a coloured keystone marker. */
export interface ToastProps{ tone?: "info"|"success"|"error"; title?: string; children?: React.ReactNode; onClose?: () => void; }
export declare function Toast(props: ToastProps): JSX.Element;
