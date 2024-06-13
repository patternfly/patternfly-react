import * as React from 'react';
import modalStyles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import { css } from '@patternfly/react-styles';
import { capitalize } from '../../helpers';
import { Tooltip } from '../Tooltip';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import { useIsomorphicLayoutEffect } from '../../helpers';

export const isVariantIcon = (icon: any): icon is string =>
  ['success', 'danger', 'warning', 'info', 'custom'].includes(icon as string);

export interface ModalBoxTitleProps {
  /** Additional classes added to the modal box title. */
  className?: string;
  /** Id of the modal box title. */
  id?: string;
  /** Content rendered inside the modal box title. */
  title: React.ReactNode;
  /** Optional alert icon (or other) to show before the title. When the predefined alert types
   * are used the default styling will be automatically applied. */
  titleIconVariant?: 'success' | 'danger' | 'warning' | 'info' | 'custom' | React.ComponentType<any>;
  /** Optional title label text for screen readers. */
  titleScreenReaderText?: string;
}

export const ModalBoxTitle: React.FunctionComponent<ModalBoxTitleProps> = ({
  className,
  id,
  title,
  titleIconVariant,
  titleScreenReaderText,
  ...props
}: ModalBoxTitleProps) => {
  const [hasTooltip, setHasTooltip] = React.useState(false);
  const h1 = React.useRef<HTMLHeadingElement>(null);
  const label =
    titleScreenReaderText ||
    (isVariantIcon(titleIconVariant) ? `${capitalize(titleIconVariant)} alert:` : titleScreenReaderText);
  const variantIcons = {
    success: <CheckCircleIcon />,
    danger: <ExclamationCircleIcon />,
    warning: <ExclamationTriangleIcon />,
    info: <InfoCircleIcon />,
    custom: <BellIcon />
  };
  const CustomIcon = !isVariantIcon(titleIconVariant) && titleIconVariant;

  useIsomorphicLayoutEffect(() => {
    setHasTooltip(h1.current && h1.current.offsetWidth < h1.current.scrollWidth);
  }, []);

  const content = (
    <h1
      id={id}
      ref={h1}
      className={css(
        modalStyles.modalBoxTitle,
        titleIconVariant && modalStyles.modifiers.icon,
        isVariantIcon(titleIconVariant) && modalStyles.modifiers[titleIconVariant],
        className
      )}
      {...props}
    >
      {titleIconVariant && (
        <span className={css(modalStyles.modalBoxTitleIcon)}>
          {isVariantIcon(titleIconVariant) ? variantIcons[titleIconVariant] : <CustomIcon />}
        </span>
      )}
      {label && <span className="pf-v6-screen-reader">{label}</span>}
      <span className={css(modalStyles.modalBoxTitleText)}>{title}</span>
    </h1>
  );

  return hasTooltip ? <Tooltip content={title}>{content}</Tooltip> : content;
};
ModalBoxTitle.displayName = 'ModalBoxTitle';
