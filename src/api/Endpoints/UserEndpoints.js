const BASE_URL = "http://localhost:3333/user/";

const UserEndpoints = {};

UserEndpoints.GetUser = (token, language = "pt-br") => {
  return {
    Method: "GET",
    URL: `${BASE_URL}get?lang=${language}`,
    Headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
};

UserEndpoints.DisableUser = (token, userID, language = "pt-br") => {
  return {
    Method: "GET",
    URL: `${BASE_URL}disable/${userID}?lang=${language}`,
    Headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
};

UserEndpoints.EnableUser = (token, userID, language = "pt-br") => {
  return {
    Method: "GET",
    URL: `${BASE_URL}enable/${userID}?lang=${language}`,
    Headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
};

UserEndpoints.ChangePassword = (
  token,
  userID,
  password,
  language = "pt-br"
) => {
  return {
    Method: "POST",
    URL: `${BASE_URL}password?lang=${language}`,
    Headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    Body: {
      newPassword: password,
      userID: userID,
    },
  };
};

UserEndpoints.CreateUser = (token, user, language = "pt-br") => {
  return {
    Method: "POST",
    URL: `${BASE_URL}create?lang=${language}`,
    Headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    Body: {
      username: user.username,
      password: user.password,
      name: user.name,
      email: user.email,
      type: user.type,
      company: user.company,
      departments: user.departments,
    },
  };
};

export default UserEndpoints;
