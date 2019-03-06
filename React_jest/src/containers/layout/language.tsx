import { Select } from 'antd';
import React, { Component } from 'react';
const Option = Select.Option;

export default class Language extends Component{
    constructor(props:any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(value:string) {
        console.log(value)
    }
    render() {
        return (
            <Select defaultValue="中文" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="Chinese">中文</Option>
                <Option value="English">英文</Option>
            </Select>
        )
    }
}