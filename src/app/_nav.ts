export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Masters'
  },
  {
    name: 'Masters',
    url: '/masters',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Lonees',
        url: '/masters/lonees',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Lonee List',
            url: '/masters/lonees/loneeslist',
            icon: 'icon-puzzle'
          },
          {
            name: 'New Lonee',
            url: '/masters/lonees/newlonee',
            icon: 'icon-puzzle'
          }
          ]
      },
      {
        name: 'Paymodes',
        url: '/masters/paymodes',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collecters',
        url: '/masters/collectors',
        icon: 'icon-puzzle'
      },
      {
        name: 'Routes',
        url: '/masters/routes',
        icon: 'icon-puzzle'
      },
      {
        name: 'Villages',
        url: '/masters/villages',
        icon: 'icon-puzzle'
      },
      {
        name: 'Cities',
        url: '/masters/cities',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Collections',
    url: '/collections',
    icon: 'icon-chart'
  },
  {
    name: 'Logout',
    url: '/login',
    icon: 'icon-logout'
  }
  /*,
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Paginations',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  }*/
];
