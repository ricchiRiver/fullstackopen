import axios from 'axios'

const defaultUrl = "http://api.weatherapi.com/v1/"
const apiKey = import.meta.env.VITE_SOME_KEY

const get = country => 
    axios
        .get(`${defaultUrl}current.json?key=${apiKey}&q=${country}&aqi=no`)
        .then(r => r.data)

export default {get}