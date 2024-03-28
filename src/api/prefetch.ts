import axios from "axios";

const origin = "http://localhost:8000/shopping/v1";

export async function prefetch(path: string) {
  try {
    return axios.get(`${origin}${path}`);
  } catch (e) {
    console.error("PREFETCH ERROR:::", e);
    return null;
  }
}
