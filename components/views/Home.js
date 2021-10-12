const kelvinToFahrenheit = kelvinTemp =>
    Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default (st) => `<h3>
Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
like ${kelvinToFahrenheit(st.weather.feelsLike)}F
</h3>
`;


// in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
// like ${kelvinToFahrenheit(st.weather.feelsLike)}F