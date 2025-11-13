const getApiBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_URI || "";
};

export const buildApiUrl = (path) => {
  const baseUrl = getApiBaseUrl();

  if (!baseUrl) {
    return path;
  }

  const cleanBase = baseUrl.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${cleanBase}${cleanPath}`;
};

export const apiFetch = async (path, options) => {
  const url = buildApiUrl(path);
  const res = await fetch(url, options);

  if (!res.ok) {
    console.error("Fetch error:", res.status, res.statusText);
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }

  return res;
};
