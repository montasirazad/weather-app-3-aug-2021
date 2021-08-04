// ---------------- API Data ----------------

// APi source :https://www.weatherapi.com/

// API Key:  a965f3a885504e2cba4121820210308
// API Url=` https://api.weatherapi.com/v1/current.json?key={API key}=${city name}&aqi=yes`

// live site : https://montasirazad.github.io/weather-app-3-aug-2021/




const searchCity = () => {
   const inputCity = document.getElementById('search-field').value
   const url = `https://api.weatherapi.com/v1/current.json?key= a965f3a885504e2cba4121820210308&q=${inputCity}&aqi=yes`
   console.log(url)
   fetch(url)
      .then(res => res.json())
      .then(data => updateUI(data.location, data.current))

}


const updateUI = (location, current) => {


   document.getElementById("weather-detail").style.display='block'
   document.getElementById("icon").setAttribute('src', `${current.condition.icon}`)
   document.getElementById("city").innerText = location.name;
   document.getElementById("country").innerText = location.country;

   document.getElementById("temperature-celsius").innerText = `${current.temp_c} °C`;
   //for degree symbol press alt + 0176 on keyboard
   document.getElementById("temperature-fahrenheit").innerText = `${current.temp_f} °F`;
   document.getElementById("feelslike_c").innerText = `Feels like: ${current.feelslike_c} °C`;
   document.getElementById("feelslike_f").innerText = `Feels like: ${current.feelslike_f} °F`;

   document.getElementById("humidity").innerText = `Humidity: `+ current.humidity
   document.getElementById("condition").innerText = current.condition.text
   document.getElementById("last-update").innerText = `Last Updated: `+ current.last_updated
   document.getElementById("uv").innerText = `Uv: ` + current.uv;
   document.getElementById("wind_kph").innerText = `km/h : ` + current.wind_kph;
   document.getElementById("wind_dir").innerText = `Wind direction: ` + current.wind_dir;
   document.getElementById("cloud").innerText = 'Cloud: ' + current.cloud + '%';
   console.log(location.name)

}
