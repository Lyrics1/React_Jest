/*
 * @Author: lyricsfan 
 * @Date: 2019-03-07 19:45:25 
 * @Last Modified by: lyricsfan
 * @Last Modified time: 2019-03-07 21:36:45
 */

import styled from 'styled-components'
import React, { Component } from 'react';
import intl from 'react-intl-universal';
import Language from '../containers/layout/Language'
import {ActionButton} from './common/index'

const ViewLoginRegiest = styled.div`
   position:absolute;
   right:5%;
   .space{
     margin-left:10px;
   }
`
export  class ViewLoginRegiests extends Component{
  componentDidMount() {

  }
    render() {
      return (
        <ViewLoginRegiest>        
          <ActionButton uiOptions={{marginRight:'10px'}} value={intl.get('LOGIN')} />
          <ActionButton uiOptions={{marginRight:'10px'}} value={intl.get('REGIST')} />
          <Language />        
        </ViewLoginRegiest>
         
        )
    }
}
