import { createClass } from 'react'
import { SkiDayList } from './SkiDayList.js'
import { SkiDayCount } from './SkiDayCount.js'

export const App = createClass({
  getInitialState() {
    return {
      allSkiDays: [
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
  ]
    }
  },
  countDays(filter) {
    const {allSkiDays} = this.state
    return allSkiDays.filter(day => filter ? day[filter] : day).length
  },
  render() {
    return (
      <div className="app">
        <SkiDayList days={this.state.allSkiDays} />
        <SkiDayCount  total={this.countDays()}
                      powder={this.countDays("powder")}
                      backcountry={this.countDays("backcountry")} />
      </div>  
    )
  }
})