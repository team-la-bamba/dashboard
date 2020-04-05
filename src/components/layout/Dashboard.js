import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from '../Header';
import Footer from './Footer';
import LineChart from '../LineChart';
import TableChart from '../TableChart';
import tinytime from 'tinytime';
import { fetchAnswers } from '../../lib/api';
import LanguagePicker from '../LanguagePicker';

const dateFormat = tinytime('{YYYY}-{Mo}-{DD}', {
  padMonth: true,
  padDays: true,
});

const langs = {
  en: {
    appTitle: 'Crisistemperature',
    appLang: 'en',
    all: 'All',
    select: 'Select',
    selectRegion: 'Select region',
    loading: 'Loading...',
    filteringOptions: 'Filtering options',
    show: 'Show',
    from: 'From',
    to: 'To',
    question: 'Question',
    statistics: 'Statistics',
    municipality: 'Municipality',
    totalDiff: 'Total number of replies compared<br /> to yesterday',
    lineChartTitle: 'Number of responses over time',
  },
  sv: {
    appTitle: 'Kristempen',
    appLang: 'sv',
    all: 'Alla',
    select: 'Välj',
    selectRegion: 'Välj region',
    loading: 'Laddar...',
    filteringOptions: 'Filtreringsval',
    show: 'Visa',
    from: 'From',
    to: 'To',
    question: 'Fråga',
    statistics: 'Statistik',
    municipality: 'Kommun',
    totalDiff: 'Totalt antal svar<br />jämfört med igår',
    lineChartTitle: 'Antal svar över tid',
  },
};

const Layout = () => {
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 2);
  const [values, setValues] = useState({
    region: '',
    from: dateFormat.render(fromDate),
    to: dateFormat.render(new Date()),
  });
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState(langs.sv);

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
  }, [values]);

  return (
    <div className="h-screen flex bg-gray-100 border-t-4 border-solid border-blue-500 bg-gray-50">
      <Sidebar
        onClick={(values) => fetchAnswersInternal(values)}
        language={language}
      >
        <LanguagePicker onClick={(lang) => setLanguage(langs[lang])} />
      </Sidebar>

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main
          className="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6"
          tabIndex="0"
        >
          <Header language={language} />
          {loading ? (
            <p className="text-center">{language.loading}</p>
          ) : (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                {/*<Stats />*/}

                <div className="mt-10 grid grid-flow-row grid-cols-2 gap-4">
                  {answers.map((q, qi) => (
                    <div key={qi}>
                      <TableChart {...q} values={values} language={language} />
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <LineChart
                    answers={answers}
                    values={values}
                    language={language}
                  />
                </div>
              </div>
            </div>
          )}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
