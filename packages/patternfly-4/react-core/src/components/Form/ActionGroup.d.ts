import { SFC, HTMLProps, ReactNode } from 'react';

export interface ActionGroupProps extends React.Component<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
}

declare const ActionGroup: SFC<ActionGroupProps>;

export default ActionGroup;
