/*
 * @Author: lyricsfan 
 * @Date: 2019-03-06 20:03:23 
 * @Last Modified by:   lyricsfan 
 * @Last Modified time: 2019-03-06 20:03:23 
 */
import React, { Component } from 'react';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import './index.css'
const { SubMenu } = Menu;
const { Header } = Layout;

export default class Headers extends Component{
    render() {
        return (
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
         
        )
    }
}
