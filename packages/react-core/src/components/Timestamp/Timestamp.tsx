import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Timestamp/timestamp';
import { css } from '@patternfly/react-styles';
import { Tooltip } from '../Tooltip';
import { isValidDate } from '../../helpers/datetimeUtils';

export enum TimestampFormat {
  full = 'full',
  long = 'long',
  medium = 'medium',
  short = 'short'
}

export enum TimestampTooltipVariant {
  default = 'default',
  custom = 'custom'
}

export interface TimestampTooltip {
  /** The variant of the tooltip. The "default" variant displays the date passed into
   * the timestamp's date prop as a UTC string.
   */
  variant: 'default' | 'custom';
  /** Content displayed in the tooltip when using the "custom" variant. */
  content?: React.ReactNode;
  /** Additional props passed to the tooltip. */
  tooltipProps?: any;
  /** A custom suffix to apply to a "default" variant tooltip. */
  suffix?: string;
}

export interface TimestampProps extends React.HTMLProps<HTMLSpanElement> {
  /** Displays custom content inside the timestamp, such as a relative time. This prop will
   * override the default content that is displayed. Custom content will not be affected by
   * any props that format or add to displayed content.
   */
  children?: React.ReactNode;
  /** Class to add to the outer span. */
  className?: string;
  /** Applies custom formatting to the displayed date and/or time. Passing this prop in will
   * override the dateFormat and timeFormat props.
   */
  customFormat?: { [key: string]: string };
  /** Determines the default content that is displayed inside the timestamp and the value of
   * the inner time element's datetime attribute. */
  date?: Date;
  /** Determines the format of the displayed date in the timestamp and UTC tooltip. Examples:
   * "Full" => Tuesday, August 9, 2022;
   * "Long" => August 9, 2022;
   * "Medium" => Aug 9, 2022;
   * "Short" => 8/9/22
   */
  dateFormat?: 'full' | 'long' | 'medium' | 'short';
  /** Applies a custom suffix to the displayed content, usually after the time, such as a
   * custom time zone.
   */
  displaySuffix?: string;
  /** Flag for displaying the time in a 12 hour format. If this prop is not passed in,
   * the hour format will be based on the locale prop's value.
   */
  is12Hour?: boolean;
  /** Determines which locale to use in the displayed content. Defaults to the current locale
   * when this prop is not passed in. For more information about locale's:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
   */
  locale?: string;
  /** Determines the format of the displayed time in the timestamp and UTC tooltip. Examples:
   * "Full" => 11:25:00 AM Eastern Daylight Time
   * "Long" => 11:25:00 AM EDT
   * "Medium" => 11:25:00 AM
   * "Short" => 11:25 AM
   */
  timeFormat?: 'full' | 'long' | 'medium' | 'short';
  /** Adds a tooltip to the timestamp. */
  tooltip?: TimestampTooltip;
}

export const Timestamp: React.FunctionComponent<TimestampProps> = ({
  children,
  className,
  customFormat,
  date: dateProp,
  dateFormat,
  displaySuffix = '',
  is12Hour,
  locale,
  timeFormat,
  tooltip,
  ...props
}: TimestampProps) => {
  const [date, setDate] = React.useState(() => {
    const initDate = new Date(dateProp);
    if (isValidDate(initDate)) {
      return initDate;
    }

    return new Date();
  });

  React.useEffect(() => {
    const dateFromProp = new Date(dateProp);
    if (isValidDate(dateFromProp) && dateFromProp.toString() !== new Date(date).toString()) {
      setDate(dateFromProp);
    } else if (!dateProp) {
      setDate(new Date());
    }
  }, [dateProp]);

  const hasTimeFormat = timeFormat && !customFormat;
  const formatOptions = {
    ...(dateFormat && !customFormat && { dateStyle: dateFormat }),
    ...(customFormat && { ...customFormat }),
    ...(is12Hour !== undefined && { hour12: is12Hour })
  };

  const dateAsLocaleString = new Date(date).toLocaleString(locale, {
    ...formatOptions,
    ...(hasTimeFormat && { timeStyle: timeFormat })
  });
  const defaultDisplay = `${dateAsLocaleString}${displaySuffix ? ' ' + displaySuffix : ''}`;

  const utcTimeFormat = timeFormat !== 'short' ? 'medium' : 'short';
  const convertToUTCString = (date: Date) => new Date(date).toUTCString().slice(0, -3);
  const utcDateString = new Date(convertToUTCString(date)).toLocaleString(locale, {
    ...formatOptions,
    ...(hasTimeFormat && { timeStyle: utcTimeFormat })
  });
  const defaultTooltipContent = `${utcDateString}${tooltip?.suffix ? ' ' + tooltip.suffix : ' UTC'}`;

  const { dateTime, ...propsWithoutDateTime } = props;

  const timestamp = (
    <span
      className={css(styles.timestamp, tooltip && styles.modifiers.helpText, className)}
      {...(tooltip && { tabIndex: 0 })}
      {...propsWithoutDateTime}
    >
      <time className="pf-c-timestamp__text" dateTime={dateTime || new Date(date).toISOString()}>
        {!children ? defaultDisplay : children}
      </time>
    </span>
  );

  return tooltip ? (
    <Tooltip
      content={tooltip.variant === TimestampTooltipVariant.default ? defaultTooltipContent : tooltip.content}
      {...tooltip.tooltipProps}
    >
      {timestamp}
    </Tooltip>
  ) : (
    timestamp
  );
};
Timestamp.displayName = 'Timestamp';
