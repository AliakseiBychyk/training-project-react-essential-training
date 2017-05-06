import React from 'react'
import { render } from 'react-dom'
import './stylesheets/SkiDayList.scss'
import './stylesheets/SkiDayCount.scss'
import './stylesheets/Menu.scss'
import { App } from './components/App.js'
import { Whoops404 } from './components/Whoops404.js'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="list-days" component={App} />
    <Route path="add-day" component={App} />
    <Route path="*" component={Whoops404} />
  </Router>,
  document.getElementById('react-container')
)