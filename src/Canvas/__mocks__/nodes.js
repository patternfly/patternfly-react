export const mockNodes = [
  {
    'name': 'Nuage',
    'x': 350,
    'y': 67,
    'id': 1,
    'image': 'img/OpenShift-logo.svg',
    'bundle': true,
    'backgroundColor': '#fff',
    'invalid': false,
    'selected': false,
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
    'name': 'Allora',
    'x': 105,
    'y': 290,
    'id': 2,
    'image': 'img/kubernetes.svg',
    'backgroundColor': '#fff',
    'invalid': false,
    'selected': false,
    'validConnectionTypes': ['storage'],
    'inputConnectors': [
      {
        'name': 'Network',
        'type': 'network',
        'fontFamily': 'PatternFlyIcons-webfont',
        'fontContent': '\ue909'
      },
      {
        'name': 'Storage',
        'type': 'storage',
        'fontFamily': 'PatternFlyIcons-webfont',
        'fontContent': '\ue90e'
      },
      {
        'name': 'Container',
        'type': 'container',
        'fontFamily': 'PatternFlyIcons-webfont',
        'fontContent': '\ue621'
      }
    ]
  },
  {
    'name': 'NetApp',
    'x': 350,
    'y': 290,
    'id': 3,
    'icon': 'pf pficon-service',
    'fontSize': '70px',
    'iconWidth': 90,
    'backgroundColor': '#fff',
    'invalid': false,
    'selected': false,
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
    'validConnectionTypes': ['network']
  },
  {
    'name': 'OpenShift',
    'x': 105,
    'y': 67,
    'id': 4,
    'fontFamily': 'fontawesome',
    'fontContent': '\uf0c2',
    'backgroundColor': '#fff',
    'invalid': false,
    'selected': false,
    'inputConnectors': [
      {
        'name': 'Storage',
        'type': 'storage',
        'fontFamily': 'PatternFlyIcons-webfont',
        'fontContent': '\ue90e'
      },
      {
        'name': 'Container',
        'type': 'container',
        'fontFamily': 'PatternFlyIcons-webfont',
        'fontContent': '\ue621'
      }
    ],
    'validConnectionTypes': ['network', 'container', 'storage']
  },
  {
    'name': 'OpenStack',
    'x': 595,
    'y': 67,
    'id': 3,
    'icon': 'pf pficon-network',
    'fontSize': '76px',
    'iconWidth': 86,
    'backgroundColor': '#fff',
    'invalid': false,
    'selected': false,
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
    'validConnectionTypes': ['network']
  },
  {
    'name': 'Storage',
    'x': 595,
    'y': 290,
    'id': 3,
    'icon': 'pf pficon-storage-domain',
    'fontSize': '76px',
    'iconWidth': 81,
    'backgroundColor': '#fff',
    'invalid': false,
    'selected': false,
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
    'validConnectionTypes': ['network']
  }
]
