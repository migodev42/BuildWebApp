// import { Suspense, lazy } from 'react';

import loadable from '@loadable/component'
const Home=loadable(()=>import('@pages/home/Home'));
const WebGL=loadable(()=>import('@pages/webgl/WebGL'));

const RouterConf = {
  'default':
  {
    url: '*',
    title: 'Home',
    page: Home
  },
  
  'home':
  {
    url: '/',
    title: 'Home',
    page: Home
  },
  
  'webGL':
  {
    url: '/webGL',
    title: 'webGL',
    page: WebGL
  }
}

export default RouterConf;