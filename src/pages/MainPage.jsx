import { useParams } from "react-router-dom"
import { CharacterCard, Footer, Load } from "../components"
import useSWR from "swr"
import { getCharacters } from "../helpers/api"

export const MainPage = () => {
  const params = useParams()
  const page = params.id
  const { data, error } = useSWR(`?page=${page}`,getCharacters);
  if (error) return <div>Error</div>;
  if(!data) return <Load/>;
  return (
    <div>
      <main className='p-3 grid grid-cols-auto-fit gap-3 tablet:max-w-screen-tablet mx-auto justify-self-stretch'>
        {
          data.data.results.map((character, index) => (
            <CharacterCard key={index} name={character.name} image={character.image} status={character.status} specie={character.species} location={character.location.name} />
          ))
        }
      </main>
      <Footer page={page}/>
    </div>
  )
}
