export const PUBLIC_REQUEST = function (method, data = {}) {
  return {
    method: method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, PATCH, OPTIONS",
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  };
};

export const TOKEN_REQUEST = function (method, data = {}) {
  const { token } = JSON.parse(localStorage.getItem("user"));
  return {
    method: method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, PATCH, OPTIONS",
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  };
};

export const user = "user";

export const HTTP = {
  POST: "POST",
  PATCH: "PATCH",
  GET: "GET",
};
