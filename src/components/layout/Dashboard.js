import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import LineChart from '../LineChart';
import TableChart from '../TableChart';
import tinytime from 'tinytime';
import { fetchAnswers } from '../../lib/api';

const dateFormat = tinytime('{YYYY}-{Mo}-{DD}', {
  padMonth: true,
  padDays: true,
});

const Layout = () => {
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate()-2);
  const [values, setValues] = useState({
    region: '',
    from: dateFormat.render(fromDate),
    to: dateFormat.render(new Date()),
  });
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAnswersInternal = async (values) => {
    setLoading(true);

    if (values && Object.keys(values).length) {
      setValues(values);
    }

    const body = await fetchAnswers(values);
    setLoading(false);
    setAnswers(body);
  };

  useEffect(() => {
    fetchAnswersInternal(values);
  }, []);

  return (
    <div className="h-screen flex bg-gray-100">
      <Sidebar onClick={(values) => fetchAnswersInternal(values)} />

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
                {/*<Stats />*/}

                <div className="mt-10 grid grid-flow-row grid-cols-2 gap-4">
                  {answers.map((q, qi) => (
                    <div key={qi}>
                      <TableChart {...q} />
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <LineChart answers={answers} values={values} />
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
