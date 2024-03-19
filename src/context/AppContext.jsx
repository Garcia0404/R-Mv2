import { createContext, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

// Crear el contexto
export const Context = createContext();

// Crear el proveedor del contexto
export const AppContext = ({ children }) => {
  const [favorites,setFavorites] = useState([])
  const { data, error } = useSWR('https://rickandmortyapi.com/api/character',
    url => axios.get(url).then(res => res.data.results));
  if (!data) return
  if (error) return <div>Error al cargar</div>

  console.log(data)


  return (
    <Context.Provider value={{ data,favorites,setFavorites }}>
      {children}
    </Context.Provider>
  );
}

export default AppContext;
