import http from "../http-common";

const login = () => {
  // console.log(httpCommon)
  return http.post("/login");
};

const APIService = {
  // getAll,
  login, 
};

export default APIService;