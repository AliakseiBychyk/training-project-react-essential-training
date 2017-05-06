import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App.js'
// import { SkiDayList } from './components/SkiDayList'
// import { SkiDayCount } from './components/SkiDayCount'

window.React = React

// render(
//   <SkiDayCount backcountry={28} />,
//   document.getElementById('react-container')
// )

render(
  <App />,
  document.getElementById('react-container')
)