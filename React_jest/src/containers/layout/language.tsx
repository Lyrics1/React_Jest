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
    lang:string
} >{

    constructor(props: any) {
        super(props);
        this.state = {
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
      var language = '简体中文'
      const currentLocale = new URLSearchParams(location.search);
     const lang = currentLocale.get('lang')
        var expresion =SUPPOER_LOCALES.find(ele=>ele.value === lang)
        if (expresion) {
            language = expresion.name
        }
        this.setState({
            ...this.state,
            lang:language
       })
      }
    
    render() {
        return (
            <Select key={this.state.lang} defaultValue={this.state.lang} style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="zh-CN">{intl.get('CHINESE')}</Option>
            <Option value="en-US">{intl.get('ENGLISH')}</Option>
            </Select>
        )
    }
}