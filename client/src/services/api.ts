const API_URL = import.meta.env.VITE_API_URL;

// GET
export const apiGet = async (endpoint: string) => {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

// POST
export const apiPost = async (
  endpoint: string,
  body: Record<string, unknown>,
) => {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

// PUT
export const apiPut = async (
  endpoint: string,
  body: Record<string, unknown>,
) => {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

// PATCH
export const apiPatch = async (
  endpoint: string,
  body: Record<string, unknown>,
) => {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

// DELETE
export const apiDelete = async (endpoint: string) => {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    method: "DELETE",
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

// FORM DATA
export const apiFormData = async (endpoint: string, formData: FormData) => {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};
