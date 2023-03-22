import React, { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'
import Login from '@/pages/login'
import Home from '@/pages/home'
import D1 from '@/pages/dao1/d1'
import D2 from '@/pages/dao1/d2'
import Layout from '@/layout'
const routes = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Navigate to="/home/shouye" />,
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
      {
        path: 'd2',
        title: '导航二',
        children: [
          {
            path: 'dao3',
            title: 'item',
          },
        ],
      },
    ],
  },
]
export default routes
