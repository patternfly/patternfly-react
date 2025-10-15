// eslint-disable-next-line no-restricted-imports
import React, { Fragment, useState } from 'react';
import {
  ActionList,
  ActionListItem,
  Button,
  Page,
  PageSection,
  Tabs,
  Tab,
  TabsComponent,
  TabTitleText,
  DropdownItem,
  Dropdown,
  MenuToggle,
  Avatar,
  DropdownList,
  MenuToggleElement,
  ToolbarGroup,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Title,
  SearchInput,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  ToggleGroupItem,
  ToggleGroup,
  Gallery,
  // Pagination,
  Flex,
  FlexItem
} from '@patternfly/react-core';
// import { MessageBar } from '@patternfly/chatbot';
// import { ActionsColumn } from '@patternfly/react-table';
// import { DataViewTable } from '@patternfly/react-data-view/dist/dynamic/DataViewTable';
// import { DataViewToolbar } from '@patternfly/react-data-view/dist/dynamic/DataViewToolbar';
// import { DataViewFilters } from '@patternfly/react-data-view/dist/dynamic/DataViewFilters';
// import { DataViewTextFilter } from '@patternfly/react-data-view/dist/dynamic/DataViewTextFilter';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import imgAvatar from '../../assets/avatarImg.svg';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import ListIcon from '@patternfly/react-icons/dist/esm/icons/list-icon';
import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';

export const Compass: React.FunctionComponent = () => {
  const [activeSection, setActiveSection] = useState(4);
  const [activeSubsection, setActiveSubsection] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [integrationTableDisplay, setIntegrationTableDisplay] = useState(false);

  const onDropdownSelect = (
    _event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    _value: string | number | undefined
  ) => {
    setIsDropdownOpen(false);
  };

  const onDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTabClick = (
    _event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveSection(tabIndex as number);
  };

  const handleSubsectionClick = (
    _event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveSubsection(tabIndex as number);
  };

  const userDropdownItems = (
    <>
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user">User management</DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </>
  );

  const userDropdown = (
    <Dropdown
      isOpen={isDropdownOpen}
      onSelect={onDropdownSelect}
      onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
      popperProps={{ position: 'right' }}
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle
          ref={toggleRef}
          onClick={onDropdownToggle}
          isExpanded={isDropdownOpen}
          icon={<Avatar src={imgAvatar} alt="" size="sm" />}
        >
          Ned Username
        </MenuToggle>
      )}
    >
      <DropdownList>{userDropdownItems}</DropdownList>
    </Dropdown>
  );

  const compassAutomations = (
    <Fragment>
      <Page id="pf-compass-center" className="pf-m-no-sidebar">
        <PageSection>Title section: Automations</PageSection>
        <PageSection>Content section</PageSection>
      </Page>
    </Fragment>
  );

  const integrations = [
    {
      id: 1,
      name: 'Ansible Automation Platform',
      description:
        'Ansible Automation Platform is an entrprise framework for building and operating IT automation at scale.',
      status: 'Connected',
      type: 'MCP Server',
      url: 'ansible.example.com'
    },
    {
      id: 2,
      name: 'Github',
      description: 'Github is a code hosting platform for version control and collaboration. ',
      status: 'Disconnected',
      type: 'Version Control',
      url: 'github.example.com'
    },
    {
      id: 3,
      name: 'Kubernetes Cluster',
      description: 'A Kubernetes cluster is a set of node machines for running containerized applications.',
      status: 'Connected',
      type: 'MCP Server',
      url: 'k8s.example.com'
    }
  ];

  // const rowActions = [
  //   {
  //     title: 'Some action',
  //     onClick: () => console.log('clicked on Some action') // eslint-disable-line no-console
  //   },
  //   {
  //     title: <div>Another action</div>,
  //     onClick: () => console.log('clicked on Another action') // eslint-disable-line no-console
  //   },
  //   {
  //     isSeparator: true
  //   },
  //   {
  //     title: 'Third action',
  //     onClick: () => console.log('clicked on Third action') // eslint-disable-line no-console
  //   }
  // ];

  // const rows = integrations.map(({ name, type }) => [
  //   name,
  //   type,
  //   { cell: <ActionsColumn items={rowActions} />, props: { isActionCell: true } }
  // ]);

  // const columns = ['Name', 'Type'];

  const cardIntegration = (
    <>
      <Toolbar>
        <ToolbarContent>
          <ToolbarGroup>
            <ToolbarItem>
              <SearchInput aria-label="Integrations example search input" />
            </ToolbarItem>
          </ToolbarGroup>
          <ToggleGroup>
            <ToggleGroupItem
              icon={<ThIcon />}
              aria-label="grid icon button"
              isSelected={!integrationTableDisplay}
              onChange={() => setIntegrationTableDisplay(false)}
            ></ToggleGroupItem>
            <ToggleGroupItem
              icon={<ListIcon />}
              aria-label="list icon button"
              isSelected={integrationTableDisplay}
              onChange={() => setIntegrationTableDisplay(true)}
            ></ToggleGroupItem>
          </ToggleGroup>
        </ToolbarContent>
      </Toolbar>
      <Gallery hasGutter aria-label="Selectable card container">
        {integrations.map((product) => (
          <Card isCompact key={product.name} id={product.name.replace(/ /g, '-')}>
            <CardHeader
              actions={{
                actions: (
                  <>
                    <Dropdown
                      isOpen={false}
                      onOpenChange={() => {}}
                      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                        <MenuToggle
                          ref={toggleRef}
                          aria-label={`${product.name} actions`}
                          variant="plain"
                          icon={<EllipsisVIcon />}
                        />
                      )}
                      popperProps={{ position: 'right' }}
                    />
                  </>
                )
              }}
            >
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardBody>{product.description}</CardBody>
          </Card>
        ))}
      </Gallery>
    </>
  );
  const dataViewIntegration = (
    <>
      {/* <DataViewToolbar
        clearAllFilters={() => {}}
        filters={
          <DataViewFilters onChange={() => {}} values={{}}>
            <DataViewTextFilter filterId="name" title="Name" placeholder="Filter by name" />
            <DataViewTextFilter filterId="branch" title="Branch" placeholder="Filter by branch" />
          </DataViewFilters>
        }
        actions={
          <ToggleGroup>
            <ToggleGroupItem
              icon={<ThIcon />}
              aria-label="grid icon button"
              isSelected={!integrationTableDisplay}
              onChange={() => setIntegrationTableDisplay(true)}
            ></ToggleGroupItem>
            <ToggleGroupItem
              icon={<ListIcon />}
              aria-label="list icon button"
              isSelected={integrationTableDisplay}
              onChange={() => setIntegrationTableDisplay(false)}
            ></ToggleGroupItem>
          </ToggleGroup>
        }
        pagination={<Pagination page={1} perPage={10} isCompact />}
      /> */}
      {/* <DataViewTable aria-label="Integrations table" columns={columns} rows={rows} /> */}
    </>
  );

  const compassIntegrations = (
    <Fragment>
      <Page id="pf-compass-center" className="pf-m-no-sidebar pf-m-plain" isContentFilled>
        <PageSection>
          <Flex alignItems={{ default: 'alignItemsCenter' }}>
            <FlexItem grow={{ default: 'grow' }}>
              <Title headingLevel="h1">Integrations</Title>
            </FlexItem>
            <FlexItem>
              <Toolbar hasNoPadding>
                <ToolbarContent>
                  <ToolbarGroup>
                    <ToolbarItem>
                      <Button variant="primary">Add integration</Button>
                    </ToolbarItem>
                  </ToolbarGroup>
                  <ToolbarGroup>
                    <ToolbarItem>
                      <Button icon={<EllipsisVIcon />} variant="plain" />
                    </ToolbarItem>
                  </ToolbarGroup>
                </ToolbarContent>
              </Toolbar>
            </FlexItem>
          </Flex>
        </PageSection>
        <PageSection>
          {integrationTableDisplay && dataViewIntegration}
          {!integrationTableDisplay && cardIntegration}
        </PageSection>
      </Page>
    </Fragment>
  );

  return (
    <div id="pf-compass" className="compass">
      <div id="pf-compass__north" className="compass__header">
        <div id="brand-logo">
          <svg width="192" height="39" viewBox="0 0 192 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M33.3807 22.9001C36.6672 22.9001 41.4287 22.2167 41.4287 18.2926C41.4287 17.9865 41.4209 17.6883 41.3472 17.3901L39.3885 8.85069C38.9336 6.97444 38.5392 6.11944 35.2501 4.47014C32.7023 3.16125 27.1468 1 25.5035 1C23.9733 1 23.5211 2.98972 21.7069 2.98972C19.8927 2.98972 18.6465 1.51194 17.0032 1.51194C15.3599 1.51194 14.395 2.59389 13.6036 4.81056C13.6036 4.81056 11.3924 11.0674 11.1085 11.9778C11.0506 12.1493 11.0506 12.3393 11.0506 12.4897C11.0506 14.9228 20.5921 22.9001 33.3833 22.9001M41.9414 19.8839C42.3963 22.0451 42.3963 22.2721 42.3963 22.5571C42.3963 26.2542 38.2579 28.3019 32.818 28.3019C20.5185 28.3019 9.74918 21.0767 9.74918 16.3003C9.74918 15.5614 9.92008 14.8779 10.1462 14.366C5.72383 14.5929 0 15.3899 0 20.4539C0 28.7585 19.6114 39 35.1396 39C47.0421 39 50.0447 33.5956 50.0447 29.3285C50.0447 25.9718 47.1552 22.1612 41.9388 19.8839"
              fill="#EE0000"
            />
            <path
              d="M41.9386 19.8864C42.3935 22.0477 42.3935 22.2746 42.3935 22.5596C42.3935 26.2567 38.255 28.3045 32.8152 28.3045C20.5157 28.3045 9.74634 21.0792 9.74634 16.3028C9.74634 15.5639 9.91724 14.8804 10.1434 14.3685L11.1083 11.9777C11.0504 12.1492 11.0504 12.3392 11.0504 12.4896C11.0504 14.9227 20.5919 22.9 33.3831 22.9C36.6696 22.9 41.4312 22.2165 41.4312 18.2925C41.4312 17.9864 41.4233 17.6882 41.3496 17.39L41.9412 19.8864H41.9386Z"
              fill="black"
            />
            <path
              d="M75.764 16V1.29995H82.295C83.261 1.29995 84.115 1.48895 84.857 1.86695C85.599 2.24495 86.173 2.76995 86.579 3.44195C86.999 4.09995 87.209 4.86995 87.209 5.75195C87.209 6.70395 86.943 7.53695 86.411 8.25095C85.893 8.95095 85.186 9.46195 84.29 9.78395L87.398 16H84.605L81.77 10.12H78.284V16H75.764ZM78.284 8.10395H82.064C82.848 8.10395 83.478 7.89395 83.954 7.47395C84.43 7.03995 84.668 6.47295 84.668 5.77295C84.668 5.05895 84.43 4.49195 83.954 4.07195C83.478 3.63795 82.848 3.42095 82.064 3.42095H78.284V8.10395Z"
              fill="white"
            />
            <path
              d="M93.9392 16.21C92.9312 16.21 92.0212 15.972 91.2092 15.496C90.3972 15.006 89.7532 14.3549 89.2772 13.5429C88.8012 12.7169 88.5632 11.7859 88.5632 10.75C88.5632 9.71395 88.7872 8.78995 89.2352 7.97795C89.6832 7.16595 90.2922 6.52195 91.0622 6.04595C91.8462 5.55595 92.7142 5.31095 93.6662 5.31095C94.6462 5.31095 95.5072 5.54895 96.2492 6.02495C97.0052 6.50095 97.5932 7.14495 98.0132 7.95695C98.4472 8.76895 98.6642 9.69995 98.6642 10.75V11.3169H90.8942C90.9782 11.8909 91.1602 12.4019 91.4402 12.8499C91.7342 13.2839 92.1052 13.627 92.5532 13.879C93.0152 14.1309 93.5122 14.257 94.0442 14.257C94.5342 14.257 94.9962 14.173 95.4302 14.005C95.8782 13.823 96.2492 13.578 96.5432 13.2699L98.0972 14.677C97.4532 15.209 96.7952 15.601 96.1232 15.853C95.4652 16.091 94.7372 16.21 93.9392 16.21ZM90.9152 9.84695H96.4172C96.3332 9.34295 96.1582 8.89495 95.8922 8.50295C95.6402 8.11095 95.3182 7.80295 94.9262 7.57895C94.5482 7.35495 94.1282 7.24295 93.6662 7.24295C93.2042 7.24295 92.7772 7.35495 92.3852 7.57895C92.0072 7.78895 91.6922 8.08995 91.4402 8.48195C91.1882 8.87395 91.0132 9.32895 90.9152 9.84695Z"
              fill="white"
            />
            <path
              d="M105.388 16.1049C104.506 16.1049 103.708 15.867 102.994 15.391C102.28 14.901 101.706 14.257 101.272 13.459C100.852 12.6469 100.642 11.7439 100.642 10.75C100.642 9.74195 100.859 8.83895 101.293 8.04095C101.727 7.22895 102.315 6.58495 103.057 6.10895C103.813 5.63295 104.646 5.39495 105.556 5.39495C106.158 5.39495 106.718 5.51395 107.236 5.75195C107.768 5.97595 108.23 6.31195 108.622 6.75995V0.94295L110.995 0.522949V16H108.643V14.6139C108.265 15.0899 107.796 15.461 107.236 15.727C106.676 15.979 106.06 16.1049 105.388 16.1049ZM106.123 14.11C106.627 14.11 107.096 14.012 107.53 13.816C107.964 13.606 108.328 13.319 108.622 12.955V8.52395C108.314 8.15995 107.943 7.87995 107.509 7.68395C107.075 7.48795 106.613 7.38995 106.123 7.38995C105.521 7.38995 104.982 7.53695 104.506 7.83095C104.044 8.11095 103.673 8.50295 103.393 9.00695C103.113 9.51095 102.973 10.092 102.973 10.75C102.973 11.38 103.113 11.9539 103.393 12.4719C103.673 12.976 104.044 13.375 104.506 13.669C104.982 13.9629 105.521 14.11 106.123 14.11Z"
              fill="white"
            />
            <path
              d="M118.848 16V1.29995H121.368V7.47395H128.676V1.29995H131.196V16H128.676V9.72095H121.368V16H118.848Z"
              fill="white"
            />
            <path
              d="M137.314 16.189C136.586 16.189 135.935 16.056 135.361 15.79C134.801 15.51 134.36 15.132 134.038 14.656C133.73 14.166 133.576 13.606 133.576 12.976C133.576 12.346 133.737 11.7999 134.059 11.3379C134.395 10.8759 134.864 10.519 135.466 10.267C136.068 10.015 136.782 9.88895 137.608 9.88895C138.098 9.88895 138.581 9.94495 139.057 10.0569C139.533 10.1549 139.995 10.323 140.443 10.561V9.38495C140.443 8.68495 140.24 8.15995 139.834 7.80995C139.442 7.45995 138.84 7.28495 138.028 7.28495C137.594 7.28495 137.125 7.35495 136.621 7.49495C136.131 7.62095 135.578 7.82395 134.962 8.10395L134.122 6.38195C135.662 5.66795 137.118 5.31095 138.49 5.31095C139.862 5.31095 140.919 5.64695 141.661 6.31895C142.417 6.97695 142.795 7.91495 142.795 9.13295V16H140.443V14.908C139.995 15.342 139.512 15.6639 138.994 15.874C138.476 16.084 137.916 16.189 137.314 16.189ZM135.802 12.934C135.802 13.424 135.998 13.809 136.39 14.089C136.782 14.3689 137.307 14.509 137.965 14.509C138.441 14.509 138.882 14.439 139.288 14.299C139.708 14.1449 140.093 13.9209 140.443 13.627V11.926C140.079 11.7579 139.701 11.6319 139.309 11.5479C138.917 11.464 138.49 11.422 138.028 11.422C137.342 11.422 136.796 11.5549 136.39 11.8209C135.998 12.0869 135.802 12.458 135.802 12.934Z"
              fill="white"
            />
            <path
              d="M149.897 16.21C148.833 16.21 148.028 15.9649 147.482 15.4749C146.936 14.971 146.663 14.236 146.663 13.2699V7.36895H144.563V5.47895H146.663V2.58095L149.036 2.07695V5.47895H151.955V7.36895H149.036V12.745C149.036 13.2629 149.148 13.634 149.372 13.858C149.596 14.068 149.974 14.1729 150.506 14.1729C150.744 14.1729 150.961 14.1589 151.157 14.1309C151.367 14.089 151.626 14.0189 151.934 13.9209V15.9159C151.64 16.0139 151.304 16.084 150.926 16.1259C150.562 16.1819 150.219 16.21 149.897 16.21Z"
              fill="white"
            />
            <path
              d="M73.916 38L79.964 23.2999H83.471L89.456 38H86.159L84.668 34.1359H78.599L77.087 38H73.916ZM79.544 31.6999H83.744L81.644 26.2819L79.544 31.6999Z"
              fill="white"
            />
            <path
              d="M94.4493 38.2099C93.6093 38.2099 92.8603 38.028 92.2023 37.664C91.5583 37.286 91.0473 36.768 90.6693 36.11C90.3053 35.452 90.1233 34.6959 90.1233 33.8419V27.059H93.0003V33.422C93.0003 34.122 93.2033 34.682 93.6093 35.102C94.0293 35.522 94.5823 35.7319 95.2683 35.7319C96.2483 35.7319 97.0043 35.368 97.5363 34.6399V27.059H100.413V38H97.5363V37.118C96.6963 37.846 95.6673 38.2099 94.4493 38.2099Z"
              fill="white"
            />
            <path
              d="M107.842 38.1679C106.625 38.1679 105.7 37.895 105.07 37.3489C104.454 36.7889 104.146 35.9769 104.146 34.9129V29.4529H101.899V27.059H104.146V24.2659L107.024 23.6149V27.059H110.153V29.4529H107.024V34.325C107.024 34.829 107.136 35.193 107.36 35.417C107.583 35.6269 107.975 35.7319 108.535 35.7319C108.815 35.7319 109.068 35.7179 109.292 35.6899C109.529 35.6479 109.789 35.5779 110.069 35.4799V37.853C109.775 37.951 109.404 38.028 108.956 38.084C108.522 38.1399 108.15 38.1679 107.842 38.1679Z"
              fill="white"
            />
            <path
              d="M116.767 38.2099C115.675 38.2099 114.688 37.958 113.806 37.4539C112.924 36.9499 112.224 36.271 111.706 35.417C111.188 34.563 110.929 33.604 110.929 32.54C110.929 31.476 111.188 30.517 111.706 29.663C112.224 28.795 112.924 28.1089 113.806 27.6049C114.688 27.101 115.675 26.8489 116.767 26.8489C117.859 26.8489 118.846 27.101 119.728 27.6049C120.61 28.1089 121.31 28.795 121.828 29.663C122.346 30.517 122.605 31.476 122.605 32.54C122.605 33.604 122.346 34.563 121.828 35.417C121.31 36.271 120.61 36.9499 119.728 37.4539C118.846 37.958 117.859 38.2099 116.767 38.2099ZM116.767 35.7109C117.341 35.7109 117.852 35.5709 118.3 35.291C118.762 35.011 119.126 34.6329 119.392 34.1569C119.672 33.6669 119.812 33.128 119.812 32.54C119.812 31.938 119.672 31.399 119.392 30.923C119.126 30.447 118.762 30.069 118.3 29.7889C117.852 29.4949 117.341 29.3479 116.767 29.3479C116.207 29.3479 115.696 29.4949 115.234 29.7889C114.772 30.069 114.408 30.447 114.142 30.923C113.876 31.399 113.743 31.938 113.743 32.54C113.743 33.128 113.876 33.6669 114.142 34.1569C114.408 34.6329 114.772 35.011 115.234 35.291C115.696 35.5709 116.207 35.7109 116.767 35.7109Z"
              fill="white"
            />
            <path
              d="M124.373 38V27.059H127.25V27.8989C128.034 27.1989 128.986 26.8489 130.106 26.8489C130.82 26.8489 131.457 26.996 132.017 27.2899C132.577 27.57 133.039 27.969 133.403 28.4869C134.313 27.3949 135.517 26.8489 137.015 26.8489C137.841 26.8489 138.562 27.038 139.178 27.416C139.808 27.78 140.298 28.291 140.648 28.9489C141.012 29.5929 141.194 30.3489 141.194 31.2169V38H138.338V31.6369C138.338 30.9229 138.149 30.3629 137.771 29.9569C137.393 29.5369 136.889 29.327 136.259 29.327C135.377 29.327 134.677 29.6909 134.159 30.4189C134.173 30.5449 134.187 30.6709 134.201 30.7969C134.215 30.9229 134.222 31.063 134.222 31.2169V38H131.345V31.6369C131.345 30.9229 131.156 30.3629 130.778 29.9569C130.414 29.5369 129.917 29.327 129.287 29.327C128.405 29.327 127.726 29.6629 127.25 30.3349V38H124.373Z"
              fill="white"
            />
            <path
              d="M146.87 38.1889C146.086 38.1889 145.393 38.049 144.791 37.769C144.189 37.475 143.72 37.076 143.384 36.5719C143.048 36.0679 142.88 35.4869 142.88 34.8289C142.88 33.7789 143.272 32.9669 144.056 32.393C144.854 31.805 145.946 31.511 147.332 31.511C148.284 31.511 149.18 31.6579 150.02 31.952V31.1539C150.02 29.8799 149.25 29.243 147.71 29.243C147.248 29.243 146.751 29.32 146.219 29.4739C145.687 29.6139 145.071 29.8379 144.371 30.146L143.321 28.025C144.189 27.6329 145.015 27.3389 145.799 27.143C146.597 26.947 147.395 26.8489 148.193 26.8489C149.663 26.8489 150.804 27.2059 151.616 27.92C152.442 28.62 152.855 29.6139 152.855 30.9019V38H150.02V37.2229C149.572 37.5589 149.089 37.804 148.571 37.958C148.053 38.1119 147.486 38.1889 146.87 38.1889ZM145.61 34.7659C145.61 35.186 145.792 35.5219 146.156 35.7739C146.52 36.0119 147.003 36.131 147.605 36.131C148.571 36.131 149.376 35.893 150.02 35.417V33.8209C149.32 33.541 148.55 33.401 147.71 33.401C147.052 33.401 146.534 33.527 146.156 33.7789C145.792 34.0169 145.61 34.346 145.61 34.7659Z"
              fill="white"
            />
            <path
              d="M159.912 38.1679C158.694 38.1679 157.77 37.895 157.14 37.3489C156.524 36.7889 156.216 35.9769 156.216 34.9129V29.4529H153.969V27.059H156.216V24.2659L159.093 23.6149V27.059H162.222V29.4529H159.093V34.325C159.093 34.829 159.205 35.193 159.429 35.417C159.653 35.6269 160.045 35.7319 160.605 35.7319C160.885 35.7319 161.137 35.7179 161.361 35.6899C161.599 35.6479 161.858 35.5779 162.138 35.4799V37.853C161.844 37.951 161.473 38.028 161.025 38.084C160.591 38.1399 160.22 38.1679 159.912 38.1679Z"
              fill="white"
            />
            <path
              d="M163.625 38V27.059H166.502V38H163.625ZM165.053 25.757C164.605 25.757 164.22 25.596 163.898 25.274C163.576 24.952 163.415 24.5669 163.415 24.1189C163.415 23.6569 163.576 23.2719 163.898 22.9639C164.22 22.6419 164.605 22.4809 165.053 22.4809C165.515 22.4809 165.9 22.6419 166.208 22.9639C166.53 23.2719 166.691 23.6569 166.691 24.1189C166.691 24.5669 166.53 24.952 166.208 25.274C165.9 25.596 165.515 25.757 165.053 25.757Z"
              fill="white"
            />
            <path
              d="M174.086 38.2099C172.994 38.2099 172.007 37.958 171.125 37.4539C170.243 36.9499 169.543 36.271 169.025 35.417C168.507 34.563 168.248 33.604 168.248 32.54C168.248 31.476 168.507 30.517 169.025 29.663C169.543 28.795 170.243 28.1089 171.125 27.6049C172.007 27.101 172.994 26.8489 174.086 26.8489C175.178 26.8489 176.165 27.101 177.047 27.6049C177.929 28.1089 178.629 28.795 179.147 29.663C179.665 30.517 179.924 31.476 179.924 32.54C179.924 33.604 179.665 34.563 179.147 35.417C178.629 36.271 177.929 36.9499 177.047 37.4539C176.165 37.958 175.178 38.2099 174.086 38.2099ZM174.086 35.7109C174.66 35.7109 175.171 35.5709 175.619 35.291C176.081 35.011 176.445 34.6329 176.711 34.1569C176.991 33.6669 177.131 33.128 177.131 32.54C177.131 31.938 176.991 31.399 176.711 30.923C176.445 30.447 176.081 30.069 175.619 29.7889C175.171 29.4949 174.66 29.3479 174.086 29.3479C173.526 29.3479 173.015 29.4949 172.553 29.7889C172.091 30.069 171.727 30.447 171.461 30.923C171.195 31.399 171.062 31.938 171.062 32.54C171.062 33.128 171.195 33.6669 171.461 34.1569C171.727 34.6329 172.091 35.011 172.553 35.291C173.015 35.5709 173.526 35.7109 174.086 35.7109Z"
              fill="white"
            />
            <path
              d="M181.693 38V27.059H184.57V27.962C185.396 27.2199 186.418 26.8489 187.636 26.8489C188.49 26.8489 189.239 27.038 189.883 27.416C190.541 27.78 191.052 28.291 191.416 28.9489C191.78 29.5929 191.962 30.3489 191.962 31.2169V38H189.085V31.6369C189.085 30.9229 188.882 30.3629 188.476 29.9569C188.07 29.5369 187.517 29.327 186.817 29.327C186.327 29.327 185.893 29.425 185.515 29.621C185.137 29.803 184.822 30.0689 184.57 30.4189V38H181.693Z"
              fill="white"
            />
            <line x1="66.5" y1="1.5" x2="66.5" y2="38.5" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
        <div id="navigation" className="compass__nav">
          <Tabs
            activeKey={activeSection}
            onSelect={handleTabClick}
            component={TabsComponent.nav}
            aria-label="Tabs in the nav element example"
          >
            <Tab eventKey={0} title={<TabTitleText>Dashboard</TabTitleText>} isDisabled />
            <Tab eventKey={1} title={<TabTitleText>Builder</TabTitleText>} isDisabled />
            <Tab eventKey={2} title={<TabTitleText>Automations</TabTitleText>} />
            <Tab eventKey={3} title={<TabTitleText>Approvals</TabTitleText>} isDisabled />
            <Tab eventKey={4} title={<TabTitleText>Configuration</TabTitleText>}>
              <Tabs activeKey={activeSubsection} isSubtab onSelect={handleSubsectionClick}>
                <Tab eventKey={0} title={<TabTitleText>Overview</TabTitleText>} isDisabled />
                <Tab eventKey={1} title={<TabTitleText>Integrations</TabTitleText>} />
                <Tab eventKey={2} title={<TabTitleText>Credentials</TabTitleText>} isDisabled />
                <Tab eventKey={3} title={<TabTitleText>Settings</TabTitleText>} isDisabled />
              </Tabs>
            </Tab>
            <Tab eventKey={5} title={<TabTitleText>Support</TabTitleText>} isDisabled />
          </Tabs>
        </div>
        <div id="user-menu" className="compass__user">
          {userDropdown}
        </div>
      </div>
      <div id="pf-compass__west" className="compass__panel--start">
        <ActionList className="pf-m-vertical">
          <ActionListItem>
            <Button variant="plain" icon={<PlayIcon />} />
          </ActionListItem>
          <ActionListItem>
            <Button variant="plain" icon={<OutlinedPlusSquare />} />
          </ActionListItem>
          <ActionListItem>
            <Button variant="plain" icon={<OutlinedQuestionCircleIcon />} />
          </ActionListItem>
          <ActionListItem>
            <Button variant="plain" icon={<OutlinedCopy />} />
          </ActionListItem>
        </ActionList>
      </div>
      <div id="pf-compass__main" className="compass__main">
        {activeSection === 4 && activeSubsection === 1 ? compassIntegrations : compassAutomations}
      </div>
      <div id="pf-compass__east" className="compass__panel--end">
        <ActionList className="pf-m-vertical">
          <ActionListItem>
            <Button variant="plain" icon={<OutlinedQuestionCircleIcon />} />
          </ActionListItem>
          <ActionListItem>
            <Button variant="plain" icon={<OutlinedPlusSquare />} />
          </ActionListItem>
          <ActionListItem>
            <Button variant="plain" icon={<OutlinedQuestionCircleIcon />} />
          </ActionListItem>
        </ActionList>
      </div>
      <div id="pf-compass__south" className="compass__footer">
        {/* <MessageBar isCompact onSendMessage={() => {}} hasAttachButton={false} /> */}
      </div>
    </div>
  );
};
