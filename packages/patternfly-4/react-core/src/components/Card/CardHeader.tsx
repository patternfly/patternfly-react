import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Card/card.css';
import titleStyles from '@patternfly/patternfly/components/Title/title.css';

export interface CardHeaderProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the Card Footer */
    children?: React.ReactNode; 
    /** Additional classes added to the Header */
    className?: string; 
}

export const CardHeader: React.FunctionComponent<CardHeaderProps> = ({
    children = null, 
    className = '', 
    ...props
}: CardHeaderProps) => (
    <div className={css(styles.cardHeader, titleStyles.title, titleStyles.modifiers.lg, className)} {...props}>
        {children}
    </div>
);

