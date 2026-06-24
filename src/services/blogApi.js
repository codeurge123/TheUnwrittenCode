const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (window.location.hostname === "localhost" ? "http://localhost:3000/api" : "/api");

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || "Request failed");
  }

  return payload.data;
}

export function getBlogs(category) {
  const query = category ? `?category=${encodeURIComponent(category)}` : "";
  return request(`/blogs${query}`);
}

export function getBlog(slug) {
  return request(`/blogs/${slug}`);
}

export function createBlog(blog) {
  return request("/blogs", {
    method: "POST",
    body: JSON.stringify(blog),
  });
}
