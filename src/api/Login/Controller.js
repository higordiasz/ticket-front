import Endpoints from "../Endpoints";

const LoginController = {};

LoginController.tryLogin = async (username, password) => {
  try {
    const response = await fetch(Endpoints.Login.Login.URL, {
      method: Endpoints.Login.Login.Method,
      headers: Endpoints.Login.Login.Headers,
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    console.log(response.status);
    if (!response.ok)
      throw new Error("Credenciais inválidas. Por favor, tente novamente.");
    // Autenticação bem-sucedida
    const data = await response.json();
    return { error: data.error, message: data.message, token: data.token };
  } catch (error) {
    return { error: true, message: error.message, token: "" };
  }
};

LoginController.checkLogin = async (token) => {
  try {
    const response = await fetch(Endpoints.Login.CheckToken.URL, {
      method: Endpoints.Login.CheckToken.Method,
      headers: Endpoints.Login.CheckToken.Headers,
      body: JSON.stringify({
        token: token,
      }),
    });
    if (!response.ok)
      throw new Error("Token invalido. Por favor faça login novamente.");
    return { error: false, message: "Success", valid: true };
  } catch (error) {
    return { error: true, message: error.message, valid: false };
  }
};

export default LoginController;
