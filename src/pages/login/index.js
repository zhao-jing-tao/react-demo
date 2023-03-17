import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import styled from 'styled-components'
const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Login = () => {
  const navigate = useNavigate()
  const login = () => {
    navigate('/home')
  }
  return (
    <StyledDiv>
      <Button onClick={login}>登录</Button>
    </StyledDiv>
  )
}
export default Login
