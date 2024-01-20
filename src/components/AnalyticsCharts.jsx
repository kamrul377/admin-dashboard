import React from 'react'
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const AnalyticsCharts = ({ title, data, datakey }) => {


    return (
        <div className='bg-white mt-4 shadow-sm rounded p-1 '>

            <h1 className='heading'>{title}</h1>


            <ResponsiveContainer width="100%" aspect={5 / 2}>

                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis />
                    <Line type='monotone' dataKey={datakey} />
                    <Tooltip />
                    <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />
                    <Legend />
                </LineChart>

            </ResponsiveContainer>

        </div>
    )
}

export default AnalyticsCharts