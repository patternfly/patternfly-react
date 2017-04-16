export const mockContainerNodes = [
  {
    'name': 'Dev',
    'x': 105,
    'y': 67,
    'id': 1,
    'width': 290,
    'height': 450,
    'titleYOffset': 24,
    'backgroundColor': '#fff',
    'invalid': false,
    'selected': false,
    'containerNode': true,
    'containerNodeDropItemTypes': ['toolbox_item'],
    'containerItems': [
      {
        'id': 1,
        'image': 'img/OpenShift-logo.svg',
        'name': 'Nuage',
        'label': 'OpenShift on Open Stack',
        'backgroundColor': '#fff'
      },
      {
        'id': 2,
        'image': 'img/aws.svg',
        'name': 'Allora',
        'label': 'OpenShift on AWS',
        'backgroundColor': '#fff'
      },
      {
        'id': 3,
        'fontFamily': 'fontawesome',
        'fontContent': '\uf0c2',
        'fontSize': '45px',
        'name': 'Insights',
        'label': 'Red Hat Insights'
      }
    ],
    'maxDisplayItems': 4,
    'inputConnectors': [
      {
        'name': 'Network',
        'type': 'network',
        'fontFamily': 'PatternFlyIcons-webfont',
        'fontContent': '\ue909'
      },
      {
        'name': 'Container',
        'type': 'container',
        'fontFamily': 'PatternFlyIcons-webfont',
        'fontContent': '\ue621'
      }
    ],
    'validConnectionTypes': ['network', 'container']
  },
  {
    'name': 'QA',
    'x': 450,
    'y': 67,
    'id': 1,
    'width': 290,
    'height': 450,
    'titleYOffset': 24,
    'backgroundColor': '#fff',
    'invalid': false,
    'selected': false,
    'containerNode': true,
    'containerNodeDropItemTypes': ['toolbox_item'],
    'containerItems': [
      {
        'id': 1,
        'image': 'img/azure.svg',
        'name': 'OpenShift',
        'label': 'OpenShift on Azure',
        'backgroundColor': '#fff'
      },
      {
        'id': 2,
        'image': 'img/kubernetes.svg',
        'name': 'Kubernetes',
        'label': 'Kubernetes on OpenStack',
        'backgroundColor': '#fff'
      },
      {
        'id': 3,
        'icon': 'pf pficon-network',
        'fontSize': '45px',
        'name': 'Kibana',
        'label': 'Logging Service',
        'backgroundColor': '#fff'
      }
    ],
    'maxDisplayItems': 4,
    'inputConnectors': [
      {
        'name': 'Network',
        'type': 'network',
        'fontFamily': 'PatternFlyIcons-webfont',
        'fontContent': '\ue909'
      },
      {
        'name': 'Container',
        'type': 'container',
        'fontFamily': 'PatternFlyIcons-webfont',
        'fontContent': '\ue621'
      }
    ],
    'validConnectionTypes': ['network', 'container']
  }
]
