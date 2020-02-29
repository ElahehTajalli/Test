import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class Charts extends Component {
  constructor () {
    super()

    this.state = {
      options: {
        xaxis: {
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          labels: {
            style: {
              colors: '#ffffff',
              fontSize: '12px'
            }
          },
          axisBorder: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#ffffff',
              fontSize: '12px'
            },
            offsetX: -10
          }
        },
        chart: {
          height: 350,
          type: 'area',
          zoom: {
            enabled: false
          },
          background: 'linear-gradient(90deg, rgba(253,195,56,1) 50%, rgba(255,218,130,1) 100%)',
          toolbar: {
            show: false
          }
        },
        stroke: {
          curve: 'smooth'
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#ffffff'],
        fill: {
          colors: '#ffffff',
          type: 'gradient',
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.15
          }
        },
        grid: {
          show: false
        },
        title: {
          text: 'Week',
          align: 'right',
          style: {
            color: '#ffffff',
            fontSize: '17px'
          },
          offsetY: 15,
          offsetX: -15
        }
      },
      series: [
        {
          data: [16, 32, 25, 40, 33, 48, 27]
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
            type='area'
            width='500'
          />
        </div>
      </div>

    )
  }
}
