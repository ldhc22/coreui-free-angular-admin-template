import {INavData} from '@coreui/angular';

export const navPhases: INavData[] = [
  {
    name: 'Información general',
    url: '/info',
    icon: 'icon-info'
  },
  {
    title: true,
    name: 'Metodología'
  },
  {
    name: 'Discover',
    url: '/discover',
    icon: 'icon-people',
    badge: {
      variant: 'warning',
      text: 'En curso'
    },
    children: [
      {
        name: 'Investigación técnica',
        url: '/project/discover/investigation',
        icon: 'icon-puzzle',
        badge: {
          variant: 'success',
          text: 'Completo'
        }
      },
      {
        name: 'Five whys',
        url: '/project/discover/five-whys',
        icon: 'icon-puzzle'
      },
      {
        name: 'Question ladder',
        url: '/project/discover/question-ladder',
        icon: 'icon-puzzle'
      },
      {
        name: 'Voice of the customer',
        url: '/project/discover/voice-customer',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Connect',
    url: '/connect',
    icon: 'icon-magnifier',
    children: [
      {
        name: 'Affinity diagram',
        url: '/connect/affinity-diagram',
        icon: 'icon-puzzle'
      },
      {
        name: 'Insights',
        url: '/connect/insights',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Create',
    url: '/create',
    icon: 'icon-bulb',
    children: [
      {
        name: 'Improvement triggers',
        url: '/create/improvement-triggers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Build',
    url: '/build',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Launch',
    url: '/launch',
    icon: 'icon-rocket',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  }
];
