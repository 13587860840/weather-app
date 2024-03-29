import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    
    <div className="app">
         <div class="context">
          
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>

<div class="clock"></div>

    </div>


      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Search Location'
          type="text" />
      </div>
      <div className="container">

      <div id="loader">
        <div id="box"></div>
        <div id="hill"></div>
      </div>

        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{(data.main.temp.toFixed()-32)|1.8}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <h3>{data.weather[0].main}</h3> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <h2 className='bold'>{(data.main.feels_like.toFixed()-32)|1.8}°C</h2> : null}
              <h2>Feels</h2>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <h2>Humidity</h2>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <h2>Wind</h2>
            </div>
          </div>
        }


       
      </div>
    </div>
    
  );
}

export default App;
