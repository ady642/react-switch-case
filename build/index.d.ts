import { FunctionComponent, ReactElement } from "react";
interface CaseProps {
    children: ReactElement;
    value: string;
}
export declare const Case: FunctionComponent<CaseProps>;
interface SwitchProps {
    children: JSX.Element[];
    defaultComponent: JSX.Element;
    componentName: string;
}
export declare const Switch: ({ children, defaultComponent, componentName }: SwitchProps) => JSX.Element;
export {};
