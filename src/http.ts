import axios from "axios";

//axios.defaults.headers.common["api_key"] = process.env.VUE_APP_WEATHER_API_KEY;
axios.defaults.baseURL = "https://api.derkweather.com";

export default axios;
