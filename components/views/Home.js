const kelvinToFahrenheit = kelvinTemp =>
    Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);




export default (st) => `<h3>
Weather in Springfield is ${kelvinToFahrenheit(st.weather.temp)}F, Feels
like ${kelvinToFahrenheit(st.weather.feelsLike)}F
</h3>

Hi! My name is Clay Grisham and I am a recovering alcoholic. I am 24 years old, that may sound young but age does not have a restriction for addiction. I am typing this today confidently telling the world that I am 14 months sober from alcohol and you can be too. The road is long and very tough but with a stable support system or simply some resources, you too can achieve the goal of sobriety like I have.
<div id=opening>
<p>Together we can break the stigma</p>
</div>
`;
