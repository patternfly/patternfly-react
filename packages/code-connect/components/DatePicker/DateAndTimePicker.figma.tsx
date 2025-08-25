import figma from '@figma/code-connect';
import {
  Button,
  CalendarMonth,
  Dropdown,
  DropdownItem,
  DropdownList,
  InputGroup,
  InputGroupItem,
  MenuToggle,
  Popover,
  TextInput,
  TimePicker
} from '@patternfly/react-core';
import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/outlined-calendar-alt-icon';
import OutlinedClockIcon from '@patternfly/react-icons/dist/esm/icons/outlined-clock-icon';

// Documentation for TimePicker can be found at https://www.patternfly.org/components/time-picker

const sharedProps = {
  time: (
    <Dropdown
      onSelect={() => {}}
      isOpen={false}
      onOpenChange={() => {}}
      toggle={(toggleRef) => (
        <MenuToggle
          ref={toggleRef}
          onClick={() => {}}
          isExpanded={false}
          aria-label="Time picker"
          icon={<OutlinedClockIcon />}
        />
      )}
    >
      <DropdownList>
        <DropdownItem value={0} key="action">
          Action
        </DropdownItem>
        <DropdownItem value={1} key="operation">
          Operation
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  ),
  calendarButton: (
    <Button variant="control" aria-label="Toggle the calendar" onClick={() => {}} icon={<OutlinedCalendarAltIcon />} />
  ),
  calendar: <CalendarMonth date={new Date('2025-06-16')} onChange={() => {}} onMonthChange={() => {}} />
};

figma.connect(
  TimePicker,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958-136824',
  {
    props: {
      ...sharedProps,
      valueDate: 'MM-DD-YYYY',
      valueTime: 'HH:MM'
    },
    example: (props) => {
      const calendarButton = props.calendarButton;
      const calendar = props.calendar;
      const time = props.time;

      return (
        <div style={{ width: '300px' }}>
          <Popover
            position="bottom"
            bodyContent={calendar}
            showClose={false}
            isVisible={false}
            hasNoPadding
            hasAutoWidth
          >
            <InputGroup>
              <InputGroupItem>
                <TextInput
                  type="text"
                  id="date-time"
                  aria-label="date and time picker demo"
                  value={props.valueDate + ' ' + props.valueTime}
                  readOnlyVariant="default"
                />
              </InputGroupItem>
              <InputGroupItem>{calendarButton}</InputGroupItem>
              <InputGroupItem>{time}</InputGroupItem>
            </InputGroup>
          </Popover>
        </div>
      );
    }
  }
);
