let url = 'http://localhost:3000';
if (process.env.NODE_ENV === 'production') {
  url = 'https://api.labamba.space';
}

const serialize = (obj) => {
  let str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
};

export const fetchAnswers = async (values) => {
  return await (await fetch(url + '/answers?' + serialize(values))).json();
};

export const fetchTimeseries = async (values) => {
  return await (await fetch(url + '/timeseries?' + serialize(values))).json();
};
