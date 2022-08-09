import * as React from 'react';
// import styles from '@patternfly/react-styles/css/components/Timestamp';
import { css } from '@patternfly/react-styles';
import { Tooltip, TooltipProps } from '../Tooltip';

export enum TimestampFormats {
  full = 'full',
  long = 'long',
  medium = 'medium',
  short = 'short'
}

export interface TimestampProps extends React.HTMLProps<HTMLSpanElement> {
  /** Custom content rendered inside the timestamp, such as a relative time. Passing this prop
   * in will override the default content and timeZoneSuffix prop.
   */
  children?: React.ReactNode;
  /** Class to add to the outer span. */
  className?: string;
  /** Applies custom formatting to the displayed date and/or time when custom content is not
   * passed in. Passing this prop in will override the dateFormat and timeFormat props.
   */
  customFormat?: { [key: string]: string };
  /** A date object that is used to render default content inside the timestamp. */
  date?: Date;
  /** Determines the format of the displayed date in the timestamp and UTC tooltip when custom
   * content is not passed in. Examples:
   * "Full" => Tuesday, August 9, 2022;
   * "Long" => August 9, 2022;
   * "Medium" => Aug 9, 2022;
   * "Short" => 8/9/22
   */
  dateFormat?: 'full' | 'long' | 'medium' | 'short';
  /** An ISO 8601 formatted date string to apply to the inner time element's datetime attribute. */
  datetime: string;
  /** Flag indicating whether the timestamp has a tooltip to display the UTC time.
   * To render a tooltip with custom content, pass in the tooltipContent prop instead.
   */
  hasUTCTooltip?: boolean;
  /** Flag for displaying the time in a 12 hour format (true) or a 24 hour format (false),
   * when custom content is not passed in.
   *
   * If this prop is not passed in, the hour format will be based on the locale prop's value. */
  is12Hour?: boolean;
  /** Determines which locale to use in the displayed content when custom content is not
   * passed in. Defaults to the current locale when this prop is not passed in.
   * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
   * for more information.
   */
  locale?: string;
  /** Determines the format of the displayed time when custom content is not passed in. Examples:
   * "Full" => 11:25:00 AM Eastern Daylight Time
   * "Long" => 11:25:00 AM EDT
   * "Medium" => 11:25:00 AM
   * "Short" => 11:25 AM
   */
  timeFormat?: 'full' | 'long' | 'medium' | 'short';
  /** Applies a custom suffix to the displayed time when custom content is not passed in.
   * This prop should only be passed in when the timeFormat prop has a value of "medium" or "short".
   */
  timeZoneSuffix?: string;
  /** Creates a tooltip with custom content. Passing this prop in will override the
   * hasUTCTooltip and utcSuffix props.
   */
  tooltipContent?: React.ReactNode;
  /** Adds custom props to a tooltip if one is rendered. */
  tooltipProps?: TooltipProps;
  /** Applies a custom suffix to the UTC tooltip. */
  utcSuffix?: string;
}

export const Timestamp: React.FunctionComponent<TimestampProps> = ({
  children,
  className,
  customFormat,
  date: dateProp = new Date(),
  dateFormat,
  datetime,
  hasUTCTooltip,
  is12Hour,
  locale = undefined,
  timeFormat,
  timeZoneSuffix = '',
  tooltipContent,
  tooltipProps,
  utcSuffix = 'UTC',
  ...props
}: TimestampProps) => {
  const formatOptions = {
    ...(dateFormat && !customFormat && { dateStyle: dateFormat }),
    ...(customFormat && { ...customFormat }),
    ...(is12Hour !== undefined && { hour12: is12Hour })
  };
  const hasTimeFormat = timeFormat && !customFormat;

  const dateAsLocaleString = new Date(dateProp).toLocaleString(locale, {
    ...formatOptions,
    ...(hasTimeFormat && { timeStyle: timeFormat })
  });

  const utctimeFormat = timeFormat !== 'short' ? 'medium' : 'short';
  const convertToUTCString = (date: Date) => new Date(date).toUTCString().slice(0, -3);
  const utcDateString = new Date(convertToUTCString(dateProp)).toLocaleString(locale, {
    ...formatOptions,
    ...(hasTimeFormat && { timeStyle: utctimeFormat })
  });

  const timestamp = (
    <span className={css(className)} {...props}>
      <time dateTime={datetime}>{!children ? `${dateAsLocaleString} ${timeZoneSuffix}` : children}</time>
    </span>
  );

  return hasUTCTooltip || tooltipContent ? (
    <Tooltip content={tooltipContent || `${utcDateString} ${utcSuffix}`} {...tooltipProps}>
      {timestamp}
    </Tooltip>
  ) : (
    timestamp
  );
};
Timestamp.displayName = 'Timestamp';
