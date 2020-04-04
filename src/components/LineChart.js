import React from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
      name: '06 Feb', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: '07 Feb', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: '08 Feb', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: '09 Feb', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: '10 Feb', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: '11 Feb', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: '12 Feb', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

const LineChartGraph = () => {
    return (
      <div style={{ margin: "50px auto", height: "600px", background: "white", padding: "100px 25px"}}>
        <ResponsiveContainer>
            <LineChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#4299E1" />
                <Line type="monotone" dataKey="uv" stroke="#4C51BF" />
            </LineChart>
        </ResponsiveContainer>
      </div>
    );
}

export default LineChartGraph;
