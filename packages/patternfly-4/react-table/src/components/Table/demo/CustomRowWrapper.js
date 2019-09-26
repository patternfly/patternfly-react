import React from 'react';
import { RowWrapperProps } from '@patternfly/react-table';
import { css } from '@patternfly/react-styles';

export default class CustomRowWrapper extends React.Component {
  
  render() {
    const {
      trRef,
      className,
      rowProps,
      ...props
    } = this.props;

    return (
      <tr
        {...props}
        ref={trRef}
        className={css(
          className,
          'my-custom-class'
        )}
      />
    );
  }
}