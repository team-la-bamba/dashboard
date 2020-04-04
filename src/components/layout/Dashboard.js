import React, { useState, useEffect } from 'react';

import Sidebar from './Sidebar';

import LineChart from '../LineChart';
import Stats from '../Stats';
import TableChart from '../TableChart';

const url = 'https://api.labamba.space';

const serialize = (obj) => {
  let str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
};

const Layout = () => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAnswers = (values) => {
    setLoading(true);
    fetch(url + '/answers?' + serialize(values))
      .then((res) => res.json())
      .then((body) => {
        setLoading(false);
        setAnswers(body);
      });
  };

  useEffect(() => {
    fetchAnswers();
  }, []);

  return (
    <div className="h-screen flex bg-gray-100">
      <Sidebar onClick={(values) => fetchAnswers(values)} />

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main
          className="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6"
          tabIndex="0"
        >
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                <Stats />

                <div className="mt-10 grid grid-flow-row grid-cols-2 gap-4">
                  {answers.map((q, qi) => (
                    <div key={qi}>
                      <TableChart {...q} />
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <LineChart />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Layout;
