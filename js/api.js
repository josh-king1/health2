// api.js
const API_BASE = "https://medical-api-yq6v.onrender.com/api";

// Generic request helper
async function request(endpoint, method = "GET", body = null, token = null) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  let text = await res.text();
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${text}`);

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

// ----------------------------
// ADMIN APIs
// ----------------------------

// REGISTER
export function adminRegister(fullName, title, email, phone, department, password, role) {
  return request("/admin/register", "POST", {
    fullName, title, email, phone, department, password, role
  });
}

// LOGIN
export function adminLogin(email, password) {
  return request("/admin/login", "POST", { email, password });
}

// GET PROFILE
export function getAdminProfile(token) {
  return request("/admin/profile", "GET", null, token);
}

// UPDATE PROFILE
export function updateAdminProfile(data, token) {
  return request("/admin/update", "PUT", data, token);
}



// ----------------------------
// MATERNAL RECORD APIs
// ----------------------------

// GET ALL
export function fetchMaternalRecords(token) {
  return request("/maternal", "GET", null, token);
}

// GET ONE
export function fetchMaternalById(id, token) {
  return request(`/maternal/${id}`, "GET", null, token);
}

// CREATE
export function createMaternalRecord(data, token) {
  return request("/maternal", "POST", data, token);
}

// UPDATE
export function updateMaternalRecord(id, data, token) {
  return request(`/maternal/${id}`, "PUT", data, token);
}

// DELETE
export function deleteMaternalRecord(id, token) {
  return request(`/maternal/${id}`, "DELETE", null, token);
}
