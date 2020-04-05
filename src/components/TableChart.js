import React, { useEffect, useState } from 'react';
import { fetchAnswers } from '../lib/api';
import tinytime from 'tinytime';

const dateFormat = tinytime('{YYYY}-{Mo}-{DD}', {
  padMonth: true,
  padDays: true,
});

const realDiff = (a, b) => {
  return a - b === 0 ? 0 : 100 * Math.abs((a - b) / b);
};

const TableChartRow = ({ p = {}, qid = '', values = {} }) => {
  const [total, setTotal] = useState(0);

  const fetchData = async (values) => {
    const body = await fetchAnswers(values);
    if (body.length && body[0].places.length) {
      setTotal(body[0].places[0].total);
    }
  };

  useEffect(() => {
    const fromDate = new Date(values.from);
    fromDate.setDate(fromDate.getDate() - 1);

    fetchData({
      question: qid,
      from: dateFormat.render(fromDate),
      to: dateFormat.render(fromDate),
      place: p.place,
    });
  }, [p.place, qid, values.from]);

  let diff = 0;
  const moreLastDay = total > p.total;
  if (moreLastDay) {
    diff = realDiff(p.total, total);
  } else {
    diff = realDiff(total, p.total);
  }

  diff = diff.toFixed(0);

  return (
    <>
      <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
        <dt className="text-sm leading-5 font-medium text-gray-500">
          {p.place}
        </dt>

        {p.answers.map((a, ai) => (
          <dt key={ai} className="text-sm leading-5 font-medium text-gray-500">
            {a.count}
          </dt>
        ))}
        <dd
          className={`mt-1 text-sm leading-5 text-gray-900 sm:mt-0 flex text-${
            moreLastDay ? 'red' : 'green'
          }-500`}
        >
          <div className="mr-2">{diff}%</div>
          {moreLastDay ? (
            <svg
              width="16"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-down"
              className="svg-inline--fa fa-arrow-down fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
              ></path>
            </svg>
          ) : (
            <svg
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-up"
              className="svg-inline--fa fa-arrow-up fa-w-14"
              role="img"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              />
            </svg>
          )}
        </dd>
      </div>
    </>
  );
};

const TableChart = ({ question = {}, places = [], values = {}, language = {} }) => {
  return (
    <div className="bg-white shadow overflow-hidden  sm:rounded-lg">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {language.question}: {question.text[language.appLang]}
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          {language.statistics}
        </p>
      </div>

      <div className="px-4 py-5 sm:p-0">
        <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 sm:py-5">
          <div className="text-sm leading-5 font-medium text-gray-500">
            {language.municipality}
          </div>

          {question.answers.map((a, ai) => (
            <div
              key={ai}
              className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0"
            >
              {a.text[language.appLang]}
            </div>
          ))}

          <div className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 flex">
            <div className="mr-2" dangerouslySetInnerHTML={{__html:language.totalDiff}}>
            </div>
          </div>
        </div>

        <dl>
          {places.map((p, pi) => (
            <TableChartRow key={pi} p={p} qid={question._id} values={values} />
          ))}
        </dl>
      </div>
    </div>
  );
};

export default TableChart;
