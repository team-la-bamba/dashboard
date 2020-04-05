import React, { useState } from 'react';

import Select from './Select';
import DatePicker from './DatePicker';
import Button from './Button';
import tinytime from 'tinytime';

const dateFormat = tinytime('{YYYY}-{Mo}-{DD}', {
  padMonth: true,
  padDays: true
});

const regions = [
  'Blekinge',
  'Dalarna',
  'Gotland',
  'Gävleborg',
  'Halland',
  'Jämtland Härjedalen',
  'Jönköpings län',
  'Kalmar län',
  'Kronoberg',
  'Norrbotten',
  'Skåne',
  'Stockholms län',
  'Sörmland',
  'Uppsala län',
  'Värmland',
  'Västerbotten',
  'Västernorrland',
  'Västmanland',
  'Västra Götaland',
  'Örebro län',
  'Östergötland'
];

const Filter = ({ onClick = () => {}, language = {} }) => {
  const [values, setValues] = useState({
    from: dateFormat.render(new Date())
  });

  return (
    <div>
      <h3 className="font-medium text-gray-900">{language.filteringOptions}</h3>

      <div className="mt-5">
        <label>{language.selectRegion}</label>

        <div className="inline-block relative w-full">
          <Select
            label={language.select}
            placeholder={language.all}
            options={regions.map(r => {
              return {
                label: r,
                value: r
              };
            })}
            onChange={selected => {
              setValues({
                ...values,
                region: selected
              });
            }}
          />
        </div>
      </div>

      <DatePicker
        onChange={dates => {
          setValues({
            ...values,
            from: dateFormat.render(dates.start),
            to: dateFormat.render(dates.end)
          });
        }}
        language={language}
      />

      <Button onClick={() => onClick(values)}>{language.show}</Button>
    </div>
  );
};

export default Filter;
