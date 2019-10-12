import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Suspense, lazy } from 'react';
import './RouterAnimate.less';

import loadable from '@loadable/component'
const home = loadable(() => import('@pages/home/index'));
const webgl = loadable(() => import('@pages/webgl/index'));
const mindmap = loadable(() => import('@pages/mindmap/index'));
const blogpage = loadable(() => import('@pages/blog/index'));
const article = loadable(() => import('@pages/blog/subpages/article/index'));
import Article from '@pages/blog/subpages/article/index'


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

          <main>
            <TransitionGroup>
              <CSSTransition
                classNames="fade"
                timeout={800}
              >

                <Switch>
                  <Route exact path='/' component={home}></Route>
                  <Route path='/blog' component={blogpage}></Route>
                  <Route path='/mindmap' component={mindmap}></Route>                  
                  <Redirect to="/" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </main>
        </Router>
      </div>
    )
  }
}

export default AppRouter;