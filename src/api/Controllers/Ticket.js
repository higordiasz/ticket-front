import Endpoints from "../Endpoints";

const TicketController = {};

TicketController.getTicket = async (ticketID, token) => {
  try {
    const endpoint = Endpoints.Ticket.GetTicket(ticketID, token);
    const response = await fetch(endpoint.URL, {
      method: endpoint.Method,
      headers: endpoint.Headers,
    });
    if (!response.ok) throw new Error("Não foi possivel localizar o ticket.");
    const data = await response.json();
    return { error: false, data: data.data, message: data.message };
  } catch (err) {
    return { error: true, data: {}, message: err.message };
  }
};

TicketController.getAllTickets = async (status, type, token) => {
  try {
    const endpoint = Endpoints.Ticket.GetAllTickets(status, type, token);
    const response = await fetch(endpoint.URL, {
      method: endpoint.Method,
      headers: endpoint.Headers,
    });
    if (!response.ok) throw new Error("Não foi possivel localizar os tickets.");
    const data = await response.json();
    return { error: false, data: data.data, message: data.message };
  } catch (err) {
    return { error: true, data: {}, message: err.message };
  }
};

TicketController.setUrgent = async (ticketID, token) => {
  try {
    const endpoint = Endpoints.Ticket.SetUrgent(ticketID, token);
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

TicketController.setClosed = async (ticketID, token) => {
  try {
    const endpoint = Endpoints.Ticket.SetClosed(ticketID, token);
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

TicketController.addMessage = async (message, type, ticketID, token) => {
  try {
    const endpoint = Endpoints.Ticket.AddMessage(
      message,
      type,
      ticketID,
      token
    );
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

TicketController.createTicket = async (title, description, token) => {
  try {
    const endpoint = Endpoints.Ticket.CreateTicket(title, description, token);
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

export default TicketController;
