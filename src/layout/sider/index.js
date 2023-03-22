import React, { useEffect, useState } from 'react'
import { Menu } from 'antd'
import { MailOutlined, SettingOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import routes from '@/router'

const Siders = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [menuItems, setMenuItems] = useState([])
  const [selectMenu, setSelectMenu] = useState([pathname])
  const getMenuList = (routesList) => {
    let list = []
    routesList.forEach((item) => {
      if (item.children) {
        item.children.forEach((i) => {
          if (i.children) {
            let c = {
              label: i.title,
              key: item.path + '/' + i.path,
              children: [],
            }
            i.children.forEach((t) => {
              c.children.push({
                label: t.title,
                key: item.path + '/' + i.path + '/' + t.path,
              })
            })
            list.push(c)
          } else {
            let v = { label: i.title, key: item.path + '/' + i.path }
            list.push(v)
          }
        })
      }
    })
    console.log(list)
    return list
  }
  const clicks = ({ key }) => {
    navigate(key)
    setSelectMenu(key)
  }

  useEffect(() => {
    setMenuItems(getMenuList(routes))
  }, [])

  const refsrr = () => {
    let defaultOpenkeys = ''
    let rank = pathname.split('/')
    if (rank.length === 4) {
      defaultOpenkeys = rank.slice(0, 3).join('/')
    }
    return [defaultOpenkeys]
  }
  const openKeys = refsrr()
  return (
    <div>
      <Menu
        mode="inline"
        items={menuItems}
        onClick={clicks}
        selectedKeys={selectMenu}
        defaultOpenKeys={openKeys}
        defaultSelectedKeys={[pathname]}
      />
    </div>
  )
}
export default Siders
