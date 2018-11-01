import { SFC, HTMLProps, ReactNode, ReactType } from 'react';

export interface BreadcrumbItemProps extends HTMLProps<HTMLLIElement> {
    children?: ReactNode;
    className?: string;
    to?: string;
    isActive?: boolean;
    target?: string;
    component?: ReactType<BreadcrumbItemProps>;
}

declare const BreeadcrumbItem: SFC<BreadcrumbItemProps>;

export default BreeadcrumbItem;
