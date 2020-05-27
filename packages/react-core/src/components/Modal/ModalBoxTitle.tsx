import * as React from 'react';
import modalStyles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import { css } from '@patternfly/react-styles';

import { Tooltip } from '../Tooltip';

export interface ModalBoxTitleProps {
  /** Content rendered inside the modal box header title. */
  title: React.ReactNode;
  /** Additional classes added to the modal box header title. */
  className?: string;
  /** id of the modal box header title. */
  id: string;
}

export const ModalBoxTitle: React.FunctionComponent<ModalBoxTitleProps> = ({
  className = '',
  id,
  title,
  ...props
}: ModalBoxTitleProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
  const h1 = React.useRef<HTMLHeadingElement>();

  React.useLayoutEffect(() => {
    setIsTooltipVisible(h1.current && h1.current.offsetWidth < h1.current.scrollWidth);
  }, []);

  return isTooltipVisible ? (
    <Tooltip content={title}>
      <h1 id={id} ref={h1} className={css(modalStyles.modalBoxTitle, className)} {...props}>
        {title}
      </h1>
    </Tooltip>
  ) : (
    <h1 id={id} ref={h1} className={css(modalStyles.modalBoxTitle, className)} {...props}>
      {title}
    </h1>
  );
};
