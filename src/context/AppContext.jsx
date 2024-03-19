import { createContext, useState } from 'react';
// Crear el contexto
export const Context = createContext();

// Crear el proveedor del contexto
export const AppContext = ({ children }) => {
  const [favorites,setFavorites] = useState([])

  return (
    <Context.Provider value={{ favorites,setFavorites }}>
      {children}
    </Context.Provider>
  );
}

export default AppContext;
