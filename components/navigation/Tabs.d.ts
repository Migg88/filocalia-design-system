/** Underlined tabs; active tab carries a champagne keystone diamond. */
export interface TabsProps{ items: Array<string|{value:string;label:string}>; value?: string; defaultValue?: string; onChange?: (value: string) => void; }
export declare function Tabs(props: TabsProps): JSX.Element;
