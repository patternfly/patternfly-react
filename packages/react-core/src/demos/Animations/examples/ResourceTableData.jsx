import React from 'react';

export const applicationsData = [
  {
    name: 'Cost Management',
    header: 'US-East-1',
    branch: 'main',
    status: 'Running',
    details: <p>Monitors cloud spending across all services. Last updated 1 hour ago.</p>
  },
  {
    name: 'User Authentication',
    header: 'EU-West-2',
    branch: 'dev',
    status: 'Degraded',
    details: (
      <div>
        <p>OAuth 2.0 provider is reporting high latency. SAML provider is operational.</p>
      </div>
    )
  },
  {
    name: 'Data Processing',
    header: 'US-West-1',
    branch: 'feature-new-parser',
    status: 'Stopped',
    details: <p>Stopped pending deployment of new data schema. Do not restart manually.</p>
  },
  {
    name: 'Inventory API',
    header: 'US-East-1',
    branch: 'main',
    status: 'Running',
    details: <p>Provides read/write access to the product inventory database.</p>
  },
  {
    name: 'Frontend Web App',
    header: 'APAC-Tokyo',
    branch: 'release-v2.5.1',
    status: 'Degraded',
    details: <p>A new vulnerability (CVE-2025-12345) was detected in a dependency.</p>
  },
  {
    name: 'Logging Service',
    header: 'EU-Central-1',
    branch: 'hotfix-log-rotation',
    status: 'Running',
    details: <p>Aggregating logs from all production services. Current volume: 2,500 logs/min.</p>
  },
  {
    name: 'API Gateway',
    header: 'US-East-1',
    branch: 'main',
    status: 'Degraded',
    details: <p>High latency detected on the `/v2/query` endpoint. Please investigate.</p>
  },
  {
    name: 'Notification Queue',
    header: 'US-West-2',
    branch: 'dev',
    status: 'Running',
    details: <p>Currently processing a backlog of 1,500 messages. Estimated time to clear: 15 minutes.</p>
  },
  {
    name: 'Billing Processor',
    header: 'EU-West-1',
    branch: 'main',
    status: 'Stopped',
    details: <p>Service is stopped pending end-of-month financial reconciliation.</p>
  },
  {
    name: 'Content Delivery Network',
    header: 'Global',
    branch: 'config-update',
    status: 'Running',
    details: <p>Serving assets globally with 58 points of presence. Cache hit ratio: 98.2%.</p>
  },
  {
    name: 'Reporting Dashboard',
    header: 'US-East-2',
    branch: 'feature-new-charts',
    status: 'Degraded',
    details: <p>Data source `reporting-db-replica` is out of sync. Reports may be stale.</p>
  }
];