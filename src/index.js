import React from 'react'
import { render } from 'react-dom'
import { CityVisitCount } from './components/CityVisitCount'

window.React = React

render(
  <CityVisitCount />,
  document.getElementById('react-container')
)