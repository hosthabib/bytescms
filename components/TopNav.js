import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import ToggleTheme from './ToggleTheme';
import Link from "next/link";
const items = [
  {
    label: <Link href="/">
    <a>Bytes CMS</a>
    </Link>,
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: <Link href="signup">
          <a>SignUp</a>
          </Link>,
    key: 'signup',
    icon: <AppstoreOutlined />
  },
  {
    label: <Link href="signin">
    <a>SignIn</a>
    </Link>,
    key: 'signin',
    icon: <AppstoreOutlined />
  },
  {
    label: 'Dashboard',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    style:{marginLeft:"auto"},
    children: [
      {
        type: 'group',
        label: 'Management',
        children: [
          {
            label: <Link href="/admin">
            <a>Admin</a>
            </Link>,
            key: 'setting:2',
          },
        ],
      }
      // ,
      // {
      //   type: 'group',
      //   label: 'Item 2',
      //   children: [
      //     {
      //       label: 'Option 3',
      //       key: 'setting:3',
      //     },
      //     {
      //       label: 'Option 4',
      //       key: 'setting:4',
      //     },
      //   ],
      // },
    ],
  },
  {
    label: (
      <ToggleTheme/>
    )
  },
];

const TopNav = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default TopNav;