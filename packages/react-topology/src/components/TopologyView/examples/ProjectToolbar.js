import React from 'react';
import { Dropdown } from '@patternfly/react-core/dist/js/components/Dropdown/Dropdown';
import { DropdownItem } from '@patternfly/react-core/dist/js/components/Dropdown/DropdownItem';
import { DropdownToggle } from '@patternfly/react-core/dist/js/components/Dropdown/DropdownToggle';
import { DropdownPosition } from '@patternfly/react-core/dist/js/components/Dropdown/dropdownConstants';
import { Stack } from '@patternfly/react-core/dist/js/layouts/Stack/Stack';
import { StackItem } from '@patternfly/react-core/dist/js/layouts/Stack/StackItem';
import { Toolbar } from '@patternfly/react-core/dist/js/layouts/Toolbar/Toolbar';
import { ToolbarGroup } from '@patternfly/react-core/dist/js/layouts/Toolbar/ToolbarGroup';
import { ToolbarItem } from '@patternfly/react-core/dist/js/layouts/Toolbar/ToolbarItem';

const projects = [
  { id: 1, name: 'Project 1' },
  { id: 2, name: 'Project 2' },
  { id: 3, name: 'Project 3' },
  { id: 4, name: 'Project 4' },
  { id: 'all', name: 'All' }
];

const applications = [
  { id: 1, name: 'Application 1' },
  { id: 2, name: 'Application 2' },
  { id: 3, name: 'Application 3' },
  { id: 4, name: 'Application 4' },
  { id: 'all', name: 'All' }
];

export class ProjectToolbar extends React.Component {
  state = {
    selectedProject: projects[4],
    selectedApplication: applications[4],
    projectDropDownOpen: false,
    applicationDropDownOpen: false
  };

  onProjectDropDownToggle = isOpen => {
    this.setState({ projectDropDownOpen: isOpen });
  };

  onProjectSelect = (e, project) => {
    e.preventDefault();
    this.setState({ selectedProject: project, projectDropDownOpen: false });
  };

  onApplicationDropDownToggle = isOpen => {
    this.setState({ applicationDropDownOpen: isOpen });
  };

  onApplicationSelect = (e, application) => {
    e.preventDefault();
    this.setState({ selectedApplication: application, applicationDropDownOpen: false });
  };

  renderProjectDropdown = () => {
    const { projectDropDownOpen, selectedProject } = this.state;

    return (
      <Stack>
        <StackItem>
          <label>Project</label>
        </StackItem>
        <StackItem>
          <Dropdown
            onToggle={this.onProjectDropDownToggle}
            position={DropdownPosition.right}
            toggle={<DropdownToggle onToggle={this.onProjectDropDownToggle}>{selectedProject.name}</DropdownToggle>}
            isOpen={projectDropDownOpen}
            dropdownItems={projects.map(project => (
              <DropdownItem key={project.id} onClick={e => this.onProjectSelect(e, project)}>
                {project.name}
              </DropdownItem>
            ))}
          />
        </StackItem>
      </Stack>
    );
  };

  renderApplicationDropdown = () => {
    const { applicationDropDownOpen, selectedApplication } = this.state;

    return (
      <Stack>
        <StackItem>
          <label>Application</label>
        </StackItem>
        <StackItem>
          <Dropdown
            onToggle={this.onApplicationDropDownToggle}
            position={DropdownPosition.right}
            toggle={
              <DropdownToggle onToggle={this.onApplicationDropDownToggle}>{selectedApplication.name}</DropdownToggle>
            }
            isOpen={applicationDropDownOpen}
            dropdownItems={applications.map(application => (
              <DropdownItem key={application.id} onClick={e => this.onApplicationSelect(e, application)}>
                {application.name}
              </DropdownItem>
            ))}
          />
        </StackItem>
      </Stack>
    );
  };

  render() {
    return (
      <Toolbar className="project-toolbar pf-u-mx-md pf-u-mt-md">
        <ToolbarGroup>
          <ToolbarItem className="pf-u-mr-xl">{this.renderProjectDropdown()}</ToolbarItem>
          <ToolbarItem className="pf-u-mr-md">{this.renderApplicationDropdown()}</ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
