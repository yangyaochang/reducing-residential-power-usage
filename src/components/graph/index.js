import React, { Component } from 'react'
import Chart from "../../../node_modules/chart.js";
import {time, consumptionData, carbonEmissions, reducedCarbonEmissions} from '../../assets/consumptionData'



export default class Graph extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
        this.state = {

        }
        // 將新data 更新到 state 來再重新 render 圖表
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'bar',
            labels: time,
            // x axis
            datasets: [{
                label: 'My data',
                // name of the dataset
                data: [10, 20, 30, ...],
                // data
                backgroundColor: '#112233'
            }]
        });

        window.setInterval(() => {
            this.setState({
                feeds: getFeeds()
            })
        }, 5000)
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.label);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.update();
    }

    render() {
        return(
            <canvas ref={this.chartRef}/>
        )
    }
}