import { SFC, HTMLProps, ReactNode } from 'react';

export interface BreadcrumbProps extends HTMLProps<HTMLElement> {
    children?: ReactNode;
    className?: string;
    'aria-label'?: string;
}

declare const Breadcrumb: SFC<BreadcrumbProps>;

export default Breadcrumb;
