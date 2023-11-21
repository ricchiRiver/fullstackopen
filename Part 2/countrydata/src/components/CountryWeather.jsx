import weatherService from "../services/weathers"
import { useState, useEffect } from "react"

const CountryWeather = ({country}) => {
    const [data, setData] = useState(null)
    
    useEffect(() => {
        weatherService.get(country.name.common)
            .then(d => setData(d))
    },[])

    if(data){
        return(
            <section>
                <h2>Weather in {country.name.common}</h2>
                <p>temperature {data.current.temp_c} Celsius</p>
                <p>wind {data.current.wind_kph/3.6} m/s</p>
            </section>
        )
    }
}

export default CountryWeather