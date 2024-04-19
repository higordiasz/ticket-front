const BASE_URL = "http://localhost:3333/";

const LoginEndpoints = {};

LoginEndpoints.Login = (username, password, language = "pt-br") => {
  return {
    Method: "POST",
    URL: `${BASE_URL}login?lang=pt-br`,
    Headers: {
      "Content-Type": "application/json",
    },
    Body: {
      username: username,
      password: password,
    },
  };
};

LoginEndpoints.CheckToken = (token, language = "pt-br") => {
  return {
    Method: "POST",
    URL: `${BASE_URL}login/check?lang=pt-br`,
    Headers: {
      "Content-Type": "application/json",
    },
    Body: {
      token: token,
    },
  };
};

export default LoginEndpoints;
