/*
 * @Author: lyricsfan 
 * @Date: 2019-03-06 20:04:28 
 * @Last Modified by:   lyricsfan 
 * @Last Modified time: 2019-03-06 20:04:28 
 */
import * as React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
let rootElement = document.getElementById('root');

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}
        Promise.all([
            import('./App' /* webpackChunkName: 'core-app' */),
            import('./reducer/index'),
            import('redux' /* webpackChunkName: 'redux' */),
            import('redux-thunk'),
            import('redux-logger'),
            import('react-redux' /* webpackChunkName: 'react-redux' */),
            
        ])
            .then(([{ default: App }, 
                {default:reducer},
                { createStore, applyMiddleware, combineReducers, compose },
                { default: thunk },
                { default: logger  },
                { Provider }]) => {

                // const reducer = combineReducers(cyReducer);
                const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
                const store = createStore(
                    reducer,
                    applyMiddleware(thunk,logger)
                );
                (window as any).store = store;
                render(
                    <Provider store={store} >
                        <App />
                    </Provider>,
                    rootElement)
            })
