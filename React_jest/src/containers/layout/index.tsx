/*
 * @Author: lyricsfan 
 * @Date: 2019-03-06 20:03:35 
 * @Last Modified by:   lyricsfan 
 * @Last Modified time: 2019-03-06 20:03:35 
 */
import React, { Component } from 'react';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import './index.css'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import Headers from './header'
import Sliders from './slider'

export default class Index extends Component{
    render() {
        return (
          <Layout>
              <Headers/>
          <Layout>
            <Sliders/>
              <Layout style={{ padding: '0 24px 24px' }}>
              {/*  这种可以进行全局的信息提示
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 80+'vh',
              }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
        )
    }
}
