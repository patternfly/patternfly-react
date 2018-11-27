import { SFC, HTMLProps, ReactNode, ReactType } from 'react';

export interface BreadcrumbHeadingProps extends HTMLProps<HTMLLIElement> {
    children?: ReactNode;
    className?: string;
    to?: string;
    target?: string;
    component?: ReactType<BreadcrumbHeadingProps>;
}

declare const BreeadcrumbHeading: SFC<BreadcrumbHeadingProps>;

export default BreeadcrumbHeading;
