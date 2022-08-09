import * as React from 'react';
// import styles from '@patternfly/react-styles/css/components/Timestamp';
import { css } from '@patternfly/react-styles';
import { Tooltip, TooltipProps } from '../Tooltip';

export enum DateTimeStyle {
  full = 'full',
  long = 'long',
  medium = 'medium',
  short = 'short'
}

export interface TimestampProps extends React.HTMLProps<HTMLDivElement> {
  /** Custom content rendered inside the timestamp, such as a relative time or a string other than
   * a locale string. Passing this prop in will override the default content and timeZoneSuffix prop.
   */
  children?: React.ReactNode;
  /** Class to add to the outer span. */
  className?: string;
  /** An object to apply custom formatting to the displayed date and/or time when not passing in
   * custom content. Passing this prop in will override the dateStyle and timeStyle props.
   */
  customStyle?: { [key: string]: string };
  /** A date object that is used to render default date and/or time content. The default
   * content is rendered using the toLocaleString method.
   */
  date?: Date;
  /** Determines the format of the displayed and UTC tooltip date when not passing in custom
   * content. Examples:
   * "Full": Tuesday, August 9, 2022;
   * "Long": August 9, 2022;
   * "Medium": Aug 9, 2022;
   * "Short": 8/9/22
   */
  dateStyle?: 'full' | 'long' | 'medium' | 'short';
  /** An ISO 8601 formatted date string to apply to the inner time element's datetime attribute. */
  datetime: string;
  /** Flag indicating whether the timestamp has a tooltip to display the UTC time.
   * To render a tooltip with custom content, pass in the tooltipContent prop instead.
   */
  hasUTCTooltip?: boolean;
  /** Flag for displaying the time in a 12 hour format (true) or a 24 hour format (false),
   * when not passing in custom content.
   *
   * If this prop is not passed in, the hour format will be based on the locale
   * that is passed in, or the current locale otherwise.
   */
  is12Hour?: boolean;
  /** Determines which locale to use in the displayed date when not passing in custom content. Undefined defaults
   * to the current locale.
   * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
   * for more information.
   */
  locale?: string;
  /** Determines the format of the displayed time when not passing in custom content. Examples:
   * "Full": 11:25:00 AM Eastern Daylight Time
   * "Long": 11:25:00 AM EDT
   * "Medium": 11:25:00 AM
   * "Short": 11:25 AM
   */
  timeStyle?: 'full' | 'long' | 'medium' | 'short';
  /** Applies a custom suffix to the displayed time when not passing in custom content. This prop
   * should only be passed in when the timeStyle prop has a value of "medium" or "short".
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
  customStyle,
  date: dateProp = new Date(),
  dateStyle,
  datetime,
  hasUTCTooltip,
  is12Hour,
  locale = undefined,
  timeStyle,
  timeZoneSuffix = '',
  tooltipContent,
  tooltipProps,
  utcSuffix = 'UTC',
  ...props
}: TimestampProps) => {
  const styleOptions = {
    ...(dateStyle && !customStyle && { dateStyle }),
    ...(customStyle && { ...customStyle }),
    ...(is12Hour !== undefined && { hour12: is12Hour })
  };
  const hasTimeStyle = timeStyle && !customStyle;

  const dateAsLocaleString = new Date(dateProp).toLocaleString(locale, {
    ...styleOptions,
    ...(hasTimeStyle && { timeStyle })
  });

  const utcTimeStyle = timeStyle !== 'short' ? 'medium' : 'short';
  const convertToUTCString = (date: Date) => new Date(date).toUTCString().slice(0, -3);
  const utcDateString = new Date(convertToUTCString(dateProp)).toLocaleString(locale, {
    ...styleOptions,
    ...(hasTimeStyle && { timeStyle: utcTimeStyle })
  });

  const timestampContent = (
    <span className={css(className)} {...props}>
      <time dateTime={datetime}>{!children ? `${dateAsLocaleString} ${timeZoneSuffix}` : children}</time>
    </span>
  );

  return hasUTCTooltip || tooltipContent ? (
    <Tooltip content={tooltipContent || `${utcDateString} ${utcSuffix}`} {...tooltipProps}>
      {timestampContent}
    </Tooltip>
  ) : (
    timestampContent
  );
};
Timestamp.displayName = 'Timestamp';
