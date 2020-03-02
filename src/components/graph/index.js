import React, { Component } from 'react'
import { ResponsiveBarCanvas } from '@nivo/bar'
import { data } from './data'
import {time, consumptionData} from '../../assets/consumptionData'
import './graph.scss'



export default class Graph extends Component {
    

    render() {
        return(
            <ResponsiveBarCanvas
                data={data}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 60, bottom: 50, left: 10 }}
                padding={0.15}
                groupMode="stacked"
                layout="horizontal"
                colors={{ scheme: 'red_blue' }}
                colorBy="id"
                axisLeft={null}
                axisTop={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendPosition: 'middle',
                    legendOffset: 36
                }}
                enableGridX={true}
                enableGridY={false}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                isInteractive={true}
            />
        )
    }
}