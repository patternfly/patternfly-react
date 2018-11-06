import 'patternfly/dist/js/patternfly-settings';

const { patternfly } = window;

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
  SERVICE_ACCOUNT: 'serviceaccount',
  SERVICE_MONITOR: 'servicemonitor'
};

const kindAbbrs = {
  alert: 'A',
  alertmanager: 'AM',
  alertrule: 'AR',
  ingress: 'I',
  clusterrole: 'CR',
  clusterrolebinding: 'CRB',
  configmap: 'CM',
  container: 'C',
  daemonset: 'DS',
  deployment: 'D',
  deploymentconfig: 'DC',
  job: 'J',
  namespace: 'NS',
  node: 'N',
  petset: 'PS',
  pod: 'P',
  policy: 'NP',
  project: 'PR',
  replicaset: 'RS',
  replicationcontroller: 'RC',
  role: 'R',
  rolebinding: 'RB',
  secret: 'S',
  service: 'S',
  serviceaccount: 'SA',
  servicemonitor: 'SM'
};

const kindStrings = {
  alert: 'Alert',
  alertmanager: 'Alert Manager',
  alertrule: 'Alert Rule',
  ingress: 'Ingress',
  clusterrole: 'Cluster Role',
  clusterrolebinding: 'Cluster Role Binding',
  configmap: 'Config Map',
  container: 'Container',
  daemonset: 'Daemon Set',
  deployment: 'Deployment',
  deploymentconfig: 'Deployment Config',
  job: 'Job',
  namespace: 'Namespace',
  node: 'Node',
  petset: 'Pet Set',
  pod: 'Pod',
  policy: 'Policy',
  project: 'Project',
  replicaset: 'Replica Set',
  replicationcontroller: 'Replication Controller',
  role: 'Role',
  rolebinding: 'Role Binding',
  secret: 'Secret',
  service: 'Service',
  serviceaccount: 'Service Account',
  servicemonitor: 'Service Monitor'
};

const getResourceBadgeColor = resourceType => {
  switch (resourceType) {
    case resourceTypes.CLUSTER_ROLE:
    case resourceTypes.ROLE:
      return patternfly.pfPaletteColors.orange600;

    case resourceTypes.CLUSTER_ROLE_BINDING:
    case resourceTypes.ROLE_BINDING:
      return patternfly.pfPaletteColors.cyan500;

    case resourceTypes.DAEMON_SET:
    case resourceTypes.DEPLOYMENT:
    case resourceTypes.DEPLOYMENT_CONFIG:
    case resourceTypes.JOB:
    case resourceTypes.PET_SET:
    case resourceTypes.REPLICA_SET:
    case resourceTypes.REPLICATION_CONTROLLER:
      return patternfly.pfPaletteColors.blue600;

    case resourceTypes.NODE:
    case resourceTypes.POLICY:
      return patternfly.pfPaletteColors.purple400;

    case resourceTypes.ALERT_RULE:
    case resourceTypes.CONFIG_MAP:
      return patternfly.pfPaletteColors.purple600;

    case resourceTypes.ALERT:
    case resourceTypes.CONTAINER:
      return patternfly.pfPaletteColors.blue400;

    case resourceTypes.POD:
      return patternfly.pfPaletteColors.cyan400;

    case resourceTypes.NAMESPACE:
    case resourceTypes.PROJECT:
      return patternfly.pfPaletteColors.green500;

    case resourceTypes.SECRET:
      return patternfly.pfPaletteColors.orange400;

    case resourceTypes.ALERT_MANAGER:
      return patternfly.pfPaletteColors.orange500;

    case resourceTypes.SERVICE:
      return patternfly.pfPaletteColors.green500;

    case resourceTypes.SERVICE_ACCOUNT:
      return patternfly.pfPaletteColors.purple600;

    case resourceTypes.INGRESS:
      return patternfly.pfPaletteColors.purple700;

    case resourceTypes.SERVICE_MONITOR:
      return patternfly.pfPaletteColors.lightGreen500;

    default:
      return patternfly.pfPaletteColors.lightBlue400;
  }
};

export { resourceTypes, kindAbbrs, kindStrings, getResourceBadgeColor };
