import React, {Component} from 'react'
import { Row, Col, PageHeader, Tabs} from '../node_modules/antd'
import {time, consumptionData, carbonEmissions, reducedCarbonEmissions} from './assets/consumptionData'
import Appliance from './components/appliance'
import Graph from './components/graph'

import appliances from './assets/appliances'
import '../node_modules/antd/dist/antd.css'
import './App.scss';

const { TabPane } = Tabs;

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
        <div className = 'Nav-container'>
          <PageHeader className = 'Nav' title = 'Home'/>
        </div>
        <div className = 'tab-container'>
          <Tabs defaultActiveKey="1"  className = 'appliance-container'>
            <TabPane tab="Device" key="1">
              <Appliance appliance = {appliances['Television'].name} applianceIcon = {(this.state.television) ? appliances['Television'].src[0] : appliances['Television'].src[1]} applianceStatus = {appliances['Television'].status[0]}/>
            </TabPane>
            <TabPane tab="Home" key="2">
              
            </TabPane>
          </Tabs>
        </div>
            
            
          
        
        {/* <Row>
          <Col span = {24} className = 'graph-container'>
            <Graph/>
          </Col>
        </Row> */}

      </div>
    );
  }
}

