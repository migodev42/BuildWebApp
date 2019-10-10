// import { Suspense, lazy } from 'react';

import loadable from '@loadable/component'
const home=loadable(()=>import('@pages/home/index'));
const webgl=loadable(()=>import('@pages/webgl/index'));
const mindmap=loadable(()=>import('@pages/mindmap/index'));
const blog=loadable(()=>import('@pages/blog/index'));

const RouterConf = {  
  'home':
  {
    url: '/',
    title: 'home',
    page: home
  },
  
  'webgl':
  {
    url: '/webgl',
    title: 'webgl',
    page: webgl
  },
  
  'projects':
  {
    url: '/projects',
    title: 'projects',
    page: webgl
  },

  'mindmap':
  {
    url: '/mindmap',
    title: 'mindmap',
    page: mindmap
  },

  'blog':
  {
    url: '/blog',
    title: 'blog',
    page: blog
  }


}

export default RouterConf;