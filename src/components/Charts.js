import React from 'react'
import Chart from 'react-google-charts'

const data = [
  ['age', 'weight'],
  ['Sun', 16],
  ['Mon', 32],
  ['Tue', 25],
  ['Wed', 40],
  ['Thu', 33],
  ['Fri', 45],
  ['Sat', 27]
]

export default class Charts extends React.Component {
  render () {
    return (
      <div className='App'>
        <Chart
          chartType='AreaChart'
          width='100%'
          height='600px'
          legendToggle
          data={data}
        />
      </div>
    )
  }
}
