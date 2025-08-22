import axios from "axios";

// 공통적으로 사용하는 axios를 설정 
const axiosInstance = axios.create({
  baseURL:`${import.meta.env.VITE_SERVER_URL}`,
  headers: {
    'Content-Type' : 'application/json; charset=utf-8'
  }
});

// 요청헤더에 jwt 추가해주는 함수
function addJwtToRequest(config) {
  const jwt = sessionStorage.getItem('jwt');

  if(jwt)
    config.headers['Authorization'] = jwt;

  return config;
}

// axiosInstance로 요청하기 전 작동하는 인터셉터
axiosInstance.interceptors.request.use(
  (config) => addJwtToRequest(config),
  (error) => Promise.reject(error)
)

export default axiosInstance;