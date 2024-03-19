import { useParams } from "react-router-dom"
import { CharacterCard, Footer, Load } from "../components"
import axios from "axios"
import useSWR from "swr"

export const MainPage = () => {
  const params = useParams()
  const page = params.id
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`
  const { data, error } = useSWR(url,
    url => axios.get(url).then(res => res.data.results));
  if (error) return <div>Error</div>;
  if(!data) return <Load/>;
  return (
    <div>
      <main className='p-3 grid grid-cols-auto-fit tablet:grid-cols-3 gap-3 tablet:max-w-screen-tablet mx-auto'>
        {
          data.map((character, index) => (
            <CharacterCard key={index} name={character.name} image={character.image} status={character.status} specie={character.species} location={character.location.name} />
          ))
        }
      </main>
      <Footer page={page}/>
    </div>
  )
}
