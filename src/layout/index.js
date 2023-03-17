import React from 'react'
import { Layout } from 'antd'
import Headers from './header'
import Siders from './sider'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
const { Header, Content, Sider } = Layout
const StyledLayout = styled(Layout)`
  width: 100%;
  height: 100%;
  .ant-layout-header {
    color: #fff;
  }
  .ant-layout-sider {
    color: #fff;
  }
`
const LayoutHome = () => {
  return (
    <StyledLayout>
      <Header>
        <Headers></Headers>
      </Header>
      <Layout>
        <Sider>
          <Siders></Siders>
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </StyledLayout>
  )
}
export default LayoutHome
