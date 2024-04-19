import Endpoints from "../Endpoints";

const UserController = {};

UserController.getUser = async (token) => {
  try {
    const endpoint = Endpoints.User.GetUser(token);
    const response = await fetch(endpoint.URL, {
      method: endpoint.Method,
      headers: endpoint.Headers,
    });
    if (!response.ok) throw new Error("Não foi possivel localizar o usuário.");
    const data = await response.json();
    return { error: false, data: data.data, message: data.message };
  } catch (err) {
    return { error: true, data: {}, message: err.message };
  }
};

UserController.disableUser = async (userID, token) => {
  try {
    const endpoint = Endpoints.User.DisableUser(token, userID);
    const response = await fetch(endpoint.URL, {
      method: endpoint.Method,
      headers: endpoint.Headers,
    });
    if (!response.ok)
      throw new Error("Não foi possivel realizar a requisição no momento.");
    const data = await response.json();
    return { error: false, data: data.data, message: data.message };
  } catch (err) {
    return { error: true, data: {}, message: err.message };
  }
};

UserController.enableUser = async (userID, token) => {
  try {
    const endpoint = Endpoints.User.EnableUser(token, userID);
    const response = await fetch(endpoint.URL, {
      method: endpoint.Method,
      headers: endpoint.Headers,
    });
    if (!response.ok)
      throw new Error("Não foi possivel realizar a requisição no momento.");
    const data = await response.json();
    return { error: false, data: data.data, message: data.message };
  } catch (err) {
    return { error: true, data: {}, message: err.message };
  }
};

UserController.changePassword = async (userID, password, token) => {
  try {
    const endpoint = Endpoints.User.ChangePassword(token, userID, password);
    const response = await fetch(endpoint.URL, {
      method: endpoint.Method,
      headers: endpoint.Headers,
      body: JSON.stringify(endpoint.Body),
    });
    if (!response.ok)
      throw new Error("Não foi possivel realizar a requisição no momento.");
    const data = await response.json();
    return { error: false, data: data.data, message: data.message };
  } catch (err) {
    return { error: true, data: {}, message: err.message };
  }
};

UserController.createUser = async (user, token) => {
  try {
    const endpoint = Endpoints.User.CreateUser(token, user);
    const response = await fetch(endpoint.URL, {
      method: endpoint.Method,
      headers: endpoint.Headers,
      body: JSON.stringify(endpoint.Body),
    });
    if (!response.ok)
      throw new Error("Não foi possivel criar o ticket no momento.");
    const data = await response.json();
    return { error: false, data: data.data, message: data.message };
  } catch (err) {
    return { error: true, data: {}, message: err.message };
  }
};

export default UserController;
