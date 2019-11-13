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
        name: 'Entrevistas',
        url: '/base/cards',
        icon: 'icon-puzzle',
        badge: {
          variant: 'success',
          text: 'Completo'
        }
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
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
    name: 'Create',
    url: '/create',
    icon: 'icon-bulb',
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
