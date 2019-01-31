import { FunctionComponent, HTMLProps, ReactNode, ReactType } from 'react';

export interface BreadcrumbItemProps extends HTMLProps<HTMLLIElement> {
    children?: ReactNode;
    className?: string;
    to?: string;
    isActive?: boolean;
    target?: string;
    component?: ReactType<BreadcrumbItemProps>;
}

declare const BreeadcrumbItem: FunctionComponent<BreadcrumbItemProps>;

export default BreeadcrumbItem;
