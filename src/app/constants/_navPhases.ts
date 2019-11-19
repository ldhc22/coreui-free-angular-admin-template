import {INavData} from '@coreui/angular';

export const navPhases: INavData[] = [
  {
    name: 'Información general',
    url: '/project/info',
    icon: 'icon-info'
  },
  {
    title: true,
    name: 'Metodología'
  },
  {
    name: 'Discover',
    url: '/project/discover',
    icon: 'icon-people',
    badge: {
      variant: 'warning',
      text: 'En curso'
    },
    children: [
      {
        name: 'Información',
        url: '/project/discover',
        icon: 'icon-info'
      },
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
    url: '/project/connect',
    icon: 'icon-magnifier',
    children: [
      {
        name: 'Información',
        url: '/project/connect',
        icon: 'icon-info'
      },
      {
        name: 'Affinity diagram',
        url: '/project/connect/affinity-diagram',
        icon: 'icon-puzzle'
      },
      {
        name: 'Insights',
        url: '/project/connect/insights',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Create',
    url: '/project/create',
    icon: 'icon-bulb',
    children: [
      {
        name: 'Información',
        url: '/project/create',
        icon: 'icon-info'
      },
      {
        name: 'Improvement triggers',
        url: '/project/create/improvement-triggers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Matriz MVP',
        url: '/project/create/matriz-mvp',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Build',
    url: '/project/build',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Información',
        url: '/project/build',
        icon: 'icon-info'
      },
      {
        name: 'Low Fidelity Prototyping',
        url: '/project/build/low-fidelity',
        icon: 'icon-puzzle'
      },
      {
        name: 'Mid Fidelity Prototyping',
        url: '/project/build/mid-fidelity',
        icon: 'icon-puzzle'
      },
      {
        name: 'High Fidelity Prototyping',
        url: '/project/build/high-fidelity',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Launch',
    url: '/project/launch',
    icon: 'icon-rocket',
    children: [
      {
        name: 'Información',
        url: '/project/launch',
        icon: 'icon-info'
      },
      {
        name: 'Marketing Mix',
        url: '/project/launch/marketing-mix',
        icon: 'icon-puzzle'
      }
    ]
  }
];
