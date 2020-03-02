import React, { Component } from 'react'
import { Card, Radio, Button} from 'antd'
import appliances from '../../assets/appliances'
import './appliance.scss';
import rightArrow from '../../icons/rightArrow.png'


export default class Appliance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.appliance,
            status: this.props.applianceStatus,
            icon: this.props.applianceIcon
        }
    }

    handleChange = e => { 
        switch (e.target.value) {
            case 'on' :
                this.setState({
                    status: 'on',
                    icon: appliances[this.state.name].src[0]
                })
                break
            case 'standby' :
                this.setState({
                    status: 'standby',
                    icon: appliances[this.state.name].src[2]
                })
                break
            case 'off' :
                this.setState({
                    status: 'off',
                    icon: appliances[this.state.name].src[1]
                })
                break
        }
    }

    render () {
        const status = this.state.status

        return (
            <Card cover = {<img alt = '' src={this.state.icon}/>} >
                <Button type="link" shape="round" icon={rightArrow}/>
                <p className = {`appliance-name ${status}`}>{this.props.appliance}</p>
                <Radio.Group defaultValue="on" buttonStyle="solid" size = 'small' className = 'status-container' onChange = {this.handleChange}>
                    <Radio.Button value="on" className = 'status'>On</Radio.Button>
                    <Radio.Button value="standby" className = 'status'>Standby</Radio.Button>
                    <Radio.Button value="off" className = 'status'>Off</Radio.Button>
                </Radio.Group>
            </Card>
        )
    }
}