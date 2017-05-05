import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
  <SkiDayList days={[
    {
      resort: "Squaw Valley",
      date: new Date("1/2/2017"),
      powder: true,
      backcountry: false
    },
    {
      resort: "Kirkwood",
      date: new Date("3/21/2017"),
      powder: false,
      backcountry: false
    },
    {
      resort: "Mt. Tallac",
      date: new Date("4/8/2017"),
      powder: false,
      backcountry: true
    },
  ]}/>,
  document.getElementById('react-container')
)