import axios from "axios";

export const COIN_API_URL = "https://api.coinpaprika.com/v1/tickers?quotes=KRW";
// api 주소

export const DETAILCOIN_API_URL = "https://api.coinpaprika.com/v1/tickers";

// //
export const BACKEND_API_URL = "http://localhost:4000/api";

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;
