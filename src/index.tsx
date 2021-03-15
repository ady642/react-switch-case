import {FunctionComponent, ReactElement} from "react";

interface CaseProps {
    children: ReactElement
    value: string
}

export const Case: FunctionComponent<CaseProps> = (props) => {
    return props.children
};

interface SwitchProps {
    children: JSX.Element[]
    defaultComponent: JSX.Element
    componentName: string
}

export const Switch: ({children, defaultComponent, componentName}: SwitchProps) => JSX.Element = ({ children, defaultComponent , componentName }) => {
    if(children.length === 0) {
        return defaultComponent
    }

    const result = children.find((child: JSX.Element) => {
        return child.props.value === componentName
    })

    return result ?? defaultComponent
}
