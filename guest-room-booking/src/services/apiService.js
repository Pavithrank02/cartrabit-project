import http from "../http-common";

const getAll = () => {
  // console.log(httpCommon)
  return http.get("/get-users");
};

const APIService = {
  getAll,
};

export default APIService;