import * as React from "react";
/** Modal dialog on a plum scrim. */
export interface DialogProps{ open: boolean; title?: string; children?: React.ReactNode; actions?: React.ReactNode; onClose?: () => void; width?: number; /** Render in-flow (for previews) instead of fixed overlay */ inline?: boolean; }
export declare function Dialog(props: DialogProps): JSX.Element|null;
