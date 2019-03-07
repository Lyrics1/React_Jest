/*
 * @Author: lyricsfan 
 * @Date: 2019-03-06 20:03:27 
 * @Last Modified by: lyricsfan
 * @Last Modified time: 2019-03-07 15:08:15
 */
import intl from 'react-intl-universal';
import _ from 'lodash'
import http from 'axios'
import React, { Component } from 'react';
import { LocaleProvider } from 'antd'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import enUS from 'antd/lib/locale-provider/en_US';
import Index from './containers/layout/index'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
class App extends Component {
  
  constructor(props: any) {
    super(props);
  }
 
  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Index} />
          </Switch>
        </BrowserRouter>
      </LocaleProvider>
    );
  }
}
 
export default App;
