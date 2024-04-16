const LoginController = {};

LoginController.tryLogin = async (username, password) => {
  try {
    const response = await fetch("http://localhost:3333/login", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error("Credenciais inválidas. Por favor, tente novamente.");
    }
    // Autenticação bem-sucedida
    const data = await response.json();
    return { error: data.error, message: data.message, token: data.token };
  } catch (error) {
    return { error: true, message: error.message, token: "" };
  }
};

LoginController.checkLogin = async (token) => {
  return;
};

export default LoginController;
