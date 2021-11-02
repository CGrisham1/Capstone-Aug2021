const kelvinToFahrenheit = kelvinTemp =>
    Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);




export default (st) => `<h3>
Weather in Springfield is ${kelvinToFahrenheit(st.weather.temp)}F, Feels
like ${kelvinToFahrenheit(st.weather.feelsLike)}F
</h3>

<div id=opening>
<p>Together we can break the stigma</p>
</div>
`;
