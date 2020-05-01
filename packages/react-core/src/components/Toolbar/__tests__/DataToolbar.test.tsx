import * as React from 'react';
import { mount } from 'enzyme';
import { Toolbar } from '../Toolbar';
import { ToolbarContent } from '../ToolbarContent';
import { ToolbarGroup } from '../ToolbarGroup';
import CloneIcon from '@patternfly/react-icons/dist/js/icons/clone-icon';
import EditIcon from '@patternfly/react-icons/dist/js/icons/edit-icon';
import FilterIcon from '@patternfly/react-icons/dist/js/icons/filter-icon';
import { Button } from '../../../components/Button';
import { ToolbarItem } from '../ToolbarItem';
import { ToolbarFilter } from '../ToolbarFilter';
import { ToolbarToggleGroup } from '../ToolbarToggleGroup';
import { Select, SelectOption, SelectVariant } from '../../../components/Select';

describe('data toolbar', () => {
  test('ToolbarOneContent', () => {
    const view = mount(
      <Toolbar id="toolbar" className="Toolbar-class">
        <ToolbarContent className="ToolbarContent-class" />
      </Toolbar>
    );
    expect(view).toMatchSnapshot();
  });

  test('ToolbarTwoContent', () => {
    const view = mount(
      <Toolbar id="toolbar" className="Toolbar-class">
        <ToolbarContent className="ToolbarContent-class" />
        <ToolbarContent className="ToolbarContent-class" />
      </Toolbar>
    );
    expect(view).toMatchSnapshot();
  });

  test('ToolbarItemsAndGroups', () => {
    const view = mount(
      <Toolbar id="toolbar" className="Toolbar-class">
        <ToolbarContent className="ToolbarContent-class">
          <ToolbarGroup variant="icon-button-group">
            <ToolbarItem>
              <Button variant="plain">
                <EditIcon />
              </Button>
            </ToolbarItem>
            <ToolbarItem>
              <Button variant="plain">
                <CloneIcon />
              </Button>
            </ToolbarItem>
          </ToolbarGroup>
        </ToolbarContent>
      </Toolbar>
    );
    expect(view).toMatchSnapshot();
  });

  test('ToolbarToggleGroup', () => {
    const statusOptions = [{ value: 'Running', disabled: false }, { value: 'Cancelled', disabled: false }];

    const riskOptions = [{ value: 'Low', disabled: false }, { value: 'High', disabled: false }];

    const onStatusToggle = () => {};
    const onRiskToggle = () => {};
    const onStatusSelect = () => {};
    const onRiskSelect = () => {};

    const view = mount(
      <Toolbar id="toolbar" className="Toolbar-class">
        <ToolbarContent className="ToolbarContent-class">
          <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
            <ToolbarGroup variant="filter-group">
              <ToolbarItem>
                <Select
                  variant={SelectVariant.single}
                  aria-label="Select Input"
                  onToggle={onStatusToggle}
                  onSelect={onStatusSelect}
                  selections="Running"
                  isExpanded={false}
                >
                  {statusOptions.map((option, index) => (
                    <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
                  ))}
                </Select>
              </ToolbarItem>
              <ToolbarItem>
                <Select
                  variant={SelectVariant.single}
                  aria-label="Select Input"
                  onToggle={onRiskToggle}
                  onSelect={onRiskSelect}
                  selections="Low"
                  isExpanded={false}
                >
                  {riskOptions.map((option, index) => (
                    <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
                  ))}
                </Select>
              </ToolbarItem>
            </ToolbarGroup>
          </ToolbarToggleGroup>
        </ToolbarContent>
      </Toolbar>
    );
    expect(view).toMatchSnapshot();
  });

  test('ToolbarFilter', () => {
    const filters = {
      risk: ['Low'],
      status: ['New', 'Pending']
    };

    const statusOptions = [{ value: 'Running', disabled: false }, { value: 'Cancelled', disabled: false }];

    const riskOptions = [{ value: 'Low', disabled: false }, { value: 'High', disabled: false }];

    const onStatusToggle = () => {};
    const onRiskToggle = () => {};
    const onStatusSelect = () => {};
    const onRiskSelect = () => {};
    const onDelete = () => {};

    const view = mount(
      <Toolbar id="toolbar" className="Toolbar-class" clearAllFilters={onDelete}>
        <ToolbarContent className="ToolbarContent-class">
          <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
            <ToolbarGroup variant="filter-group">
              <ToolbarFilter chips={filters.status} deleteChip={onDelete} categoryName="Status">
                <Select
                  variant={SelectVariant.single}
                  aria-label="Select Input"
                  onToggle={onStatusToggle}
                  onSelect={onStatusSelect}
                  selections="Running"
                  isExpanded={false}
                >
                  {statusOptions.map((option, index) => (
                    <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
                  ))}
                </Select>
              </ToolbarFilter>
              <ToolbarFilter chips={filters.risk} deleteChip={onDelete} categoryName="Risk">
                <Select
                  variant={SelectVariant.single}
                  aria-label="Select Input"
                  onToggle={onRiskToggle}
                  onSelect={onRiskSelect}
                  selections="Low"
                  isExpanded={false}
                >
                  {riskOptions.map((option, index) => (
                    <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
                  ))}
                </Select>
              </ToolbarFilter>
            </ToolbarGroup>
          </ToolbarToggleGroup>
        </ToolbarContent>
      </Toolbar>
    );
    expect(view).toMatchSnapshot();
  });
});
