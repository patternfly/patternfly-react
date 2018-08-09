import React from 'react';
import { action } from '@storybook/addon-actions';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import { Notification } from '../index';
import { NotificationDrawer } from '../NotificationDrawer/index';
import { Icon } from '../../Icon';
import { MenuItem } from '../../MenuItem';
import { Button } from '../../Button';

const handleClick = e => {
  e.preventDefault();
  action('some on click')();
};
const basicNotificationDrawerStory = stories => {
  stories.addWithInfo('Notification Drawer', '', () => {
    const story = (
      <nav className="navbar navbar-pf-vertical">
        <nav className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right navbar-iconic">
            <NotificationDrawer.Toggle hasUnreadMessages onClick={handleClick} />
          </ul>
        </nav>
        <NotificationDrawer>
          <NotificationDrawer.Title id="1" title="Notifications" />
          <NotificationDrawer.Accordion>
            <NotificationDrawer.Panel expanded>
              <NotificationDrawer.PanelHeading>
                <NotificationDrawer.PanelTitle>
                  <a onClick={handleClick} aria-expanded="true">
                    Notification Tab 1
                  </a>
                </NotificationDrawer.PanelTitle>
                <NotificationDrawer.PanelCounter text="3 Unread Events" />
              </NotificationDrawer.PanelHeading>
              <NotificationDrawer.PanelCollapse id="fixedCollapseOne" collapseIn>
                <NotificationDrawer.PanelBody>
                  <Notification seen>
                    <NotificationDrawer.Dropdown pullRight id="Dropdown1">
                      <MenuItem key="1" eventKey="1" active>
                        Action
                      </MenuItem>
                      <MenuItem key="2" eventKey="2">
                        Another Action
                      </MenuItem>
                      <MenuItem key="3" eventKey="3">
                        Delete
                      </MenuItem>
                    </NotificationDrawer.Dropdown>
                    <Icon className="pull-left" type="pf" name="info" />
                    <Notification.Content>
                      <Notification.Message>Info Notification</Notification.Message>
                      <Notification.Info leftText="3/31/16" rightText="12:12:44 PM" />
                    </Notification.Content>
                  </Notification>
                  <Notification seen={false}>
                    <NotificationDrawer.Dropdown pullRight id="Dropdown1">
                      <MenuItem key="1" eventKey="1" active>
                        Action
                      </MenuItem>
                      <MenuItem key="2" eventKey="2">
                        Another Action
                      </MenuItem>
                      <MenuItem key="3" eventKey="3">
                        Delete
                      </MenuItem>
                    </NotificationDrawer.Dropdown>
                    <Icon className="pull-left" type="pf" name="ok" />
                    <Notification.Content>
                      <Notification.Message>Unread Notification</Notification.Message>
                      <Notification.Info leftText="3/31/16" rightText="12:12:44 PM" />
                    </Notification.Content>
                  </Notification>
                  <Notification>
                    <NotificationDrawer.Dropdown pullRight id="DropDown2">
                      <MenuItem key="1" eventKey="1" active>
                        Action
                      </MenuItem>
                      <MenuItem key="2" eventKey="2">
                        Another Action
                      </MenuItem>
                      <MenuItem key="3" eventKey="3">
                        Delete
                      </MenuItem>
                    </NotificationDrawer.Dropdown>
                    <Icon className="pull-left" type="pf" name="warning-triangle-o" />
                    <Notification.Content>
                      <Notification.Message>
                        Another Event Notification that is really long to see how it reacts on smaller screens sizes.
                      </Notification.Message>
                      <Notification.Info leftText="3/31/16" rightText="12:12:44 PM" />
                    </Notification.Content>
                  </Notification>
                  <Notification>
                    <NotificationDrawer.Dropdown pullRight id="Dropdown3">
                      <MenuItem key="1" eventKey="1" active>
                        Action
                      </MenuItem>
                      <MenuItem key="2" eventKey="2">
                        Another Action
                      </MenuItem>
                      <MenuItem key="3" eventKey="3">
                        Delete
                      </MenuItem>
                    </NotificationDrawer.Dropdown>
                    <Icon className="pull-left" type="pf" name="error-circle-o" />
                    <Notification.Content>
                      <Notification.Message>Error Notification</Notification.Message>
                      <Notification.Info leftText="3/31/16" rightText="12:12:44 PM" />
                    </Notification.Content>
                  </Notification>
                </NotificationDrawer.PanelBody>
                <NotificationDrawer.PanelAction>
                  <NotificationDrawer.PanelActionLink className="drawer-pf-action-link" data-toggle="mark-all-read">
                    <Button bsStyle="link">Mark All Read</Button>
                  </NotificationDrawer.PanelActionLink>
                  <NotificationDrawer.PanelActionLink data-toggle="clear-all">
                    <Button bsStyle="link">
                      <Icon type="pf" name="close" />
                      Clear All
                    </Button>
                  </NotificationDrawer.PanelActionLink>
                </NotificationDrawer.PanelAction>
              </NotificationDrawer.PanelCollapse>
            </NotificationDrawer.Panel>
            <NotificationDrawer.Panel>
              <NotificationDrawer.PanelHeading>
                <NotificationDrawer.PanelTitle>
                  <a onClick={handleClick} aria-expanded="false" className="collapsed">
                    Notification Tab 2
                  </a>
                </NotificationDrawer.PanelTitle>
                <NotificationDrawer.PanelCounter text="1 Unread Event" />
              </NotificationDrawer.PanelHeading>
            </NotificationDrawer.Panel>
          </NotificationDrawer.Accordion>
        </NotificationDrawer>
      </nav>
    );
    return inlineTemplate({
      title: 'Notification Drawer',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION}notification-drawer`,
      story
    });
  });
};

export default basicNotificationDrawerStory;
