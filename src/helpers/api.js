import axios from "axios";

const link = axios.create({
  baseURL:'https://rickandmortyapi.com/api/character',
  headers:{
    "Content-Type":'application/json'
  }
})
export const getCharacters = async(url) => {
  const data = await link.get(url)
  return data
}