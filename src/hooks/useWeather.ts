import axios from "axios"
import { SearchType } from "../types"

export default function useWeather() {

  const fetchWeather = async (search : SearchType) => {

    const appId = 'ef468278f9fb65817877ac1faaa19fb6'
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
      
      const { data } = await axios(geoUrl)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    fetchWeather
  }
}