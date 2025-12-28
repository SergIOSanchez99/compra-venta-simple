const API_URL = "http://127.0.0.1:8000/api";

export const getProducts = () =>
  fetch(`${API_URL}/products`).then((res) => res.json());

export const getSales = () =>
  fetch(`${API_URL}/sales`).then((res) => res.json());

export const createSale = (data) =>
  fetch(`${API_URL}/sales`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
