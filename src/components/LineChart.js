import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { fetchTimeseries } from '../lib/api';
import tinytime from 'tinytime';

const dateFormat = tinytime('{YYYY}-{Mo}-{DD}', {
  padMonth: true,
  padDays: true,
});

const dateNameFormat = tinytime('{DD} {MM}', {
  padDays: true,
});

const LineChartGraph = ({ language = {}, values = {} }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async (values) => {
    setLoading(true);
    const body = await fetchTimeseries(values);
    setLoading(false);
    setData(body);
  };

  useEffect(() => {
    const fromDate = new Date(values.from);
    fromDate.setDate(fromDate.getDate() - 1);
    fetchData({
      ...values,
      from: dateFormat.render(fromDate),
    });
  }, [values]);

  let lineData = data.map((d) => {
    return {
      name: dateNameFormat.render(new Date(d.date)),
      pv: d.total,
    };
  });

  if (lineData.length === 1) {
    const fromDate = new Date(values.from);
    fromDate.setDate(fromDate.getDate() - 1);
    lineData = [
      {
        name: dateNameFormat.render(fromDate),
        pv: 0,
      },
      lineData[0],
    ];
  }

  if (loading) {
    return (
      <div
        style={{
          margin: '50px auto',
          height: '600px',
          background: 'white',
          padding: '100px 25px',
        }}
      >
        {language.loading}
      </div>
    );
  }

  return (
    <div
      style={{
        margin: '50px auto',
        height: '600px',
        background: 'white',
        padding: '100px 25px',
      }}
    >
      <h3 className="mb-6 text-center text-1xl leading-9 font-bold text-gray-900">
        {language.lineChartTitle}
      </h3>
      <ResponsiveContainer>
        <AreaChart width={500} height={300} data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="pv" stroke="#667EEA" fill="#A3BFFA" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartGraph;
