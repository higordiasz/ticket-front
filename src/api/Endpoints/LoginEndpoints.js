const BASE_URL = "http://localhost:3333/";

const LoginEndpoints = {};

LoginEndpoints.Login = {
  Method: "POST",
  URL: `${BASE_URL}login`,
  Headers: {
    "Content-Type": "application/json",
  },
};

LoginEndpoints.CheckToken = {
  Method: "POST",
  URL: `${BASE_URL}check`,
  Headers: {
    "Content-Type": "application/json",
  },
};

export default LoginEndpoints;
