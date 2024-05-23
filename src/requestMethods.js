import axios from "axios";
const BASE_URL = "http://localhost:5000/api";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjczYzc0OWU3ODM0MjMyNGNjMDEyYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjQzNzAyOSwiZXhwIjoxNzE2Njk2MjI5fQ.AhXnB1kU5Zrn_bF-BI4nKKL12bzpf1mX9cLDESCFRuY"
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
  });
  