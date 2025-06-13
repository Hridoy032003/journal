import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: ' 1 month',
        Happy: 1800,
        Sad: 2600,
        Angry: 2000,
        Bored: 1400,
        Confused: 1354,
        Love: 2158,
        amt:1254
   
    },
    {
        name: '2 month',
        Happy: 2654,
        Sad: 1567,
        Angry: 2546,
        Bored: 2400,
        Confused: 852,
        Love: 697,
        amt: 1247
    },
    {
        name: '3 month',
        Happy: 1800,
        Sad: 2100,
        Angry: 2420,
        Bored: 1400,
        Confused: 1400,
        Love: 2600,
        amt: 1299
    },
    {
        name: '4 month',
        Happy: 1860,
        Sad: 2445,
        Angry: 2524,
        Bored: 2445,
        Confused: 1564,
        Love: 2564,
        amt: 1299
    },
    {
        name: '5 month',
        Happy: 2457,
        Sad: 653,
        Angry: 2155,
        Bored: 2400,
        Confused: 2400,
        Love: 2400,
        amt: 1299
    },
    {
        name: '6 month',
        Happy: 800,
        Sad: 2400,
        Angry: 2400,
        Bored: 2400,
        Confused: 2400,
        Love: 2400,
        amt: 1299
    },
    {
        name: '7 month',
        Happy: 800,
        Sad: 2400,
        Angry: 2400,
        Bored: 2400,
        Confused: 2400,
        Love: 2400,
        amt: 1299
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" className='mt-3'/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Happy" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Sad" stroke="red" />
                    <Line type="monotone" dataKey="Angry" stroke="blue" />
                    <Line type="monotone" dataKey="Bored" stroke="green" />
                    <Line type="monotone" dataKey="Confused" stroke="perple" />
                    <Line type="monotone" dataKey="Love" stroke="grey" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}