import { Select } from 'antd';
import intl from 'react-intl-universal';
import _ from 'lodash'
import http from 'axios'
import React, { Component } from 'react';
import { string } from 'prop-types';
const Option = Select.Option;
const SUPPOER_LOCALES = [
    {
      name: "English",
      value: "en-US"
    },
    {
      name: "简体中文",
      value: "zh-CN"
    },
  ];
export default class Language extends Component<{}, {
    initDone: Boolean,
    lang:string
} >{

    constructor(props: any) {
        super(props);
        this.state = {
            initDone: false,
            lang:'简体中文'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.loadLocales()
      }
    handleChange(value:string) {
        location.search = `?lang=${value}`;
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
            currentLocale = "zh-CN";
        }
        var language ='简体中文'
        var expresion =SUPPOER_LOCALES.find(ele=>ele.value === currentLocale)
        if (expresion) {
            language = expresion.name
        }
        this.setState({
            ...this.state,
            lang:language
       })
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
      }
    
    render() {
        console.log(this.state.lang)
        return (
            <Select key={this.state.lang} defaultValue={this.state.lang} style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="zh-CN">简体中文</Option>
                <Option value="en-US">English</Option>
            </Select>
        )
    }
}