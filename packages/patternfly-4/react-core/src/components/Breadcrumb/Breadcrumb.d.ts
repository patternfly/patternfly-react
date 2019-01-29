import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface BreadcrumbProps extends HTMLProps<HTMLElement> {
    children?: ReactNode;
    className?: string;
    'aria-label'?: string;
}

declare const Breadcrumb: FunctionComponent<BreadcrumbProps>;

export default Breadcrumb;
