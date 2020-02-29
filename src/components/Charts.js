import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class Charts extends Component {
  constructor () {
    super()

    this.state = {
      options: {
        xaxis: {
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        chart: {
          height: 350,
          type: 'area'
        },
        stroke: {
          curve: 'smooth'
        }
      },
      series: [
        {
          data: [16, 32, 25, 40, 33, 45, 27]
        }
      ]
    }
  }

  render () {
    return (
      <div className='main-chart-div'>
        <div>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type='line'
            width='500'
          />
        </div>
      </div>

    )
  }
}
