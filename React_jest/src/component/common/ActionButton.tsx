/*
 * @Author: lyricsfan 
 * @Date: 2019-03-07 19:45:39 
 * @Last Modified by: lyricsfan
 * @Last Modified time: 2019-03-07 21:37:30
 */

import React, { Component } from 'react';
import { Button } from 'antd';
import {ActionButtonComps} from './index'

export  class ActionButton extends Component<ActionButtonComps<string>
, {
    disabled:boolean
}>{
    constructor(props:any) {
        super(props);
        this.state = {
            disabled: false  
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        if (this.props.disabled) {
            const disabled = this.props.disabled;
             this.setState({
                 disabled: disabled
             })
        }
    }
    handleClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
    render() {
        return (
            <Button  type="primary" style={this.props.uiOptions}  disabled={this.state.disabled} onClick={this.handleClick} >{this.props.value}</Button>
        )
    }
}