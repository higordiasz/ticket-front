const BASE_URL = "http://localhost:3333/ticket/";

const TicketEndpoints = {};

TicketEndpoints.GetTicket = (ticketID, token, language = "pt-br") => {
  return {
    Method: "GET",
    URL: `${BASE_URL}get/${ticketID}?lang=${language}`,
    Headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
};

TicketEndpoints.GetAllTickets = (status, type, token, language = "pt-br") => {
  return {
    Method: "GET",
    URL: `${BASE_URL}getall?lang=${language}&status=${status}&type=${type}`,
    Headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
};

TicketEndpoints.SetUrgent = (ticketID, token, language = "pt-br") => {
  return {
    Method: "GET",
    URL: `${BASE_URL}urgent/${ticketID}?lang=${language}`,
    Headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
};

TicketEndpoints.SetClosed = (ticketID, token, language = "pt-br") => {
  return {
    Method: "GET",
    URL: `${BASE_URL}close${ticketID}?lang=${language}`,
    Headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
};

TicketEndpoints.AddMessage = (
  message,
  type,
  ticketID,
  token,
  language = "pt-br"
) => {
  return {
    Method: "POST",
    URL: `${BASE_URL}message/add/${ticketID}?lang=${language}`,
    Headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    Body: {
      message: message,
      type: type,
    },
  };
};

TicketEndpoints.CreateTicket = (
  title,
  description,
  token,
  language = "pt-br"
) => {
  return {
    Method: "POST",
    URL: `${BASE_URL}create?lang=${language}`,
    Headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    Body: {
      title: title,
      description: description,
    },
  };
};

export default TicketEndpoints;
