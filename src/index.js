import React from 'react'
import { render } from 'react-dom'
// import { SkiDayList } from './components/SkiDayList'
import { SkiDayCount } from './components/SkiDayCount'
// import { SkiDayCount } from './components/SkiDayCount-createClass'
// import { SkiDayCount } from './components/SkiDayCount-ES6'

window.React = React

render(
  <SkiDayCount />,
  document.getElementById('react-container')
)

// render(
//   <SkiDayList days={[
//     {
//       resort: "Squaw Valley",
//       date: new Date("1/2/2017"),
//       powder: true,
//       backcountry: false
//     },
//     {
//       resort: "Kirkwood",
//       date: new Date("3/21/2017"),
//       powder: false,
//       backcountry: false
//     },
//     {
//       resort: "Mt. Tallac",
//       date: new Date("4/8/2017"),
//       powder: false,
//       backcountry: true
//     },
//   ]}/>,
//   document.getElementById('react-container')
// )