import * as React from "react";
/** Short plum hint on hover/focus. */
export interface TooltipProps{ content: React.ReactNode; children: React.ReactNode; placement?: "top"|"bottom"; }
export declare function Tooltip(props: TooltipProps): JSX.Element;
