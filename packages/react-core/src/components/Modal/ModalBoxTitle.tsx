import * as React from 'react';
import modalStyles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import { css } from '@patternfly/react-styles';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { capitalize } from '../../helpers';
import { Tooltip } from '../Tooltip';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';

export const isModalAlertVariant = (icon: any): icon is string =>
  ['success', 'error', 'warning', 'info', 'defaut'].includes(icon as string);

export interface ModalBoxTitleProps {
  /** Content rendered inside the modal box header title. */
  title: React.ReactNode;
  /** Optional alert icon (or other) to show before the title of the Modal Header
   * When the predefined alert types are used the default styling
   * will be automatically applied */
  titleIconVariant?: 'success' | 'error' | 'warning' | 'info' | 'default' | React.ComponentType<any>;
  /** Optional title label text for screen readers */
  titleLabel?: string;
  /** Additional classes added to the modal box header title. */
  className?: string;
  /** id of the modal box header title. */
  id: string;
}

export const ModalBoxTitle: React.FunctionComponent<ModalBoxTitleProps> = ({
  className = '',
  id,
  title,
  titleIconVariant,
  titleLabel = '',
  ...props
}: ModalBoxTitleProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
  const h1 = React.useRef<HTMLHeadingElement>();
  const label =
    titleLabel || (isModalAlertVariant(titleIconVariant) ? `${capitalize(titleIconVariant)} alert:` : titleLabel);
  const variantIcons = {
    success: <CheckCircleIcon />,
    error: <ExclamationCircleIcon />,
    warning: <ExclamationTriangleIcon />,
    info: <InfoCircleIcon />,
    default: <BellIcon />
  };

  React.useLayoutEffect(() => {
    setIsTooltipVisible(h1.current && h1.current.offsetWidth < h1.current.scrollWidth);
  }, []);

  const content = (
    <h1 id={id} ref={h1} className={css(modalStyles.modalBoxTitle, className)} {...props}>
      {titleIconVariant && (
        <span className={css(modalStyles.modalBoxTitleIcon)}>
          {isModalAlertVariant(titleIconVariant) ? variantIcons[titleIconVariant] : titleIconVariant}
        </span>
      )}
      {label && <span className={css(accessibleStyles.screenReader)}>{label}</span>}
      {title}
    </h1>
  );

  return isTooltipVisible ? (
    <Tooltip content={title} isVisible>
      {content}
    </Tooltip>
  ) : (
    content
  );
};
ModalBoxTitle.displayName = 'ModalBoxTitle';
