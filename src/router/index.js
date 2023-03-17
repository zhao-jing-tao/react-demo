import React, { Suspense, lazy } from 'react'
import Login from '@/pages/login'
import Home from '@/pages/home'
import D1 from '@/pages/dao1/d1'
import D2 from '@/pages/dao1/d2'
import Layout from '@/layout'
const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Layout />,
    children: [
      {
        path: 'shouye',
        element: <Home />,
        title: '首页',
      },
      {
        path: 'd1',
        title: '导航一',
        // redirect: 'dao1',
        children: [
          {
            path: 'dao1',
            element: <D1 />,
            title: 'i1',
          },
          {
            path: 'dao2',
            element: <D2 />,
            title: 'i2',
          },
        ],
      },
    ],
  },
]
export default routes
