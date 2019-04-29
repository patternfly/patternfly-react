import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Card/card.css';
import titleStyles from '@patternfly/patternfly/components/Title/title.css';

export interface CardHeaderProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode; 
    className?: string; 
}

export const CardHeader: React.FunctionComponent<CardHeaderProps> = ({
    children = null, 
    className = '', 
    ...props
}) => (
    <div className={css(styles.cardHeader, titleStyles.title, titleStyles.modifiers.lg, className)} {...props}>
        {children}
    </div>
);

