import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link ,Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Suspense, lazy } from 'react';
import './RouterAnimate.less';
import RouterConf from './RouterConf.js';


class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};


  }
  render() {
    const { children, className } = this.props
    return (
      <div className={"Router " + className}>

        <Router>

          {children}
          {/* <div className="testLess">测试样式是否生效</div> */}
          <TransitionGroup>
            <CSSTransition
              classNames="fade"
              timeout={800}
            >
              
              <Switch>
                {
                  Object.keys(RouterConf).map((key, idx) => {
                    const el = RouterConf[key];
                    return (

                      <Route exact path={el.url} component={el.page} key={idx}></Route>
                    )
                  })
                }
              </Switch>
            </CSSTransition>
          </TransitionGroup>

        </Router>
      </div>
    )
  }
}

export default AppRouter;