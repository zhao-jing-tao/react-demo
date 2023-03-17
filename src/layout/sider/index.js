import React from 'react'
import { Menu } from 'antd'
import { MailOutlined, SettingOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import routes from '@/router'

const Siders = () => {
  const location = useLocation()
  const { pathname } = location
  const navigate = useNavigate()
  const openKeys = []
  const getMenuList = (routeList, prePath = '') => {
    let menuList = []
    routeList.forEach((route) => {
      if (route.path == '/home') {
        menuList = menuList.concat(getMenuList(route.children, '/home/'))
      } else if (route.path !== undefined) {
        const currentPath = prePath + route.path
        const v = {
          label: route.title,
          key: currentPath,
          icon: route.icon,
        }
        if (route.children) {
          v.children = getMenuList(route.children, currentPath + '/')
          if (pathname.match(new RegExp('^' + currentPath + '\\/\\w'))) {
            openKeys.push(currentPath)
          }
        }
        menuList.push(v)
      }
    })
    console.log(menuList)
    return menuList
  }

  const menuItems = getMenuList(routes)

  const clicks = ({ item, key, keyPath, domEvent }) => {
    if (pathname !== key) {
      navigate(key)
    }
  }
  return (
    <div>
      <Menu
        mode="inline"
        items={menuItems}
        onClick={clicks}
        selectedKeys={[pathname]}
      />
    </div>
  )
}
export default Siders
