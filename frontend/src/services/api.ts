const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function getProfile() {
  const res = await fetch(`${API_URL}/profile/`, {
    cache: "no-store",
  })

  return res.json()
}

export async function getProjects() {
  const res = await fetch(`${API_URL}/projects/`, {
    cache: "no-store",
  })

  return res.json()
}