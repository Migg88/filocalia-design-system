import * as React from "react";
/** Small uppercase status/label pill. */
export interface BadgeProps{ tone?: "plum"|"blush"|"coral"|"champagne"|"outline"|"soft"; dot?: boolean; children: React.ReactNode; }
export declare function Badge(props: BadgeProps): JSX.Element;
