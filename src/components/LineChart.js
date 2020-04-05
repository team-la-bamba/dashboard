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

  let html = <p className="text-center">{language.loading}</p>;

  if (!loading) {
    html = (
      <div
        style={{
          margin: '50px auto',
          height: '600px',
          background: 'white',
          padding: '50px 25px 150px 25px',
        }}
      >
        <ResponsiveContainer>
          <AreaChart width={500} height={300} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#667EEA"
              fill="#A3BFFA"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div
      className="bg-white shadow overflow-hidden sm:rounded-lg"
      style={{ maxHeight: '600px' }}
    >
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="mb-6 text-center text-1xl leading-9 font-bold text-gray-900">
          {language.lineChartTitle}
        </h3>
        <div className="mb-6">{html}</div>
      </div>
    </div>
  );
};

export default LineChartGraph;
