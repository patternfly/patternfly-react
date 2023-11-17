const getRandomInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export interface SampleDataRow {
  name: string;
  threads: number;
  applications: number;
  workspaces: number;
  status: string;
  location: string;
  lastModified: string;
  url: string;
}

export const columns = [
  'Servers',
  'Threads',
  'Applications',
  'Workspaces',
  'Status',
  'Location',
  'Last Modified',
  'URL'
];

export const rows: SampleDataRow[] = [
  {
    name: 'US-Node 1',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node1'
  },
  {
    name: 'US-Node 2',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '5 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node2'
  },
  {
    name: 'US-Node 3',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node3'
  },
  {
    name: 'US-Node 4',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node4'
  },
  {
    name: 'US-Node 5',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '15 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node5'
  },
  {
    name: 'US-Node 6',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '4 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node6'
  },
  {
    name: 'US-Node 7',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node7'
  },
  {
    name: 'US-Node 8',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '8 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node8'
  },
  {
    name: 'US-Node 9',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/US-node9'
  },
  {
    name: 'US-Node 10',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node10'
  },
  {
    name: 'US-Node 11',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '55 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node11'
  },
  {
    name: 'US-Node 12',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/US-node12'
  },
  {
    name: 'US-Node 13',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node13'
  },
  {
    name: 'US-Node 14',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '4 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node14'
  },
  {
    name: 'US-Node 15',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node15'
  },
  {
    name: 'US-Node 16',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '5 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node16'
  },
  {
    name: 'US-Node 17',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '5 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node17'
  },
  {
    name: 'US-Node 18',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node18'
  },
  {
    name: 'US-Node 19',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node19'
  },
  {
    name: 'US-Node 20',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node20'
  },
  {
    name: 'US-Node 21',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '15 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node21'
  },
  {
    name: 'US-Node 22',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node22'
  },
  {
    name: 'US-Node 23',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node23'
  },
  {
    name: 'US-Node 24',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '40 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node24'
  },
  {
    name: 'US-Node 25',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/US-node25'
  },
  {
    name: 'US-Node 26',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Raleigh', 'Boston', 'Atlanta', 'San Francisco'][getRandomInteger(0, 3)],
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node26'
  },
  {
    name: 'CZ-Node 1',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '7 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node1'
  },
  {
    name: 'CZ-Node 2',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '50 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node2'
  },
  {
    name: 'CZ-Node 3',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node3'
  },
  {
    name: 'CZ-Node 4',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node4'
  },
  {
    name: 'CZ-Node 5',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node5'
  },
  {
    name: 'CZ-Node 6',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node6'
  },
  {
    name: 'CZ-Node 7',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '25 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node7'
  },
  {
    name: 'CZ-Node 8',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node8'
  },
  {
    name: 'CZ-Node 9',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '15 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node9'
  },
  {
    name: 'CZ-Node 10',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node10'
  },
  {
    name: 'CZ-Node 11',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node11'
  },
  {
    name: 'CZ-Node 12',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '5 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node12'
  },
  {
    name: 'CZ-Node 13',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '45 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node13'
  },
  {
    name: 'CZ-Node 14',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node14'
  },
  {
    name: 'CZ-Node 15',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node15'
  },
  {
    name: 'CZ-Remote-Node 1',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node1'
  },
  {
    name: 'CZ--Remote-Node 2',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '15 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node2'
  },
  {
    name: 'CZ-Remote-Node 3',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node3'
  },
  {
    name: 'CZ-Remote-Node 4',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node4'
  },
  {
    name: 'CZ-Remote-Node 5',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node5'
  },
  {
    name: 'CZ-Remote-Node 6',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node6'
  },
  {
    name: 'CZ-Remote-Node 7',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '45 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node7'
  },
  {
    name: 'CZ-Remote-Node 8',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '6 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node8'
  },
  {
    name: 'CZ-Remote-Node 9',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '50 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node9'
  },
  {
    name: 'CZ-Remote-Node 10',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node10'
  },
  {
    name: 'CZ-Remote-Node 11',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node11'
  },
  {
    name: 'CZ-Remote-Node 12',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node12'
  },
  {
    name: 'CZ-Remote-Node 13',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '5 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node13'
  },
  {
    name: 'CZ-Remote-Node 14',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node14'
  },
  {
    name: 'CZ-Remote-Node 15',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node15'
  },
  {
    name: 'CZ-Remote-Node 16',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node16'
  },
  {
    name: 'CZ-Remote-Node 17',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '25 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node17'
  },
  {
    name: 'CZ-Remote-Node 18',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: ['Brno', 'Prague'][getRandomInteger(0, 1)],
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node18'
  },
  {
    name: 'Bangalore-Node 1',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '25 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node1'
  },
  {
    name: 'Bangalore-Node 2',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node2'
  },
  {
    name: 'Bangalore-Node 3',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node3'
  },
  {
    name: 'Bangalore-Node 4',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '50 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node4'
  },
  {
    name: 'Bangalore-Node 5',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node5'
  },
  {
    name: 'Bangalore-Node 6',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node6'
  },
  {
    name: 'Bangalore-Node 7',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '5 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node7'
  },
  {
    name: 'Bangalore-Node 8',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node8'
  },
  {
    name: 'Bangalore-Node 9',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node9'
  },
  {
    name: 'Bangalore-Node 10',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node10'
  },
  {
    name: 'Bangalore-Node 11',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '40 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node11'
  },
  {
    name: 'Bangalore-Node 12',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node12'
  },
  {
    name: 'Bangalore-Node 13',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node13'
  },
  {
    name: 'Bangalore-Node 14',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '4 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node14'
  },
  {
    name: 'Bangalore-Node 15',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node15'
  },
  {
    name: 'Bangalore-Node 16',
    threads: getRandomInteger(1, 20),
    applications: getRandomInteger(1, 50),
    workspaces: getRandomInteger(1, 30),
    status: ['Stopped', 'Running', 'Down', 'Needs maintenance'][getRandomInteger(0, 3)],
    location: 'Bangalore',
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node16'
  }
];
