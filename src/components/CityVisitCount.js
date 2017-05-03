import React from 'react'
import '../stylesheets/CityVisitCount.scss'

export const CityVisitCount = React.createClass({
  render() {
    return (
      <div className="city-visit-count">
        <div className="total-cities">
          <span>3 cities</span>  
        </div>
        <div className="europe-cities">
          <span>2 cities</span>  
        </div>
        <div className="non-europe-cities">
          <span>1 city</span>  
        </div>
      </div>
    )
  }
})