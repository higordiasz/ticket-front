import Endpoints from "../Endpoints";
import md5 from "md5";

const LoginController = {};

LoginController.tryLogin = async (username, password) => {
  try {
    const endpoint = Endpoints.Login.Login(username, md5(password));
    const response = await fetch(endpoint.URL, {
      method: endpoint.Method,
      headers: endpoint.Headers,
      body: JSON.stringify(endpoint.Body),
    });
    console.log(response.status);
    if (!response.ok)
      throw new Error("Credenciais inválidas. Por favor, tente novamente.");
    // Autenticação bem-sucedida
    const data = await response.json();
    return { error: data.error, message: data.message, token: data.data.token };
  } catch (error) {
    return { error: true, message: error.message, token: "" };
  }
};

LoginController.checkLogin = async (token) => {
  try {
    const endpoint = Endpoints.Login.CheckToken(token);
    const response = await fetch(endpoint.URL, {
      method: endpoint.Method,
      headers: endpoint.Headers,
      body: JSON.stringify(endpoint.Body),
    });
    if (!response.ok)
      throw new Error("Token invalido. Por favor faça login novamente.");
    return { error: false, message: "Success", valid: true };
  } catch (error) {
    return { error: true, message: error.message, valid: false };
  }
};

export default LoginController;
