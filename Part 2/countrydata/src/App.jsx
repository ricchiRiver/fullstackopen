import { useState, useEffect } from 'react'
import Search from './components/Search'
import Display from './components/Display'
import countryService from './services/countries'

const App = () => {
  const [query, setQuery] = useState('')
  const [countryList, setCountryList] = useState([])
  const [loading, setLoading] = useState([true])

  useEffect(() => {
    countryService.getAll()
      .then(r => setCountryList(r))
    setLoading(false)
  }, [])

  const handleQueryChange = e => {
    setQuery(e.target.value)
  }

  if(loading) return <p>Loading ...</p>

  return(
    <div>
      <Search queryState={query} onQueryChange={handleQueryChange}/>
      <Display queryState={query} countryList={countryList}/>
    </div>
  )

}

export default App
