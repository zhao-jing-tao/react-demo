import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useRoutes, HashRouter } from 'react-router-dom'
import routes from '@/router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import '@/styles/global.scss'
const App = () => <>{useRoutes(routes)}</>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ConfigProvider locale={zhCN}>
    {window.location.host.indexOf('localhost') > -1 ? (
      <HashRouter>
        <App />
      </HashRouter>
    ) : (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
  </ConfigProvider>
)
