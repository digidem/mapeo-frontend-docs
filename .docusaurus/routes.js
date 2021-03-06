
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','569'),
    exact: true
  },
  {
    path: '/blog/hello-world',
    component: ComponentCreator('/blog/hello-world','07a'),
    exact: true
  },
  {
    path: '/blog/hola',
    component: ComponentCreator('/blog/hola','6e6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','738'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','2fe'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','263'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','8b3'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','015'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','2cf'),
    routes: [
      {
        path: '/docs/desktop/desktop',
        component: ComponentCreator('/docs/desktop/desktop','0a8'),
        exact: true,
        'sidebar': "desktop"
      },
      {
        path: '/docs/mobile/about',
        component: ComponentCreator('/docs/mobile/about','508'),
        exact: true,
        'sidebar': "mobile"
      },
      {
        path: '/docs/mobile/getting-started/installation',
        component: ComponentCreator('/docs/mobile/getting-started/installation','8a2'),
        exact: true,
        'sidebar': "mobile"
      },
      {
        path: '/docs/mobile/navigation',
        component: ComponentCreator('/docs/mobile/navigation','631'),
        exact: true,
        'sidebar': "mobile"
      },
      {
        path: '/docs/mobile/onboarding/create-project',
        component: ComponentCreator('/docs/mobile/onboarding/create-project','d12'),
        exact: true,
        'sidebar': "mobile"
      },
      {
        path: '/docs/mobile/onboarding/join-project',
        component: ComponentCreator('/docs/mobile/onboarding/join-project','3e4'),
        exact: true,
        'sidebar': "mobile"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
