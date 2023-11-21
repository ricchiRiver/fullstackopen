import axios from 'axios'

const defaultUrl = "https://studies.cs.helsinki.fi/restcountries/api/"

const getAll = () => 
    axios  
        .get(`${defaultUrl}all`)
        .then(r => r.data)

const get = (name) =>
    axios
        .get(`${defaultUrl}name/${name}`)
        .then(r => r.data)

export default {getAll, get}