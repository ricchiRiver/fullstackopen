import CountryCard from "./CountryCard"
import CountryList from "./CountryList"

const Display = ({queryState, countryList}) => {

    const filteredList = countryList.filter(c => c.name.common.toLowerCase().includes(queryState.toLowerCase()))
    let content = null;

    if(queryState === "" || filteredList.length === 0) return null
    
    filteredList.length > 10
        ? content = <p>Too many matches, specify another filter</p>
        : filteredList.length > 1
        ? content = <CountryList list = {filteredList}/>
        : content = <CountryCard country = {filteredList[0]} weather={true}/>

    return(
        <div>
            {content}
        </div>
    ) 
}

export default Display