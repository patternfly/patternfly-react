import BadgedResource from './BadgedResource';

const resourceTypes = {
  ALERT: 'alert',
  ALERT_MANAGER: 'alertmanager',
  ALERT_RULE: 'alertrule',
  INGRESS: 'ingress',
  CLUSTER_ROLE: 'clusterrole',
  CLUSTER_ROLE_BINDING: 'clusterrolebinding',
  CONFIG_MAP: 'configmap',
  CONTAINER: 'container',
  DAEMON_SET: 'daemonset',
  DEPLOYMENT: 'deployment',
  DEPLOYMENT_CONFIG: 'deploymentconfig',
  JOB: 'job',
  NAMESPACE: 'namespace',
  NODE: 'node',
  PET_SET: 'petset',
  POD: 'pod',
  POLICY: 'policy',
  PROJECT: 'project',
  REPLICA_SET: 'replicaset',
  REPLICATION_CONTROLLER: 'replicationcontroller',
  ROLE: 'role',
  ROLE_BINDING: 'rolebinding',
  SECRET: 'secret',
  SERVICE: 'service',
  SERVICE_ACCOUNT: 'serviceaccount'
};

const getResourceBadgeColor = resourceType => {
  switch (resourceType) {
    case resourceTypes.CLUSTER_ROLE:
    case resourceTypes.ROLE:
      return BadgedResource.COLORS.orange600;

    case resourceTypes.CLUSTER_ROLE_BINDING:
    case resourceTypes.ROLE_BINDING:
      return BadgedResource.COLORS.cyan500;

    case resourceTypes.DAEMON_SET:
    case resourceTypes.DEPLOYMENT:
    case resourceTypes.DEPLOYMENT_CONFIG:
    case resourceTypes.JOB:
    case resourceTypes.PET_SET:
    case resourceTypes.REPLICA_SET:
    case resourceTypes.REPLICATION_CONTROLLER:
      return BadgedResource.COLORS.blue600;

    case resourceTypes.NODE:
    case resourceTypes.POLICY:
      return BadgedResource.COLORS.purple400;

    case resourceTypes.ALERT_RULE:
    case resourceTypes.CONFIG_MAP:
      return BadgedResource.COLORS.purple600;

    case resourceTypes.ALERT:
    case resourceTypes.CONTAINER:
      return BadgedResource.COLORS.blue400;

    case resourceTypes.POD:
      return BadgedResource.COLORS.cyan400;

    case resourceTypes.NAMESPACE:
    case resourceTypes.PROJECT:
      return BadgedResource.COLORS.green500;

    case resourceTypes.SECRET:
      return BadgedResource.COLORS.orange400;

    case resourceTypes.ALERT_MANAGER:
      return BadgedResource.COLORS.orange500;

    case resourceTypes.SERVICE:
      return BadgedResource.COLORS.green500;

    case resourceTypes.SERVICE_ACCOUNT:
      return BadgedResource.COLORS.purple600;

    case resourceTypes.INGRESS:
      return BadgedResource.COLORS.purple700;

    default:
      return BadgedResource.COLORS.lightBlue400;
  }
};

export { resourceTypes, getResourceBadgeColor };
