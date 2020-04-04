import React from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'Feb 04', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Feb 05', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Feb 06', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Feb 07', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Feb 08', uv: 3000, pv: 1398, amt: 2210,
    }
  ];

const LineChartGraph = () => {
    return (
      <div style={{ margin: "50px auto", height: "600px", background: "white", padding: "100px 25px"}}>
        <ResponsiveContainer>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
      </div>
    );
}

export default LineChartGraph;




