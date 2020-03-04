import React, { Component } from 'react'
import Chart from '../../../node_modules/chart.js'
import { data } from './data'
import {time, consumptionData} from '../../assets/consumptionData'
import './graph.scss'
let myLineChart


export default class Graph extends Component {
    constructor(props) {
        super(props)
        this.chartRef = React.createRef();
        this.state = {
            time: [time[0]],
            cousumption: [consumptionData[0]],
            nextIndex: 1
        }
    }

    
    updateData = () => {
        let nextIndex = this.state.nextIndex
        let d = {
            t: this.state.time,
            c: this.state.cousumption
        } 
        d.t.push(time[nextIndex])
        d.c.push(consumptionData[nextIndex])
        nextIndex++
        this.setState({
            time: d.t,
            cousumption: d.c,
            nextIndex: nextIndex
        }, () => {
            
            console.log(this.state)
        })
    }



    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: [time[0]],
                datasets: [
                    {
                        label: "Power usage",
                        data: [consumptionData[0]],
                        backgroundColor: 'rgb(235, 235, 235)',
                        borderColor: 'rgb(0, 150, 255)',
                        fill: false,
                        // fill the area under line
                    }
                ]
            },
            
            options: {
                //Customize chart options
                responsive: true,
                scales: {
					x: {
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Month'
						}
					},
					y: {
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}
				},
            }
        });
    }

    componentDidMount() {
        this.buildChart()
        // window.setInterval(this.updateData, 2000)
    }

    componentDidUpdate() {
        myLineChart.data.labels = this.state.time
        myLineChart.data.datasets[0].data = this.state.cousumption
        myLineChart.update()
    }
    

    render() {
        return(
            <canvas ref={this.chartRef}/>
        )
    }
}