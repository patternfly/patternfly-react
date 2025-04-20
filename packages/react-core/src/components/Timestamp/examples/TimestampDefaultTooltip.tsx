import { Timestamp, TimestampTooltipVariant } from '@patternfly/react-core';

export const TimestampDefaultTooltip: React.FunctionComponent = () => {
  const currentDate = new Date('2025-04-21T14:30:00');

  return (
    <>
      <Timestamp date={currentDate} tooltip={{ variant: TimestampTooltipVariant.default }} />
      <br />
      <br />
      <Timestamp
        date={currentDate}
        tooltip={{ variant: TimestampTooltipVariant.default, suffix: 'Coordinated Universal Time (UTC)' }}
      />
    </>
  );
};
