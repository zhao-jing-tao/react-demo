import React, { useState, useEffect, useCallback } from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
import Login from './services/index'
const StyledDiv = styled.div`
  color: red;
  font-size: 20px;
`
const App = () => {
  const login = useCallback(async () => {
    const res = await Login.long()
    console.log(res, 'res')
  }, [])

  return (
    <div className="App">
      React-app-template
      <h1>测试demohaha </h1>
      <Button onClick={login}>测试antd组件</Button>
      <StyledDiv>样式测试</StyledDiv>
    </div>
  )
}

export default App
