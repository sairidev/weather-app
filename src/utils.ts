export const getData = async (key: string, city: string) => {
  const data = {};
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
  );

  const result = await res.json();
  if (result?.error) {
    return { error: result?.error?.message };
  }

  data.country = result.location.country;
  data.localtime = result.location.localtime;
  data.weather = {
    condition: result.current.condition.text,
    icon: result.current.condition.icon.replace('//', 'http://'),
    dewpoint_c: result.current.dewpoint_c,
    dewpoint_f: result.current.dewpoint_f,
    temp_c: result.current.temp_c,
    temp_f: result.current.temp_f,
  };

  return data;
};
