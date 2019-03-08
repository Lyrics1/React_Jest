/*
 * @Author: lyricsfan 
 * @Date: 2019-03-06 20:03:23 
 * @Last Modified by: lyricsfan
 * @Last Modified time: 2019-03-07 21:13:15
 */
import React, { Component } from 'react';
import intl from 'react-intl-universal';
import {
  Layout, Menu, 
} from 'antd';

import {ViewLoginRegiests} from '../../component/index'
const { Header } = Layout;

export default class Headers extends Component{
  componentDidMount() {

  }
    render() {
      return (
          <Header style={{ background: '#fff', paddingLeft: 25 }} className="header">
            <div className="logo" />
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
               <ViewLoginRegiests/>
            </Menu>
          </Header>
         
        )
    }
}
