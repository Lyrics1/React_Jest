/*
 * @Author: lyricsfan 
 * @Date: 2019-03-06 20:03:16 
 * @Last Modified by: lyricsfan
 * @Last Modified time: 2019-03-07 21:20:37
 */

import React, { Component } from 'react';
import {
  Layout, Menu, Icon,
} from 'antd';
import intl from 'react-intl-universal';
import './index.css'
const { SubMenu } = Menu;
const {  Sider } = Layout;

export default class Sliders extends Component{
  render() {
        return (
            <Sider    breakpoint="md" collapsedWidth="0">
            <Menu
                theme="dark"
                mode="inline"
                // defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
              <SubMenu key="sub1" title={<span><Icon type="team" />{intl.get('MY_CLASS')}</span>}>
                  <Menu.Item key="1">{intl.get('JOIN_CLASS')}</Menu.Item>
                  <Menu.Item key="2">{intl.get('INVOLVED_CLASS')}</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />{intl.get('PERSON_CENTER')}</span>}>
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="user" />{intl.get('PERSON_CENTER')}</span>}>
                  <Menu.Item key="9">{intl.get('PSRSON_INFO')}</Menu.Item>
                  <Menu.Item key="10">{intl.get('DEVICE')}</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
           
        )
    }
}
