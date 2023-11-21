const Search = ({queryState, onQueryChange}) => 
    <>
        <label>find countries </label> <input value={queryState} onChange={onQueryChange}></input>
    </>

export default Search