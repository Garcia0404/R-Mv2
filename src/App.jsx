
import { useContext } from 'react';
import { Context } from './context/AppContext'
import { CharacterCard, Footer } from './components';

export const App = () => {
  const { data } = useContext(Context)

  return (
    <div>
      <main className='p-3 grid grid-cols-auto-fit tablet:grid-cols-3 gap-3 tablet:max-w-screen-tablet mx-auto'>
        {
          data.map((character, index) => (
            <CharacterCard key={index} name={character.name} image={character.image} status={character.status} specie={character.species} location={character.location.name}/>
          ))
        }
      </main>
      <Footer/>
    </div>
  );
}

