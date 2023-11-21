import CountryWeather from "./CountryWeather"

const CountryCard = ({country, weather}) => {
    const cardStyle = {
        width: 300,
        position: "relative"
    }
    const imageStyle = {
        width: "100%"
    }

    return (
        <div style={cardStyle}>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital[0]}<br/>area {country.area}</p>
            <section>
                <b>languages:</b>
                <ul>
                    {Object.keys(country.languages).map(l => <li key={l}>{country.languages[l]}</li>)}
                </ul>
            </section>
            <section>
                <img style={imageStyle} src={country.flags.svg} ></img>
            </section>
            {weather && <CountryWeather country={country}/>}
        </div>
    )
}
export default CountryCard