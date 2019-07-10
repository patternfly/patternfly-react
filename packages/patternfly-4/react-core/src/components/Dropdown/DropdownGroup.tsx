import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { DropdownContext } from './dropdownConstants';
import { Omit } from '../../helpers/typeUtils';

export interface DropdownGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
  /** Checkboxes within group */
  children?: React.ReactNode; 
  /** Additional classes added to the DropdownGroup control */
  className?: string; 
  /** Group label */
  label?: React.ReactNode; 
}

export const DropdownGroup: React.Component<DropdownGroupProps> = ({
  children = null,
  className = '',
  label = '',
  ...props
  }: DropdownGroupProps) => (
  <DropdownContext.Consumer>
    {({ sectionClass, sectionTitleClass, sectionComponent: SectionComponent }) => (
      <SectionComponent {...props} className={css(sectionClass, className)}>
        {label && (
          <h1 className={css(sectionTitleClass)} aria-hidden>
            {label}
          </h1>
        )}
        <ul role="none">{children}</ul>
      </SectionComponent>
    )}
  </DropdownContext.Consumer>
);