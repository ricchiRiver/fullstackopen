import { useState } from "react"
import CountryCard from "./CountryCard"

const CountryItem = ({country}) => {
    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show)
    }

    const label = show
        ? "hide"
        : "show"

    return (
        <li>
            {country.name.common} <button onClick={toggle}>{label}</button>
            {show && <CountryCard country = {country} weather={false}/>}
        </li>
    )
}

export default CountryItem