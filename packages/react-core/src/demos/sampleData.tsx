const getRandomInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export interface SampleDataRow {
  name: string;
  threads: number;
  applications: number;
  workspaces: number;
  lastModified: string;
  url: string;
}

export const columns = ['Servers', 'Threads', 'Applications', 'Workspaces', 'Last Modified', 'URL'];

export const rows: SampleDataRow[] = [
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node1'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '5 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node2'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node3'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node4'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '15 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node5'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '4 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node6'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node7'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '8 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node8'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/US-node9'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node10'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '55 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node11'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/US-node12'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node13'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '4 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node14'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node15'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '5 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node16'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '5 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node17'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node18'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node19'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node20'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '15 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node21'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node22'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node23'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '40 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node24'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/US-node25'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node26'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '7 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node1'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '50 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node2'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node3'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node4'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node5'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node6'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '25 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node7'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node8'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '15 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node9'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node10'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node11'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '5 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node12'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '45 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node13'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node14'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node15'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node1'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '15 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node2'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node3'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node4'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node5'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node6'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '45 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node7'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '6 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node8'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '50 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node9'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node10'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node11'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node12'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '5 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node13'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node14'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node15'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node16'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '25 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node17'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node18'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '25 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node1'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node2'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node3'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '50 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node4'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node5'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node6'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '5 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node7'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node8'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node9'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node10'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '40 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node11'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node12'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node13'
  },
  {
    name: 'patternfly-elements',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '4 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node14'
  },
  {
    name: 'patternfly',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node15'
  },
  {
    name: 'patternfly-unified-design-kit',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node16'
  }
];
