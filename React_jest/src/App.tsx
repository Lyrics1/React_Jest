/*
 * @Author: lyricsfan 
 * @Date: 2019-03-06 20:03:27 
 * @Last Modified by: lyricsfan
 * @Last Modified time: 2019-03-06 21:17:44
 */
import intl from "react-intl-universal";
import _ from 'lodash'
import http from 'axios'
import React, { Component } from 'react';
import { LocaleProvider } from 'antd'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


import enUS from 'antd/lib/locale-provider/en_US';
import Index from './containers/layout/index'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

const SUPPOER_LOCALES = [
  {
    name: 'English',
    value:'en-US'
  },
  {
    name: "简体中文",
    value: "zh-CN"
  },
]
class App extends Component {

  state = { initDone: false };
  constructor(props:any) {
    super(props);
    
  }
  
  componentDidMount() {
    this.loadLocales()
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

  loadLocales() {
    /* * 
    determineLocale参数
        Url中的query参数
        cookie中的参数
        浏览器的当前语言(当没有配置query参数和cookie参数时) */
    let currentLocale = intl.determineLocale({
      urlLocaleKey: 'lang',
      cookieLocaleKey: 'lang',
    });
    if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
      currentLocale = "zh-CN"
    }
    http
      .get(`/local/${currentLocale}.json`)
      .then(res => {
        return intl.init({
          currentLocale,
          locales: {
            [currentLocale]:res.data
          }
       })
      })
      .then(() => {
        this.setState({ initDone: true })
    })
    // console.log(currentLocale,!_.find(SUPPOER_LOCALES,{value:currentLocale}))
  
  }
}

export default App;
