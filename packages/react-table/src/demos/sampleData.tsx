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
    threads: 15,
    applications: 32,
    workspaces: 18,
    status: 'Running',
    location: 'Raleigh',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node1'
  },
  {
    name: 'US-Node 2',
    threads: 8,
    applications: 42,
    workspaces: 24,
    status: 'Stopped',
    location: 'Boston',
    lastModified: '5 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node2'
  },
  {
    name: 'US-Node 3',
    threads: 12,
    applications: 17,
    workspaces: 9,
    status: 'Needs maintenance',
    location: 'Atlanta',
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node3'
  },
  {
    name: 'US-Node 4',
    threads: 19,
    applications: 26,
    workspaces: 12,
    status: 'Running',
    location: 'San Francisco',
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node4'
  },
  {
    name: 'US-Node 5',
    threads: 7,
    applications: 39,
    workspaces: 21,
    status: 'Down',
    location: 'Boston',
    lastModified: '15 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node5'
  },
  {
    name: 'US-Node 6',
    threads: 5,
    applications: 48,
    workspaces: 28,
    status: 'Running',
    location: 'Raleigh',
    lastModified: '4 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node6'
  },
  {
    name: 'US-Node 7',
    threads: 14,
    applications: 22,
    workspaces: 17,
    status: 'Stopped',
    location: 'Atlanta',
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node7'
  },
  {
    name: 'US-Node 8',
    threads: 4,
    applications: 31,
    workspaces: 5,
    status: 'Running',
    location: 'San Francisco',
    lastModified: '8 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node8'
  },
  {
    name: 'US-Node 9',
    threads: 10,
    applications: 45,
    workspaces: 14,
    status: 'Needs maintenance',
    location: 'Raleigh',
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/US-node9'
  },
  {
    name: 'US-Node 10',
    threads: 16,
    applications: 27,
    workspaces: 19,
    status: 'Running',
    location: 'Boston',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node10'
  },
  {
    name: 'US-Node 11',
    threads: 9,
    applications: 36,
    workspaces: 25,
    status: 'Down',
    location: 'Atlanta',
    lastModified: '55 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node11'
  },
  {
    name: 'US-Node 12',
    threads: 18,
    applications: 20,
    workspaces: 11,
    status: 'Running',
    location: 'San Francisco',
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/US-node12'
  },
  {
    name: 'US-Node 13',
    threads: 3,
    applications: 43,
    workspaces: 29,
    status: 'Stopped',
    location: 'Raleigh',
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node13'
  },
  {
    name: 'US-Node 14',
    threads: 13,
    applications: 19,
    workspaces: 16,
    status: 'Running',
    location: 'Boston',
    lastModified: '4 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node14'
  },
  {
    name: 'US-Node 15',
    threads: 6,
    applications: 33,
    workspaces: 4,
    status: 'Needs maintenance',
    location: 'Atlanta',
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node15'
  },
  {
    name: 'US-Node 16',
    threads: 11,
    applications: 46,
    workspaces: 23,
    status: 'Running',
    location: 'San Francisco',
    lastModified: '5 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node16'
  },
  {
    name: 'US-Node 17',
    threads: 17,
    applications: 25,
    workspaces: 8,
    status: 'Down',
    location: 'Raleigh',
    lastModified: '5 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node17'
  },
  {
    name: 'US-Node 18',
    threads: 2,
    applications: 38,
    workspaces: 27,
    status: 'Running',
    location: 'Boston',
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node18'
  },
  {
    name: 'US-Node 19',
    threads: 20,
    applications: 41,
    workspaces: 10,
    status: 'Stopped',
    location: 'Atlanta',
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node19'
  },
  {
    name: 'US-Node 20',
    threads: 14,
    applications: 29,
    workspaces: 22,
    status: 'Running',
    location: 'San Francisco',
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node20'
  },
  {
    name: 'US-Node 21',
    threads: 8,
    applications: 44,
    workspaces: 15,
    status: 'Needs maintenance',
    location: 'Raleigh',
    lastModified: '15 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node21'
  },
  {
    name: 'US-Node 22',
    threads: 5,
    applications: 18,
    workspaces: 26,
    status: 'Running',
    location: 'Boston',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node22'
  },
  {
    name: 'US-Node 23',
    threads: 19,
    applications: 37,
    workspaces: 7,
    status: 'Down',
    location: 'Atlanta',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node23'
  },
  {
    name: 'US-Node 24',
    threads: 1,
    applications: 24,
    workspaces: 20,
    status: 'Running',
    location: 'San Francisco',
    lastModified: '40 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/US-node24'
  },
  {
    name: 'US-Node 25',
    threads: 15,
    applications: 35,
    workspaces: 13,
    status: 'Stopped',
    location: 'Raleigh',
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/US-node25'
  },
  {
    name: 'US-Node 26',
    threads: 7,
    applications: 47,
    workspaces: 30,
    status: 'Running',
    location: 'Boston',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/US-node26'
  },
  {
    name: 'CZ-Node 1',
    threads: 12,
    applications: 28,
    workspaces: 6,
    status: 'Needs maintenance',
    location: 'Brno',
    lastModified: '7 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node1'
  },
  {
    name: 'CZ-Node 2',
    threads: 18,
    applications: 40,
    workspaces: 21,
    status: 'Running',
    location: 'Prague',
    lastModified: '50 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node2'
  },
  {
    name: 'CZ-Node 3',
    threads: 4,
    applications: 23,
    workspaces: 17,
    status: 'Down',
    location: 'Brno',
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node3'
  },
  {
    name: 'CZ-Node 4',
    threads: 16,
    applications: 34,
    workspaces: 9,
    status: 'Running',
    location: 'Prague',
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node4'
  },
  {
    name: 'CZ-Node 5',
    threads: 9,
    applications: 49,
    workspaces: 25,
    status: 'Stopped',
    location: 'Brno',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node5'
  },
  {
    name: 'CZ-Node 6',
    threads: 13,
    applications: 21,
    workspaces: 14,
    status: 'Running',
    location: 'Prague',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node6'
  },
  {
    name: 'CZ-Node 7',
    threads: 3,
    applications: 30,
    workspaces: 28,
    status: 'Needs maintenance',
    location: 'Brno',
    lastModified: '25 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node7'
  },
  {
    name: 'CZ-Node 8',
    threads: 20,
    applications: 42,
    workspaces: 5,
    status: 'Running',
    location: 'Prague',
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node8'
  },
  {
    name: 'CZ-Node 9',
    threads: 6,
    applications: 16,
    workspaces: 19,
    status: 'Down',
    location: 'Brno',
    lastModified: '15 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node9'
  },
  {
    name: 'CZ-Node 10',
    threads: 11,
    applications: 33,
    workspaces: 12,
    status: 'Running',
    location: 'Prague',
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node10'
  },
  {
    name: 'CZ-Node 11',
    threads: 17,
    applications: 45,
    workspaces: 26,
    status: 'Stopped',
    location: 'Brno',
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node11'
  },
  {
    name: 'CZ-Node 12',
    threads: 2,
    applications: 27,
    workspaces: 8,
    status: 'Running',
    location: 'Prague',
    lastModified: '5 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node12'
  },
  {
    name: 'CZ-Node 13',
    threads: 19,
    applications: 39,
    workspaces: 24,
    status: 'Needs maintenance',
    location: 'Brno',
    lastModified: '45 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node13'
  },
  {
    name: 'CZ-Node 14',
    threads: 5,
    applications: 19,
    workspaces: 11,
    status: 'Running',
    location: 'Prague',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node14'
  },
  {
    name: 'CZ-Node 15',
    threads: 14,
    applications: 36,
    workspaces: 27,
    status: 'Down',
    location: 'Brno',
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-node15'
  },
  {
    name: 'CZ-Remote-Node 1',
    threads: 10,
    applications: 48,
    workspaces: 16,
    status: 'Running',
    location: 'Prague',
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node1'
  },
  {
    name: 'CZ--Remote-Node 2',
    threads: 8,
    applications: 22,
    workspaces: 29,
    status: 'Stopped',
    location: 'Brno',
    lastModified: '15 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node2'
  },
  {
    name: 'CZ-Remote-Node 3',
    threads: 15,
    applications: 32,
    workspaces: 4,
    status: 'Running',
    location: 'Prague',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node3'
  },
  {
    name: 'CZ-Remote-Node 4',
    threads: 1,
    applications: 46,
    workspaces: 23,
    status: 'Needs maintenance',
    location: 'Brno',
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node4'
  },
  {
    name: 'CZ-Remote-Node 5',
    threads: 12,
    applications: 25,
    workspaces: 10,
    status: 'Running',
    location: 'Prague',
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node5'
  },
  {
    name: 'CZ-Remote-Node 6',
    threads: 7,
    applications: 38,
    workspaces: 20,
    status: 'Down',
    location: 'Brno',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-Remote-node6'
  },
  {
    name: 'CZ-Remote-Node 7',
    threads: 18,
    applications: 43,
    workspaces: 15,
    status: 'Running',
    location: 'Prague',
    lastModified: '45 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node7'
  },
  {
    name: 'CZ-Remote-Node 8',
    threads: 4,
    applications: 17,
    workspaces: 30,
    status: 'Stopped',
    location: 'Brno',
    lastModified: '6 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node8'
  },
  {
    name: 'CZ-Remote-Node 9',
    threads: 13,
    applications: 31,
    workspaces: 7,
    status: 'Running',
    location: 'Prague',
    lastModified: '50 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node9'
  },
  {
    name: 'CZ-Remote-Node 10',
    threads: 9,
    applications: 47,
    workspaces: 22,
    status: 'Needs maintenance',
    location: 'Brno',
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node10'
  },
  {
    name: 'CZ-Remote-Node 11',
    threads: 16,
    applications: 20,
    workspaces: 13,
    status: 'Running',
    location: 'Prague',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node11'
  },
  {
    name: 'CZ-Remote-Node 12',
    threads: 6,
    applications: 35,
    workspaces: 18,
    status: 'Down',
    location: 'Brno',
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node12'
  },
  {
    name: 'CZ-Remote-Node 13',
    threads: 11,
    applications: 50,
    workspaces: 3,
    status: 'Running',
    location: 'Prague',
    lastModified: '5 hours ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node13'
  },
  {
    name: 'CZ-Remote-Node 14',
    threads: 19,
    applications: 29,
    workspaces: 26,
    status: 'Stopped',
    location: 'Brno',
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node14'
  },
  {
    name: 'CZ-Remote-Node 15',
    threads: 3,
    applications: 40,
    workspaces: 8,
    status: 'Running',
    location: 'Prague',
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node15'
  },
  {
    name: 'CZ-Remote-Node 16',
    threads: 14,
    applications: 24,
    workspaces: 21,
    status: 'Needs maintenance',
    location: 'Brno',
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node16'
  },
  {
    name: 'CZ-Remote-Node 17',
    threads: 8,
    applications: 37,
    workspaces: 11,
    status: 'Running',
    location: 'Prague',
    lastModified: '25 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node17'
  },
  {
    name: 'CZ-Remote-Node 18',
    threads: 2,
    applications: 44,
    workspaces: 29,
    status: 'Down',
    location: 'Brno',
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/CZ-remote-node18'
  },
  {
    name: 'Bangalore-Node 1',
    threads: 17,
    applications: 26,
    workspaces: 14,
    status: 'Running',
    location: 'Bangalore',
    lastModified: '25 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node1'
  },
  {
    name: 'Bangalore-Node 2',
    threads: 5,
    applications: 41,
    workspaces: 19,
    status: 'Stopped',
    location: 'Bangalore',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node2'
  },
  {
    name: 'Bangalore-Node 3',
    threads: 10,
    applications: 18,
    workspaces: 5,
    status: 'Running',
    location: 'Bangalore',
    lastModified: '10 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node3'
  },
  {
    name: 'Bangalore-Node 4',
    threads: 20,
    applications: 33,
    workspaces: 24,
    status: 'Needs maintenance',
    location: 'Bangalore',
    lastModified: '50 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node4'
  },
  {
    name: 'Bangalore-Node 5',
    threads: 7,
    applications: 49,
    workspaces: 16,
    status: 'Running',
    location: 'Bangalore',
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node5'
  },
  {
    name: 'Bangalore-Node 6',
    threads: 15,
    applications: 23,
    workspaces: 2,
    status: 'Down',
    location: 'Bangalore',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node6'
  },
  {
    name: 'Bangalore-Node 7',
    threads: 4,
    applications: 37,
    workspaces: 27,
    status: 'Running',
    location: 'Bangalore',
    lastModified: '5 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node7'
  },
  {
    name: 'Bangalore-Node 8',
    threads: 13,
    applications: 45,
    workspaces: 10,
    status: 'Stopped',
    location: 'Bangalore',
    lastModified: '30 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node8'
  },
  {
    name: 'Bangalore-Node 9',
    threads: 18,
    applications: 21,
    workspaces: 23,
    status: 'Running',
    location: 'Bangalore',
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node9'
  },
  {
    name: 'Bangalore-Node 10',
    threads: 6,
    applications: 34,
    workspaces: 8,
    status: 'Needs maintenance',
    location: 'Bangalore',
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node10'
  },
  {
    name: 'Bangalore-Node 11',
    threads: 16,
    applications: 48,
    workspaces: 20,
    status: 'Running',
    location: 'Bangalore',
    lastModified: '40 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node11'
  },
  {
    name: 'Bangalore-Node 12',
    threads: 9,
    applications: 28,
    workspaces: 15,
    status: 'Down',
    location: 'Bangalore',
    lastModified: '1 hour ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node12'
  },
  {
    name: 'Bangalore-Node 13',
    threads: 11,
    applications: 42,
    workspaces: 6,
    status: 'Running',
    location: 'Bangalore',
    lastModified: '20 minutes ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node13'
  },
  {
    name: 'Bangalore-Node 14',
    threads: 3,
    applications: 19,
    workspaces: 28,
    status: 'Stopped',
    location: 'Bangalore',
    lastModified: '4 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node14'
  },
  {
    name: 'Bangalore-Node 15',
    threads: 14,
    applications: 32,
    workspaces: 12,
    status: 'Running',
    location: 'Bangalore',
    lastModified: '2 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node15'
  },
  {
    name: 'Bangalore-Node 16',
    threads: 1,
    applications: 47,
    workspaces: 25,
    status: 'Needs maintenance',
    location: 'Bangalore',
    lastModified: '3 hours ago',
    url: 'http://www.redhat.com/en/office-locations/Bangalore-node16'
  }
];
