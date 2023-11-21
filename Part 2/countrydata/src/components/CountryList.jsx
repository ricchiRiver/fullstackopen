import CountryItem from "./CountryItem"

const CountryList = ({list}) => 
    <ul>
        {list.map(c => <CountryItem key={c.cca2} country={c}/>)}
    </ul>

export default CountryList