import * as React from "react";
/** Selectable / removable chip for filters (discipline, city, level). */
export interface TagProps{ children: React.ReactNode; selected?: boolean; onClick?: () => void; onRemove?: () => void; icon?: React.ReactNode; }
export declare function Tag(props: TagProps): JSX.Element;
