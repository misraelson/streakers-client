import React, { Component } from "react";
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';

export default class WelcomeChart extends Component {

  render() {

    let color = randomColor({
      count: 1,
      luminosity: 'light',
      format: 'rgba',
      alpha: 0.7
    });

    let dummyChartData = {
      labels: ['Practice Kung Fu'],
      datasets:[{
        data: [1],
        backgroundColor: color,
        borderColor: '#5D4954',
        borderWidth: 3.5,
        pointBackgroundColor: '#007bff'
      }]
    }

    let options = {
      maintainAspectRatio: true,
      cutoutPercentage: 20,
      legend: {
        display: false
      }
    }

    if (localStorage.accessToken) {
      return (
        <div className="welcome">
          <h1> Welcome To Streakers! </h1>
          <div className="chart">
            <Doughnut
              className="doughnut"
              data={dummyChartData}
              options={options}
            />
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="welcome">
          <h1> Welcome to Streakers </h1>
          <h4> Please login or register to get started 🌀 </h4>
          <div className="chart">
            <Doughnut
              className="doughnut"
              data={dummyChartData}
              options={options}
            />
          </div>
        </div>
      )
    }
  }
}
