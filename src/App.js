import React, {Component} from 'react'
import { Row, Col, PageHeader} from '../node_modules/antd'
import {time, consumptionData, carbonEmissions, reducedCarbonEmissions} from './assets/consumptionData'
import Appliance from './components/appliance'
import Graph from './components/graph'

import appliances from './assets/appliances'
import '../node_modules/antd/dist/antd.css'
import './App.scss';

export default class App extends Component{
  constructor() {
    super()
    this.state = {
      television: true,
      washingMachine: true,
      airConditioner: true,
      reducedCarbonEmissions: []
    }
  }

  render () {

    return (
      <div>
        <Row>
          <Col span = {24} className = 'Nav-container'>
            <PageHeader className = 'Nav' title = 'Home'/>
          </Col>
        </Row>
        <Row>
          <Col span = {24} className = 'appliance-container'>
            <Appliance appliance = {appliances['Television'].name} applianceIcon = {(this.state.television) ? appliances['Television'].src[0] : appliances['Television'].src[1]} applianceStatus = {appliances['Television'].status[0]}/>
          </Col>
        </Row>
        <Row>
          <Col span = {24} className = 'graph-container'>
            <Graph/>
          </Col>
        </Row>

      </div>
    );
  }
}

