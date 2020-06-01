import React from 'react';
import { ToolbarItem, Dropdown, DropdownItem, DropdownToggle, DropdownPosition } from '@patternfly/react-core';

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
      <React.Fragment>
        <ToolbarItem spacer={{ default: 'spacerSm' }}>
          <label>Project:</label>
        </ToolbarItem>
        <ToolbarItem>
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
        </ToolbarItem>
      </React.Fragment>
    );
  };

  renderApplicationDropdown = () => {
    const { applicationDropDownOpen, selectedApplication } = this.state;

    return (
      <React.Fragment>
        <ToolbarItem spacer={{ default: 'spacerSm' }}>
          <label>Application:</label>
        </ToolbarItem>
        <ToolbarItem>
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
        </ToolbarItem>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.renderProjectDropdown()}
        {this.renderApplicationDropdown()}
      </React.Fragment>
    );
  }
}
