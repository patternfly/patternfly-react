import { Tabs } from 'react-bootstrap';
import { default as TabContainer } from './TabContainer';
import { default as TabContent } from './TabContent';
import { default as TabPane } from './TabPane';
import { default as Tab } from './Tab';

Tabs.Tab = Tab;
Tabs.TabContainer = TabContainer;
Tabs.TabContent = TabContent;
Tabs.TabPane = TabPane;

export default Tabs;
